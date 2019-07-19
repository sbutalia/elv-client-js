const Ethers = require("ethers");
const Id = require("./Id");
const Crypto = require("./Crypto");
const Utils = require("./Utils");

// -- Contract javascript files built using build/BuildContracts.js
const SpaceContract = require("./contracts/BaseContentSpace");
const LibraryContract = require("./contracts/BaseLibrary");
const TypeContract = require("./contracts/BaseContentType");
const ContentContract = require("./contracts/BaseContent");
const OwnableContract = require("./contracts/Ownable");
const AccessibleContract = require("./contracts/Accessible");
const EditableContract = require("./contracts/Editable");

const ACCESS_TYPES = {
  SPACE: "space",
  LIBRARY: "library",
  TYPE: "type",
  OBJECT: "object",
  WALLET: "wallet",
  GROUP: "group",
  OTHER: "other"
};

class AuthorizationClient {
  constructor({client, contentSpaceId, noCache=false, noAuth=false}) {
    this.client = client;
    this.contentSpaceId = contentSpaceId;
    this.noCache = noCache;
    this.noAuth = noAuth;

    this.accessTransactions = {
      spaces: {},
      libraries: {},
      objects: {},
      types: {},
      other: {}
    };

    this.modifyTransactions = {
      spaces: {},
      libraries: {},
      objects: {},
      types: {},
      other: {}
    };

    this.channelContentTokens = {};
    this.reencryptionKeys = {};
    this.requestIds = {};
    this.accessTypes = {};
  }

  async AuthorizationHeader({
    libraryId,
    objectId,
    versionHash,
    partHash,
    encryption,
    update=false,
    channelAuth=false,
    noCache=false,
    noAuth=false
  }) {
    const authorizationToken = await this.AuthorizationToken({
      libraryId,
      objectId,
      versionHash,
      partHash,
      encryption,
      update,
      channelAuth,
      noCache,
      noAuth
    });

    const headers = { Authorization: "Bearer " + authorizationToken };

    if(encryption && encryption !== "none") {
      headers["X-Content-Fabric-Encryption-Scheme"] = encryption;
    }

    return headers;
  }

  // Wrapper for GenerateAuthorizationHeader to allow for per-call disabling of cache
  async AuthorizationToken({
    libraryId,
    objectId,
    versionHash,
    partHash,
    encryption,
    update=false,
    channelAuth=false,
    noCache=false,
    noAuth=false
  }) {
    const initialNoCache = this.noCache;

    try {
      // noCache enabled for this call
      if(noCache && !this.noCache) {
        this.noCache = true;
      }

      let authorizationToken;
      if(channelAuth) {
        authorizationToken = await this.GenerateChannelContentToken({objectId});
      } else {
        authorizationToken = await this.GenerateAuthorizationToken({
          libraryId,
          objectId,
          versionHash,
          partHash,
          encryption,
          update,
          noAuth
        });
      }

      this.noCache = initialNoCache;

      return authorizationToken;
    } catch(error) {
      // Ensure nocache is properly reset
      this.noCache = initialNoCache;
      throw error;
    }
  }

  async Owner({id, abi}) {
    if(!this.client.signer) { return false; }

    const ownerAddress = await this.client.CallContractMethod({
      contractAddress: Utils.HashToAddress(id),
      abi,
      methodName: "owner",
      methodArgs: []
    });

    return Utils.FormatAddress(ownerAddress);
  }

  async Sign(message) {
    return await Promise.resolve(
      Ethers.utils.joinSignature(this.client.signer.signingKey.signDigest(message))
    );
  }

  async KMSInfo({objectId, versionHash}) {
    if(versionHash) {
      objectId = Utils.DecodeVersionHash(versionHash).objectId;
    }

    // Get KMS info for the object
    const KMSInfo = await this.client.CallContractMethod({
      contractAddress: Utils.HashToAddress(objectId),
      abi: ContentContract.abi,
      methodName: "getKMSInfo",
      methodArgs: [[]]
    });

    return {
      urls: KMSInfo[0],
      publicKey: KMSInfo[1]
    };
  }

  async KMSUrl({objectId, versionHash}) {
    let KMSUrls = (await this.KMSInfo({objectId, versionHash})).urls;

    // Randomize order of URLs so the same one isn't chosen every time
    KMSUrls = KMSUrls.split(",").sort(() => 0.5 - Math.random());

    // Prefer HTTPS urls
    return KMSUrls.find(url => url.startsWith("https")) || KMSUrls.find(url => url.startsWith("http"));
  }

  async ReEncryptionCap({libraryId, objectId}) {
    if(!this.reencryptionKeys[objectId]) {
      const cap = await Crypto.GenerateTargetCap();

      // Retrieve symmetric key
      if(!libraryId) {
        libraryId = Utils.AddressToLibraryId(
          await this.client.CallContractMethod({
            contractAddress: Utils.HashToAddress(objectId),
            abi: ContentContract.abi,
            methodName: "libraryAddress"
          })
        );
      }

      const args = [this.client.contentSpaceId, libraryId, objectId, ""];
      const stateChannelUri = await this.KMSUrl({objectId});
      const stateChannelProvider = new Ethers.providers.JsonRpcProvider(stateChannelUri);
      cap.symm_key = await stateChannelProvider.send("elv_getSymmetricKey", args);

      this.reencryptionKeys[objectId] = cap;
    }

    return this.reencryptionKeys[objectId];
  }

  async GenerateChannelContentToken({objectId, value=0}) {
    if(!this.noCache && this.channelContentTokens[objectId]) {
      return this.channelContentTokens[objectId];
    }

    const nonce = (Date.now() + Id.next());

    const paramTypes = [
      "address",
      "address",
      "uint",
      "uint"
    ];

    let params = [
      this.client.signer.address,
      Utils.HashToAddress(objectId),
      value,
      nonce
    ];

    const packedHash = Ethers.utils.solidityKeccak256(paramTypes, params);
    params[4] = await this.Sign(packedHash);

    const stateChannelUri = await this.KMSUrl({objectId});
    const stateChannelProvider = new Ethers.providers.JsonRpcProvider(stateChannelUri);
    const payload = await stateChannelProvider.send("elv_channelContentRequest", params);

    const signature = await this.Sign(Ethers.utils.keccak256(Ethers.utils.toUtf8Bytes(payload)));
    const multiSig = Utils.FormatSignature(signature);

    const token = `${payload}.${Utils.B64(multiSig)}`;

    if(!this.noCache) {
      this.channelContentTokens[objectId] = token;
    }

    return token;
  }

  async GenerateAuthorizationToken({libraryId, objectId, versionHash, partHash, encryption, update=false, noAuth=false}) {
    if(versionHash) { objectId = Utils.DecodeVersionHash(versionHash).objectId; }

    const { transactionHash } =  await this.MakeAccessRequest({
      libraryId,
      objectId,
      versionHash,
      update,
      noCache: this.noCache,
      noAuth: this.noAuth || noAuth
    });

    let token = {
      qspace_id: this.contentSpaceId,
      addr: ((this.client.signer && this.client.signer.address) || "").replace("0x", ""),
      tx_id: (transactionHash || "").replace("0x", "")
    };

    if(libraryId) { token.qlib_id = libraryId; }
    if(partHash) { token.qphash = partHash; }

    if(encryption && objectId && await this.AccessType(objectId) === ACCESS_TYPES.OBJECT) {
      const owner = await this.Owner({id: objectId, abi: ContentContract.abi});
      if(!Utils.EqualAddress(owner, this.client.signer.address)) {
        const cap = await this.ReEncryptionCap({libraryId, objectId});
        token.afgh_pk = cap.public_key;
      }
    }

    token = Utils.B64(JSON.stringify(token));

    const signature = await this.Sign(Ethers.utils.keccak256(Ethers.utils.toUtf8Bytes(token)));
    const multiSig = Utils.FormatSignature(signature);

    return `${token}.${Utils.B64(multiSig)}`;
  }

  // Generate proper authorization header based on the information provided
  async MakeAccessRequest({
    libraryId,
    objectId,
    versionHash,
    args=[],
    update=false,
    skipCache=false,
    noCache=false,
    noAuth=false,
    cacheOnly
  }) {
    if(noAuth || !this.client.signer) {
      return { transactionHash: "" };
    }

    if(versionHash) { objectId = Utils.DecodeVersionHash(versionHash).objectId; }

    const id = objectId || libraryId || this.contentSpaceId;
    const accessType = await this.AccessType(id);
    const cacheCollection = update ? this.modifyTransactions : this.accessTransactions;

    let abi, cache;
    let checkAccessCharge = false;

    switch(accessType) {
      case ACCESS_TYPES.SPACE:
        abi = SpaceContract.abi;
        cache = cacheCollection.spaces;
        break;
      case ACCESS_TYPES.LIBRARY:
        abi = LibraryContract.abi;
        cache = cacheCollection.libraries;
        break;
      case ACCESS_TYPES.TYPE:
        abi = TypeContract.abi;
        cache = cacheCollection.types;
        break;
      case ACCESS_TYPES.OBJECT:
        abi = ContentContract.abi;
        cache = cacheCollection.objects;
        checkAccessCharge = true;

        if(args && args.length > 0) {
          // Inject public key of requester
          args[1] = this.client.signer.signingKey ? this.client.signer.signingKey.publicKey : "";
        } else {
          // Set default args
          args = [
            0, // Access level
            this.client.signer.signingKey ? this.client.signer.signingKey.publicKey : "", // Public key of requester
            "", //cap.public_key,
            [], // Custom values
            [] // Stakeholders
          ];
        }
        break;
      default:
        abi = update ? EditableContract.abi : AccessibleContract.abi;
        cache = cacheCollection.other;
    }

    // Check cache for existing transaction
    if(!noCache && !skipCache) {
      if(cache[id]) { return { transactionHash: cache[id] }; }
    }

    // If only checking the cache, don't continue to make access request
    if(cacheOnly) { return; }

    let accessRequest = { transactionHash: "" };
    // Make the request
    if(update) {
      accessRequest = await this.UpdateRequest({id, abi});
    } else {
      accessRequest = await this.AccessRequest({id, abi, args, checkAccessCharge});
    }

    // Cache the transaction hash
    if(!noCache) {
      cache[id] = accessRequest.transactionHash;

      // Save request ID if present
      accessRequest.logs.some(log => {
        if(log.values && log.values.requestID) {
          this.requestIds[id] = log.values.requestID;
          return true;
        }
      });
    }

    await this.RecordTags({accessType, libraryId, objectId, versionHash});

    return accessRequest;
  }

  async RecordTags({accessType, libraryId, objectId, versionHash}) {
    if(accessType !== ACCESS_TYPES.OBJECT) { return; }

    // After making an access request, record the tags in the user's profile, if appropriate
    const owner = await this.Owner({id: objectId, abi: ContentContract.abi});
    if(!Utils.EqualAddress(owner, this.client.signer.address)) {
      await this.client.userProfileClient.RecordTags({libraryId, objectId, versionHash});
    }
  }

  CacheLibraryTransaction({libraryId, transactionHash}) {
    this.modifyTransactions.libraries[libraryId] = transactionHash;
  }

  CacheObjectTransaction({objectId, transactionHash}) {
    this.modifyTransactions.objects[objectId] = transactionHash;
  }

  /* Access */
  async AccessType(id) {
    if(this.accessTypes[id]) { return this.accessTypes[id]; }

    let accessType;

    try {
      const version =
        Ethers.utils.parseBytes32String(
          await this.client.CallContractMethod({
            contractAddress: Utils.HashToAddress(id),
            abi: OwnableContract.abi,
            methodName: "version"
          })
        );

      if(version.match(/BaseContentSpace\d+.*/)) {
        // BaseContentSpace20190612120000PO
        accessType = ACCESS_TYPES.SPACE;
      } else if(version.match(/BaseLibrary\d+.*/)) {
        // BaseLibrary20190605150200ML
        accessType = ACCESS_TYPES.LIBRARY;
      } else if(version.match(/BaseContentType\d+.*/)) {
        // BaseContentType20190605150100ML
        accessType = ACCESS_TYPES.TYPE;
      } else if(version.match(/BsAccessWallet\d+.*/)) {
        // BaseContent20190611120000PO
        accessType = ACCESS_TYPES.WALLET;
      } else if(version.match(/BsAccessCtrlGrp\d+.*/)) {
        // BaseContent20190611120000PO
        accessType = ACCESS_TYPES.GROUP;
      } else if(version.match(/BaseContent\d+.*/)) {
        // BaseContent20190611120000PO
        accessType = ACCESS_TYPES.OBJECT;
      } else {
        accessType = ACCESS_TYPES.OTHER;
      }
    } catch(error) {
      accessType = ACCESS_TYPES.OTHER;
    }

    this.accessTypes[id] = accessType;

    return accessType;
  }

  async GetAccessCharge({objectId, args}) {
    const info = await this.client.CallContractMethod({
      contractAddress: Utils.HashToAddress(objectId),
      abi: ContentContract.abi,
      methodName: "getAccessInfo",
      methodArgs: args
    });

    return info[2];
  }

  async AccessComplete({id, abi, score}) {
    const requestId = this.requestIds[id];

    if(!requestId) { throw Error("Unknown request ID for " + id); }

    // If access request did not succeed, no event will be emitted
    const event = await this.client.CallContractMethodAndWait({
      contractAddress: Utils.HashToAddress(id),
      abi,
      methodName: "accessComplete",
      methodArgs: [requestId, score, ""]
    });

    delete this.requestIds[id];
    delete this.accessTransactions.objects[id];

    return event;
  }

  async AccessRequest({id, abi, args=[], checkAccessCharge=false}) {
    // Send some bux if access charge is required
    let accessCharge = 0;
    const accessType = await this.AccessType(id);
    if(checkAccessCharge && accessType === ACCESS_TYPES.OBJECT) {
      const owner = await this.Owner({id, abi});
      // Owner doesn't have to pay
      if(!Utils.EqualAddress(this.client.signer.address, owner)) {
        // Extract level, custom values and stakeholders from accessRequest arguments
        const accessChargeArgs = [args[0], args[3], args[4]];
        // Access charge is in wei, but methods take ether - convert to charge to ether
        accessCharge = Utils.WeiToEther(await this.GetAccessCharge({objectId: id, args: accessChargeArgs}));
      }
    }

    // If access request did not succeed, no event will be emitted
    const event = await this.client.CallContractMethodAndWait({
      contractAddress: Utils.HashToAddress(id),
      abi,
      methodName: "accessRequest",
      methodArgs: args,
      value: accessCharge,
    });

    const accessRequestEvent = this.client.ExtractEventFromLogs({
      abi,
      event,
      eventName: "AccessRequest"
    });

    if(event.logs.length === 0 || !accessRequestEvent) {
      throw Error("Access denied");
    }

    return event;
  }

  async UpdateRequest({id, abi}) {
    return await this.client.CallContractMethodAndWait({
      contractAddress: Utils.HashToAddress(id),
      abi,
      methodName: "updateRequest",
      methodArgs: [],
    });
  }

  /* Creation methods */

  async CreateAccessGroup() {
    // Deploy contract
    const { contractAddress, transactionHash } = await this.client.ethClient.DeployAccessGroupContract({
      contentSpaceAddress: Utils.HashToAddress(this.contentSpaceId),
      signer: this.client.signer
    });

    return {
      contractAddress,
      transactionHash
    };
  }

  async CreateContentType() {
    // Deploy contract
    const { contractAddress, transactionHash } = await this.client.ethClient.DeployTypeContract({
      contentSpaceAddress: Utils.HashToAddress(this.contentSpaceId),
      signer: this.client.signer
    });

    return {
      contractAddress,
      transactionHash
    };
  }

  async CreateContentLibrary({kmsId}) {
    // Deploy contract
    const {contractAddress, transactionHash} = await this.client.ethClient.DeployLibraryContract({
      contentSpaceAddress: Utils.HashToAddress(this.contentSpaceId),
      kmsId,
      signer: this.client.signer
    });

    return {
      contractAddress,
      transactionHash
    };
  }

  async CreateContentObject({libraryId, typeId}) {
    // Deploy contract
    const { contractAddress, transactionHash } = await this.client.ethClient.DeployContentContract({
      contentLibraryAddress: Utils.HashToAddress(libraryId),
      typeAddress: typeId ? Utils.HashToAddress(typeId) : Utils.nullAddress,
      signer: this.client.signer
    });

    return {
      contractAddress,
      transactionHash
    };
  }

  // Clear cached access transaction IDs and state channel tokens
  ClearCache() {
    this.accessTransactions = {
      spaces: {},
      libraries: {},
      types: {},
      objects: {},
      other: {}
    };

    this.modifyTransactions = {
      spaces: {},
      libraries: {},
      types: {},
      objects: {},
      other: {}
    };

    this.channelContentTokens = {};
  }
}

module.exports = AuthorizationClient;
