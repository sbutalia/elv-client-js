"use strict";

var contract = {
  "abi": [{
    "constant": false,
    "inputs": [],
    "name": "parentAddress",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "creator",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_candidate",
      "type": "address"
    }],
    "name": "canContribute",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }, {
      "name": "content_contract",
      "type": "address"
    }],
    "name": "addContentType",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "canConfirm",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_locator",
      "type": "bytes"
    }],
    "name": "submitNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "contentTypeContracts",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "typeHash",
      "type": "bytes32"
    }],
    "name": "findTypeByHash",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }],
    "name": "canNodePublish",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_kmsID",
      "type": "string"
    }, {
      "name": "prefix",
      "type": "bytes"
    }],
    "name": "getKMSInfo",
    "outputs": [{
      "name": "",
      "type": "string"
    }, {
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "canReview",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }],
    "name": "validType",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "contentObj",
      "type": "address"
    }],
    "name": "publish",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "registerSpaceNode",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "addressKMS",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "countVersionHashes",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "requiresReview",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "address_KMS",
      "type": "address"
    }],
    "name": "createLibrary",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "numActiveNodes",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "libraryFactory",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "confirmCommit",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "activeNodeLocators",
    "outputs": [{
      "name": "",
      "type": "bytes"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "activeNodeAddresses",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "createGroup",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_user",
      "type": "address"
    }],
    "name": "createUserGuarantorWallet",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_kmsAddr",
      "type": "address"
    }],
    "name": "getKMSID",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "pendingHash",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "userWallets",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_nodeAddr",
      "type": "address"
    }, {
      "name": "_locator",
      "type": "bytes"
    }],
    "name": "addNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_kmsID",
      "type": "string"
    }, {
      "name": "_locator",
      "type": "bytes"
    }],
    "name": "addKMSLocator",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "pendingNodeLocators",
    "outputs": [{
      "name": "",
      "type": "bytes"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "pendingNodeAddresses",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "newCreator",
      "type": "address"
    }],
    "name": "transferCreatorship",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "canCommit",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "description",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "createAccessWallet",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "versionTimestamp",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "versionHashes",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setWalletFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setContentFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_kmsIdStr",
      "type": "string"
    }],
    "name": "checkKMS",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentFactory",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_space_description",
      "type": "string"
    }],
    "name": "setDescription",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "hasAccess",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_objectHash",
      "type": "string"
    }],
    "name": "commit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "contentTypes",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_candidate",
      "type": "address"
    }],
    "name": "canPublish",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }],
    "name": "whitelistedType",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setLibraryFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "getAccessWallet",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_kmsID",
      "type": "string"
    }, {
      "name": "_pubKey",
      "type": "string"
    }],
    "name": "setKMSPublicKey",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "unregisterSpaceNode",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "key",
      "type": "bytes"
    }],
    "name": "getMeta",
    "outputs": [{
      "name": "",
      "type": "bytes"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentSpace",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_nodeAddr",
      "type": "address"
    }],
    "name": "removeNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "createContentType",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "lib",
      "type": "address"
    }, {
      "name": "content_type",
      "type": "address"
    }],
    "name": "createContent",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "updateRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "factory",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "walletFactory",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentTypesLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "engageAccountLibrary",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "address_KMS",
      "type": "address"
    }],
    "name": "setAddressKMS",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_kmsAddr",
      "type": "address"
    }],
    "name": "checkKMSAddr",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_nodeAddr",
      "type": "address"
    }],
    "name": "approveNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "objectHash",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_versionHash",
      "type": "string"
    }],
    "name": "deleteVersion",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "key",
      "type": "bytes"
    }, {
      "name": "value",
      "type": "bytes"
    }],
    "name": "putMeta",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_v",
      "type": "uint8[]"
    }, {
      "name": "_r",
      "type": "bytes32[]"
    }, {
      "name": "_s",
      "type": "bytes32[]"
    }, {
      "name": "_from",
      "type": "address[]"
    }, {
      "name": "_dest",
      "type": "address[]"
    }, {
      "name": "_value",
      "type": "uint256[]"
    }, {
      "name": "_ts",
      "type": "uint256[]"
    }],
    "name": "executeBatch",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "accessRequest",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "numPendingNodes",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "nodeMapping",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }],
    "name": "removeContentType",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_kmsID",
      "type": "string"
    }, {
      "name": "_locator",
      "type": "bytes"
    }],
    "name": "removeKMSLocator",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "name": "content_space_name",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentTypeAddress",
      "type": "address"
    }],
    "name": "CreateContentType",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "libraryAddress",
      "type": "address"
    }],
    "name": "CreateLibrary",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "groupAddress",
      "type": "address"
    }],
    "name": "CreateGroup",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentAddress",
      "type": "address"
    }],
    "name": "CreateContent",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "wallet",
      "type": "address"
    }],
    "name": "CreateAccessWallet",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "accountAddress",
      "type": "address"
    }],
    "name": "EngageAccountLibrary",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "factory",
      "type": "address"
    }],
    "name": "SetFactory",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "nodeObjAddr",
      "type": "address"
    }],
    "name": "RegisterNode",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "nodeObjAddr",
      "type": "address"
    }],
    "name": "UnregisterNode",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "sender",
      "type": "address"
    }, {
      "indexed": false,
      "name": "status",
      "type": "uint256"
    }],
    "name": "AddKMSLocator",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "sender",
      "type": "address"
    }, {
      "indexed": false,
      "name": "status",
      "type": "uint256"
    }],
    "name": "RemoveKMSLocator",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "version",
      "type": "bytes32"
    }, {
      "indexed": false,
      "name": "owner",
      "type": "address"
    }],
    "name": "CreateSpace",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "walletAddress",
      "type": "address"
    }],
    "name": "GetAccessWallet",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "addr",
      "type": "address"
    }, {
      "indexed": false,
      "name": "locator",
      "type": "bytes"
    }],
    "name": "NodeSubmitted",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "addr",
      "type": "address"
    }, {
      "indexed": false,
      "name": "locator",
      "type": "bytes"
    }],
    "name": "NodeApproved",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "ownerAddr",
      "type": "address"
    }, {
      "indexed": false,
      "name": "nodeAddr",
      "type": "address"
    }],
    "name": "AddNode",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "ownerAddr",
      "type": "address"
    }, {
      "indexed": false,
      "name": "nodeAddr",
      "type": "address"
    }],
    "name": "RemoveNode",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentType",
      "type": "address"
    }, {
      "indexed": false,
      "name": "contentContract",
      "type": "address"
    }],
    "name": "ContentTypeAdded",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentType",
      "type": "address"
    }],
    "name": "ContentTypeRemoved",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "parentAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "CommitPending",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "UpdateRequest",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "VersionConfirm",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "versionHash",
      "type": "string"
    }, {
      "indexed": false,
      "name": "index",
      "type": "int256"
    }],
    "name": "VersionDelete",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [],
    "name": "AccessRequest",
    "type": "event"
  }],
  "bytecode": "60806040527f4f776e61626c6532303139303532383139333830304d4c00000000000000000060009081557f41636365737369626c6532303139303232323133353930304d4c0000000000006006557f4564697461626c653230313930373135313035363030504f00000000000000006007557f436f6e7461696e657232303139303532393039313830304d4c00000000000000600d556010557f55736572537061636532303139303530363135353330304d4c000000000000006012557f4e6f6465537061636532303139303532383137303130304d4c000000000000006014557f42617365436f6e74656e7453706163653230313930373033313230303030504f6019553480156200011257600080fd5b50604051620059a4380380620059a48339810160405280516001805432600160a060020a031991821681179092556002805490911690911790550180516200016290601a906020840190620001c6565b5060038054600160a060020a0319163017905560195460025460408051928352600160a060020a0391909116602083015280517f599bb380c80b69455450a615c515544b8da3b09f2efa116a5f0567682203cf549281900390910190a1506200026b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200020957805160ff191683800117855562000239565b8280016001018555821562000239579182015b82811115620002395782518255916020019190600101906200021c565b50620002479291506200024b565b5090565b6200026891905b8082111562000247576000815560010162000252565b90565b615729806200027b6000396000f30060806040526004361061038b5763ffffffff60e060020a600035041662821de3811461038d57806302d05d3f146103be57806306fdde03146103d35780630eaec2c51461045d5780630f58a7861461049257806314cfabb3146104b9578063160eee74146104ce5780631cdbee5a146105275780631f2caaec1461054857806326683e1414610560578063268bfac41461058157806329d00219146106f657806329dedde5146107175780632cf99422146107385780632f7a781a1461075957806332eaf21b1461076e578063331b86c0146107835780633dd71d99146107aa57806340b89f06146107bf57806341c0e1b5146107e057806343f59ec7146107f5578063441c5aa31461080a578063446e88261461081f5780635272ae171461082757806352f82dd81461083f57806354fd4d5014610857578063575185ed1461086c5780635834028d14610881578063589aafc1146108a25780635bb47808146108c3578063628449fd146108e457806363e6ffdd146108f957806364f0f0501461091a578063653a92f61461098157806369e30ff814610a185780636be9514c14610a305780636d2e4b1b14610a485780636e37542714610a695780637284e41614610a7e5780637708bc4114610a935780637886f74714610aa85780637ca8f61814610ac05780637ebf879c14610ad857806385ce1df114610af95780638d2a23db14610b1a5780638da5cb5b14610b73578063904696a814610b8857806390c3f38f14610b9d57806395a078e814610bf65780639867db7414610c17578063991a3a7c14610c705780639b55f9011461045d5780639cb121ba14610c885780639d05d18d14610ca9578063a2d67fcf14610cca578063a69cb73414610cdf578063abe596b114610d76578063ac55c90614610d8b578063af570c0414610de4578063b2b99ec914610df9578063b8cfaf0514610e1a578063bf4e088f14610e2f578063c287e0ed14610e56578063c45a015514610e6b578063c5c0369914610e80578063c65bcbe214610e95578063c82710c114610eaa578063c9e8e72d14610ebf578063d6be0f4914610ee0578063dd4c97a014610f01578063e02dd9c214610f22578063e1a7071714610f37578063e542b7cb14610f90578063e9861ab114611027578063f1551887146111d2578063f2fde38b146111e7578063f41a158714611208578063fbd1b4ce1461121d578063fd0891961461123e578063fe7ac19f1461125f575b005b34801561039957600080fd5b506103a26112f6565b60408051600160a060020a039092168252519081900360200190f35b3480156103ca57600080fd5b506103a2611306565b3480156103df57600080fd5b506103e8611315565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561042257818101518382015260200161040a565b50505050905090810190601f16801561044f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561046957600080fd5b5061047e600160a060020a03600435166113a3565b604080519115158252519081900360200190f35b34801561049e57600080fd5b5061038b600160a060020a03600435811690602435166113d4565b3480156104c557600080fd5b5061047e611549565b3480156104da57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261038b9436949293602493928401919081908401838280828437509497506115599650505050505050565b34801561053357600080fd5b506103a2600160a060020a036004351661190c565b34801561055457600080fd5b506103a2600435611927565b34801561056c57600080fd5b5061047e600160a060020a0360043516611bab565b34801561058d57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261061894369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750949750611c099650505050505050565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610659578181015183820152602001610641565b50505050905090810190601f1680156106865780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156106b95781810151838201526020016106a1565b50505050905090810190601f1680156106e65780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561070257600080fd5b5061047e600160a060020a0360043516612052565b34801561072357600080fd5b5061047e600160a060020a0360043516612058565b34801561074457600080fd5b5061047e600160a060020a0360043516612076565b34801561076557600080fd5b506103a2612196565b34801561077a57600080fd5b506103a261230d565b34801561078f57600080fd5b5061079861231c565b60408051918252519081900360200190f35b3480156107b657600080fd5b5061047e612322565b3480156107cb57600080fd5b506103a2600160a060020a0360043516612327565b3480156107ec57600080fd5b5061038b612402565b34801561080157600080fd5b5061079861243e565b34801561081657600080fd5b506103a2612444565b61047e612453565b34801561083357600080fd5b506103e8600435612628565b34801561084b57600080fd5b506103a260043561269c565b34801561086357600080fd5b506107986126c4565b34801561087857600080fd5b506103a26126ca565b34801561088d57600080fd5b5061047e600160a060020a0360043516612794565b3480156108ae57600080fd5b506103e8600160a060020a0360043516612930565b3480156108cf57600080fd5b5061038b600160a060020a0360043516612943565b3480156108f057600080fd5b506103e8612993565b34801561090557600080fd5b506103a2600160a060020a03600435166129ee565b34801561092657600080fd5b5060408051602060046024803582810135601f810185900485028601850190965285855261038b958335600160a060020a0316953695604494919390910191908190840183828082843750949750612a099650505050505050565b34801561098d57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261047e94369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750949750612c4e9650505050505050565b348015610a2457600080fd5b506103e8600435612fb1565b348015610a3c57600080fd5b506103a2600435612fbf565b348015610a5457600080fd5b5061038b600160a060020a0360043516612fcd565b348015610a7557600080fd5b5061047e61301b565b348015610a8a57600080fd5b506103e861302c565b348015610a9f57600080fd5b506103a2613087565b348015610ab457600080fd5b50610798600435613092565b348015610acc57600080fd5b506103e86004356130b1565b348015610ae457600080fd5b5061038b600160a060020a03600435166130bf565b348015610b0557600080fd5b5061038b600160a060020a036004351661310f565b348015610b2657600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261079894369492936024939284019190819084018382808284375094975061315f9650505050505050565b348015610b7f57600080fd5b506103a26131c7565b348015610b9457600080fd5b506103a26131d6565b348015610ba957600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261038b9436949293602493928401919081908401838280828437509497506131e59650505050505050565b348015610c0257600080fd5b5061047e600160a060020a036004351661322a565b348015610c2357600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261038b9436949293602493928401919081908401838280828437509497506132309650505050505050565b348015610c7c57600080fd5b506103a2600435613340565b348015610c9457600080fd5b5061047e600160a060020a036004351661334e565b348015610cb557600080fd5b5061038b600160a060020a03600435166133a5565b348015610cd657600080fd5b506103a26133f5565b348015610ceb57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261038b94369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506134819650505050505050565b348015610d8257600080fd5b5061047e613528565b348015610d9757600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103e894369492936024939284019190819084018382808284375094975061361d9650505050505050565b348015610df057600080fd5b506103a26137cb565b348015610e0557600080fd5b5061038b600160a060020a03600435166137da565b348015610e2657600080fd5b506103a26138a6565b348015610e3b57600080fd5b506103a2600160a060020a036004358116906024351661396d565b348015610e6257600080fd5b5061038b613a51565b348015610e7757600080fd5b506103a2613b27565b348015610e8c57600080fd5b506103a2613b36565b348015610ea157600080fd5b50610798613b45565b348015610eb657600080fd5b506103a2613b4b565b348015610ecb57600080fd5b5061038b600160a060020a0360043516613b85565b348015610eec57600080fd5b50610798600160a060020a0360043516613bd5565b348015610f0d57600080fd5b5061038b600160a060020a0360043516613c4b565b348015610f2e57600080fd5b506103e8613e8c565b348015610f4357600080fd5b506040805160206004803580820135601f8101849004840285018401909552848452610798943694929360249392840191908190840183828082843750949750613ee79650505050505050565b348015610f9c57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261038b94369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a99988101979196509182019450925082915084018382808284375094975061448f9650505050505050565b34801561103357600080fd5b506040805160206004803580820135838102808601850190965280855261038b95369593946024949385019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506145779650505050505050565b3480156111de57600080fd5b5061047e61477d565b3480156111f357600080fd5b5061038b600160a060020a03600435166147ae565b34801561121457600080fd5b50610798614813565b34801561122957600080fd5b506103a2600160a060020a0360043516614819565b34801561124a57600080fd5b5061047e600160a060020a0360043516614833565b34801561126b57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261047e94369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506149d69650505050505050565b600354600160a060020a03165b90565b600154600160a060020a031681565b601a805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561139b5780601f106113705761010080835404028352916020019161139b565b820191906000526020600020905b81548152906001019060200180831161137e57829003601f168201915b505050505081565b600254600090600160a060020a03838116911614806113cc5750600254600160a060020a031633145b90505b919050565b600254600160a060020a03163214806113f75750600254600160a060020a031633145b151561140257600080fd5b600160a060020a0380831660009081526011602052604090205416158015611430575061142e8261334e565b155b156114dc57600f5460105410156114865781600f60105481548110151561145357fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506114d2565b600f80546001810182556000919091527f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac802018054600160a060020a031916600160a060020a0384161790555b6010805460010190555b600160a060020a038281166000818152601160209081526040918290208054600160a060020a0319169486169485179055815192835282019290925281517f280016f7418306a55542432120fd1a239ef9fcc1a92694d8d44ca76be0249ea7929181900390910190a15050565b600061155433611bab565b905090565b61168f60178054806020026020016040519081016040528092919081815260200182805480156115b257602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311611594575b50505050506018805480602002602001604051908101604052809291908181526020016000905b828210156116845760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156116705780601f1061164557610100808354040283529160200191611670565b820191906000526020600020905b81548152906001019060200180831161165357829003601f168201915b5050505050815260200190600101906115d9565b505050503384614e64565b1561169957600080fd5b6117c460158054806020026020016040519081016040528092919081815260200182805480156116f257602002820191906000526020600020905b8154600160a060020a031681526001909101906020018083116116d4575b50505050506016805480602002602001604051908101604052809291908181526020016000905b828210156116845760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156117b05780601f10611785576101008083540402835291602001916117b0565b820191906000526020600020905b81548152906001019060200180831161179357829003601f168201915b505050505081526020019060010190611719565b156117ce57600080fd5b6017546064116117dd57600080fd5b60188054600181018083556000929092528251611821917fb13d2d76d1f4b7be834882e410b3e3a8afaf69f83600ae24db354391d2378d2e019060208501906154fb565b50506017805460018101825560009182527fc624b66cc0138b8fabc209247f72d758e1cf3343756d543badbf24212bed8c15018054600160a060020a0319163390811790915560408051828152602081810183815286519383019390935285517fae5645569f32b946f7a747113c64094a29a6b84c5ddf55816ef4381ce8a3a46d958794926060850192908601918190849084905b838110156118ce5781810151838201526020016118b6565b50505050905090810190601f1680156118fb5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a150565b601160205260009081526040902054600160a060020a031681565b600080805b600f54821015611b9f57600f80548390811061194457fe5b6000918252602091829020015460408051808401889052815180820385018152908201918290528051600160a060020a03909316945092909182918401908083835b602083106119a55780518252601f199092019160209182019101611986565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191681600160a060020a031663e02dd9c26040518163ffffffff1660e060020a028152600401600060405180830381600087803b158015611a1457600080fd5b505af1158015611a28573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015611a5157600080fd5b810190808051640100000000811115611a6957600080fd5b82016020810184811115611a7c57600080fd5b8151640100000000811182820187101715611a9657600080fd5b50509291905050506040516020018082805190602001908083835b60208310611ad05780518252601f199092019160209182019101611ab1565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310611b335780518252601f199092019160209182019101611b14565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415611b9457600f805483908110611b7857fe5b600091825260209091200154600160a060020a03169250611ba4565b60019091019061192c565b600092505b5050919050565b6000805b601554811015611bfe5782600160a060020a0316601582815481101515611bd257fe5b600091825260209091200154600160a060020a03161415611bf65760019150611c03565b600101611baf565b600091505b50919050565b60608060608060608060006021896040518082805190602001908083835b60208310611c465780518252601f199092019160209182019101611c27565b51815160209384036101000a60001901801990921691161790529201948552506040805194859003820185208054808402870184019092528186529350915060009084015b82821015611d365760008481526020908190208301805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815292830182828015611d225780601f10611cf757610100808354040283529160200191611d22565b820191906000526020600020905b815481529060010190602001808311611d0557829003601f168201915b505050505081526020019060010190611c8b565b5050505094506022896040518082805190602001908083835b60208310611d6e5780518252601f199092019160209182019101611d4f565b518151600019602094850361010090810a820192831692199390931691909117909252949092019687526040805197889003820188208054601f6002600183161590980290950116959095049283018290048202880182019052818752929450925050830182828015611e225780601f10611df757610100808354040283529160200191611e22565b820191906000526020600020905b815481529060010190602001808311611e0557829003601f168201915b50505050509350845160001415611e4f578360206040519081016040528060008152509096509650612046565b611e598589614fb2565b9250600090505b825181101561203f576001835103811415611f4457818382815181101515611e8457fe5b906020019060200201516040516020018083805190602001908083835b60208310611ec05780518252601f199092019160209182019101611ea1565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310611f085780518252601f199092019160209182019101611ee9565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150612037565b818382815181101515611f5357fe5b906020019060200201516040516020018083805190602001908083835b60208310611f8f5780518252601f199092019160209182019101611f70565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310611fd75780518252601f199092019160209182019101611fb8565b6001836020036101000a038019825116818451168082178552505050505050905001807f2c000000000000000000000000000000000000000000000000000000000000008152506001019250505060405160208183030381529060405291505b600101611e60565b8184965096505b50505050509250929050565b50600090565b60006010546000141561206d575060016113cf565b6113cc8261334e565b60008033600160a060020a0384161461208e57600080fd5b82905080600160a060020a0316638280dd8f60006040518263ffffffff1660e060020a02815260040180828152602001915050602060405180830381600087803b1580156120db57600080fd5b505af11580156120ef573d6000803e3d6000fd5b505050506040513d602081101561210557600080fd5b5050604080517f27c1c21d0000000000000000000000000000000000000000000000000000000081529051600160a060020a038316916327c1c21d9160048083019260209291908290030181600087803b15801561216257600080fd5b505af1158015612176573d6000803e3d6000fd5b505050506040513d602081101561218c57600080fd5b5051159392505050565b33600090815260208052604081205481908190600160a060020a0316156121bc57600080fd5b600091505b6015548210156122075760158054339190849081106121dc57fe5b600091825260209091200154600160a060020a031614156121fc57612207565b6001909101906121c1565b601554821061221557600080fd5b601c54604080517f5c6dc2190000000000000000000000000000000000000000000000000000000081523360048201529051600160a060020a0390921691635c6dc219916024808201926020929091908290030181600087803b15801561227b57600080fd5b505af115801561228f573d6000803e3d6000fd5b505050506040513d60208110156122a557600080fd5b505133600090815260208080526040918290208054600160a060020a031916600160a060020a038516908117909155825190815291519293507f4575facd117046c9c28b69a3eb9c08939f2462a5a22ea6c6dcd4f79b8dd124e992918290030190a192915050565b600e54600160a060020a031681565b600a5490565b600090565b601e54604080517f40b89f06000000000000000000000000000000000000000000000000000000008152600160a060020a0384811660048301529151600093849316916340b89f0691602480830192602092919082900301818787803b15801561239057600080fd5b505af11580156123a4573d6000803e3d6000fd5b505050506040513d60208110156123ba57600080fd5b505160408051600160a060020a038316815290519192507f473c07a6d0228c4fb8fe2be3b4617c3b5fb7c0f8cd9ba4b67e8631844b9b6571919081900360200190a192915050565b600254600160a060020a03163214806124255750600254600160a060020a031633145b151561243057600080fd5b600254600160a060020a0316ff5b60165490565b601e54600160a060020a031681565b600061245d611549565b151561246857600080fd5b60006008805460018160011615610100020316600290049050111561251757600a80546001818101808455600093909352600880546124de937fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80192600261010091831615919091026000190190911604615575565b5050600954600b80546001810182556000919091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db901555b600c805461253a9160089160026000196101006001841615020190911604615575565b504260095560408051602081019182905260009081905261255d91600c916154fb565b5060035460408051600160a060020a039092168083526020830182815260088054600260001960018316156101000201909116049385018490527f482875da75e6d9f93f74a5c1a61f14cf08822057c01232f44cb92ae998e30d8e949293909291906060830190849080156126135780601f106125e857610100808354040283529160200191612613565b820191906000526020600020905b8154815290600101906020018083116125f657829003601f168201915b5050935050505060405180910390a150600190565b601680548290811061263657fe5b600091825260209182902001805460408051601f600260001961010060018716150201909416939093049283018590048502810185019091528181529350909183018282801561139b5780601f106113705761010080835404028352916020019161139b565b60158054829081106126aa57fe5b600091825260209091200154600160a060020a0316905081565b60195481565b600080601c60009054906101000a9004600160a060020a0316600160a060020a031663575185ed6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561272057600080fd5b505af1158015612734573d6000803e3d6000fd5b505050506040513d602081101561274a57600080fd5b505160408051600160a060020a038316815290519192507fa3b1fe71ae61bad8cffa485b230e24e518938f76182a30fa0d9979e7237ad159919081900360200190a18091505b5090565b600160a060020a0380821660009081526013602052604081205490918291829116156127c35760009250611ba4565b601d60009054906101000a9004600160a060020a0316600160a060020a0316637708bc416040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561281657600080fd5b505af115801561282a573d6000803e3d6000fd5b505050506040513d602081101561284057600080fd5b5051604080517ff2fde38b000000000000000000000000000000000000000000000000000000008152600160a060020a03878116600483015291519294508493509083169163f2fde38b9160248082019260009290919082900301818387803b1580156128ac57600080fd5b505af11580156128c0573d6000803e3d6000fd5b505050600160a060020a038086166000908152601360209081526040918290208054938716600160a060020a031990941684179055815192835290517f56c4bf13bebaa9f2be39ac3f2f4619a0dd1b694bb8c5f43c6b244a6dba0f0cca9350918290030190a15060019392505050565b60606113cc61293d6150b7565b836150bc565b600254600160a060020a03163214806129665750600254600160a060020a031633145b151561297157600080fd5b601c8054600160a060020a031916600160a060020a0392909216919091179055565b600c805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561139b5780601f106113705761010080835404028352916020019161139b565b601360205260009081526040902054600160a060020a031681565b600254600160a060020a0316321480612a2c5750600254600160a060020a031633145b1515612a3757600080fd5b612b6d6015805480602002602001604051908101604052809291908181526020018280548015612a9057602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311612a72575b50505050506016805480602002602001604051908101604052809291908181526020016000905b82821015612b625760008481526020908190208301805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815292830182828015612b4e5780601f10612b2357610100808354040283529160200191612b4e565b820191906000526020600020905b815481529060010190602001808311612b3157829003601f168201915b505050505081526020019060010190612ab7565b505050508484614e64565b15612b7757600080fd5b6015805460018082019092557f55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec475018054600160a060020a031916600160a060020a0385161790556016805491820180825560009190915282519091612c05917fd833147d7dc355ba459fc788f669e58cfaf9dc25ddcd0702e87d69c7b51242899091019060208501906154fb565b505060408051338152600160a060020a038416602082015281517f2bb0f9ba138ffddb5a8f974e9885b65a7814d3002654f1cf3f2d3f619a4006c4929181900390910190a15050565b6002546000906060908290600160a060020a0316321480612c795750600254600160a060020a031633145b1515612c8457600080fd5b6021856040518082805190602001908083835b60208310612cb65780518252601f199092019160209182019101612c97565b51815160209384036101000a60001901801990921691161790529201948552506040805194859003820185208054808402870184019092528186529350915060009084015b82821015612da65760008481526020908190208301805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815292830182828015612d925780601f10612d6757610100808354040283529160200191612d92565b820191906000526020600020905b815481529060010190602001808311612d7557829003601f168201915b505050505081526020019060010190612cfb565b505050509150600090505b8151811015612ee257836040518082805190602001908083835b60208310612dea5780518252601f199092019160209182019101612dcb565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912085519093508592508491508110612e2657fe5b906020019060200201516040518082805190602001908083835b60208310612e5f5780518252601f199092019160209182019101612e40565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415612eda57604080513381526001602082015281517fdf8127994c229011ce9c4764bdc0375bb71c06cf1544f034cd81a42f37233319929181900390910190a160009250612fa9565b600101612db1565b6021856040518082805190602001908083835b60208310612f145780518252601f199092019160209182019101612ef5565b51815160209384036101000a600019018019909216911617905292019485525060405193849003810190932080546001810180835560009283529185902089519295612f679550910192508801906154fb565b5050604080513381526000602082015281517fdf8127994c229011ce9c4764bdc0375bb71c06cf1544f034cd81a42f37233319929181900390910190a1600192505b505092915050565b601880548290811061263657fe5b60178054829081106126aa57fe5b600154600160a060020a03163214612fe457600080fd5b600160a060020a0381161515612ff957600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a0316321490565b601b805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561139b5780601f106113705761010080835404028352916020019161139b565b600061155432615134565b600b8054829081106130a057fe5b600091825260209091200154905081565b600a80548290811061263657fe5b600254600160a060020a03163214806130e25750600254600160a060020a031633145b15156130ed57600080fd5b601d8054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a03163214806131325750600254600160a060020a031633145b151561313d57600080fd5b601f8054600160a060020a031916600160a060020a0392909216919091179055565b60006021826040518082805190602001908083835b602083106131935780518252601f199092019160209182019101613174565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922054949350505050565b600254600160a060020a031681565b601f54600160a060020a031681565b600254600160a060020a03163214806132085750600254600160a060020a031633145b151561321357600080fd5b805161322690601b9060208401906154fb565b5050565b50600190565b61323861301b565b151561324357600080fd5b805160801161325157600080fd5b805161326490600c9060208401906154fb565b506003547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a031661329b6112f6565b60408051600160a060020a038085168252831660208201526060918101828152600c8054600260001961010060018416150201909116049383018490529260808301908490801561332d5780601f106133025761010080835404028352916020019161332d565b820191906000526020600020905b81548152906001019060200180831161331057829003601f168201915b505094505050505060405180910390a150565b600f8054829081106126aa57fe5b600080805b60105481101561339e5783600160a060020a0316600f8281548110151561337657fe5b600091825260209091200154600160a060020a0316141561339657600191505b600101613353565b5092915050565b600254600160a060020a03163214806133c85750600254600160a060020a031633145b15156133d357600080fd5b601e8054600160a060020a031916600160a060020a0392909216919091179055565b326000908152601360205260408120548190600160a060020a031615156134255761341e613087565b9050613440565b5032600090815260136020526040902054600160a060020a03165b60408051600160a060020a038316815290517f1c917c3c2698bd5b98acb9772728da62f2ce3670e4578910a6465b955f63e1579181900360200190a1919050565b600254600160a060020a03163214806134a45750600254600160a060020a031633145b15156134af57600080fd5b806022836040518082805190602001908083835b602083106134e25780518252601f1990920191602091820191016134c3565b51815160209384036101000a6000190180199092169116179052920194855250604051938490038101909320845161352395919491909101925090506154fb565b505050565b3360009081526020805260408120548190600160a060020a0316151561354d57600080fd5b503360009081526020805260408082208054600160a060020a0319811690915581517f41c0e1b50000000000000000000000000000000000000000000000000000000081529151600160a060020a039091169283926341c0e1b5926004808301939282900301818387803b1580156135c457600080fd5b505af11580156135d8573d6000803e3d6000fd5b505060408051600160a060020a038516815290517fb98695ab4c6cedb3b4dfe62479a9d39a59aa2cb38b8bd92bbb6ce5856e42bdf49350908190036020019150a15090565b6060600080602084511115156136d757505081518083015160008181526004602090815260409182902080548351601f6002610100600185161502600019019093169290920491820184900484028101840190945280845293949390918301828280156136cb5780601f106136a0576101008083540402835291602001916136cb565b820191906000526020600020905b8154815290600101906020018083116136ae57829003601f168201915b50505050509250611ba4565b6005846040518082805190602001908083835b602083106137095780518252601f1990920191602091820191016136ea565b518151600019602094850361010090810a820192831692199390931691909117909252949092019687526040805197889003820188208054601f60026001831615909802909501169590950492830182900482028801820190528187529294509250508301828280156137bd5780601f10613792576101008083540402835291602001916137bd565b820191906000526020600020905b8154815290600101906020018083116137a057829003601f168201915b505050505092505050919050565b600354600160a060020a031681565b600254600090600160a060020a03163214806138005750600254600160a060020a031633145b151561380b57600080fd5b5060005b6015548110156132265781600160a060020a031660158281548110151561383257fe5b600091825260209091200154600160a060020a0316141561389e5761385a81601560166152de565b60408051338152600160a060020a038416602082015281517f41ec5b9efdbf61871df6a18b687e04bea93d5793af5f8c8b4626e155b23dc19d929181900390910190a15b60010161380f565b600080601c60009054906101000a9004600160a060020a0316600160a060020a031663b8cfaf056040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156138fc57600080fd5b505af1158015613910573d6000803e3d6000fd5b505050506040513d602081101561392657600080fd5b505160408051600160a060020a038316815290519192507f9e69777f30c55126be256664fa7beff4b796ac32ebceab94df5071b0148017f8919081900360200190a1919050565b601f54604080517fbf4e088f000000000000000000000000000000000000000000000000000000008152600160a060020a038581166004830152848116602483015291516000938493169163bf4e088f91604480830192602092919082900301818787803b1580156139de57600080fd5b505af11580156139f2573d6000803e3d6000fd5b505050506040513d6020811015613a0857600080fd5b505160408051600160a060020a038316815290519192507fa0633ea0b3cb5796607e5f551ae79c7eeee0dc7ee0c3ff8996506261651368ce919081900360200190a19392505050565b600254600160a060020a0316331480613a6d5750613a6d611549565b1515613a7857600080fd5b60408051602080825260088054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b6593909291829182019084908015613b175780601f10613aec57610100808354040283529160200191613b17565b820191906000526020600020905b815481529060010190602001808311613afa57829003601f168201915b50509250505060405180910390a1565b601c54600160a060020a031681565b601d54600160a060020a031681565b60105481565b6040805132815290516000917f53ce35a7383a3ea3f695bdf0f87d7e5485ba816b382673e849bfdd24e7f5e3ca919081900360200190a190565b600254600160a060020a0316321480613ba85750600254600160a060020a031633145b1515613bb357600080fd5b600e8054600160a060020a031916600160a060020a0392909216919091179055565b60006060613be283612930565b90506021816040518082805190602001908083835b60208310613c165780518252601f199092019160209182019101613bf7565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092205495945050505050565b6002546000908190600160a060020a0316321480613c735750600254600160a060020a031633145b1515613c7e57600080fd5b5060009050805b601754811015613e805782600160a060020a0316601782815481101515613ca857fe5b600091825260209091200154600160a060020a03161415613e78576015601782815481101515613cd457fe5b6000918252602080832090910154835460018101855593835291209091018054600160a060020a031916600160a060020a03909216919091179055601880546016919083908110613d2157fe5b60009182526020808320845460018181018088559686529290942092018054613d659493909301929091600261010091831615919091026000190190911604615575565b50507fd644c8164f225d3b7fdbcc404f279bb1e823ef0d93f88dd4b24e85d0e7bc6a54601782815481101515613d9757fe5b60009182526020909120015460188054600160a060020a039092169184908110613dbd57fe5b600091825260209182902060408051600160a060020a0386168152938401818152919092018054600260001961010060018416150201909116049284018390529291606083019084908015613e535780601f10613e2857610100808354040283529160200191613e53565b820191906000526020600020905b815481529060010190602001808311613e3657829003601f168201915b5050935050505060405180910390a1613e6f81601760186152de565b60019150613e80565b600101613c85565b81151561352357600080fd5b6008805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561139b5780601f106113705761010080835404028352916020019161139b565b600080600080600080613ef861301b565b1515613f0357600080fd5b866040516020018082805190602001908083835b60208310613f365780518252601f199092019160209182019101613f17565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310613f995780518252601f199092019160209182019101613f7a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209450600860405160200180828054600181600116156101000203166002900480156140285780601f10614006576101008083540402835291820191614028565b820191906000526020600020905b815481529060010190602001808311614014575b50509150506040516020818303038152906040526040518082805190602001908083835b6020831061406b5780518252601f19909201916020918201910161404c565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912096505050508484141561418c576040805160208101918290526000908190526140bf916008916154fb565b506000600981905560035460408051600160a060020a03909216808352908201839052606060208084018281528c51928501929092528b517f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f519593948d9493909290916080840191860190808383885b8381101561414757818101518382015260200161412f565b50505050905090810190601f1680156141745780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160009550614485565b6000199250600091505b600a548210156143a257600a8054839081106141ae57fe5b9060005260206000200160405160200180828054600181600116156101000203166002900480156142165780601f106141f4576101008083540402835291820191614216565b820191906000526020600020905b815481529060010190602001808311614202575b50509150506040516020818303038152906040526040518082805190602001908083835b602083106142595780518252601f19909201916020918201910161423a565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912093505050508481141561439757600a80548390811061429d57fe5b9060005260206000200160006142b391906155ea565b600b8054839081106142c157fe5b6000918252602082200155600a5460001901821461436757600a805460001981019081106142eb57fe5b90600052602060002001600a8381548110151561430457fe5b90600052602060002001908054600181600116156101000203166002900461432d929190615575565b50600b8054600019810190811061434057fe5b9060005260206000200154600b8381548110151561435a57fe5b6000918252602090912001555b600a80549061437a906000198301615631565b50600b80549061438e906000198301615655565b508192506143a2565b600190910190614196565b6000198314156143b157600080fd5b7f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f51600360009054906101000a9004600160a060020a031688856040518084600160a060020a0316600160a060020a0316815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561444557818101518382015260200161442d565b50505050905090810190601f1680156144725780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a18295505b5050505050919050565b6002546000908190600160a060020a03163214806144b75750600254600160a060020a031633145b15156144c257600080fd5b83516020106144fb575050815180830151600081815260046020908152604090912084519293926144f5928601906154fb565b50614571565b826005856040518082805190602001908083835b6020831061452e5780518252601f19909201916020918201910161450f565b51815160209384036101000a6000190180199092169116179052920194855250604051938490038101909320845161456f95919491909101925090506154fb565b505b50505050565b60025460009081908190600160a060020a031633148061459f5750600061459d33613bd5565b115b15156145aa57600080fd5b88518a51146145b857600080fd5b87518951146145c657600080fd5b86518851146145d457600080fd5b85518751146145e257600080fd5b84518651146145f057600080fd5b83518551146145fe57600080fd5b600092505b895183101561477157868381518110151561461a57fe5b90602001906020020151915081600160a060020a031663508ad278338c8681518110151561464457fe5b906020019060200201518c8781518110151561465c57fe5b906020019060200201518c8881518110151561467457fe5b906020019060200201518b8981518110151561468c57fe5b906020019060200201518b8a8151811015156146a457fe5b906020019060200201518b8b8151811015156146bc57fe5b60209081029091018101516040805160e060020a63ffffffff8c16028152600160a060020a03998a16600482015260ff90981660248901526044880196909652606487019490945291909516608485015260a484019490945260c48301525160e480830193928290030181600087803b15801561473857600080fd5b505af115801561474c573d6000803e3d6000fd5b505050506040513d602081101561476257600080fd5b50519050600190920191614603565b50505050505050505050565b6040516000907fed78a9defa7412748c9513ba9cf680f57703a46dd7e0fb0b1e94063423c73e88908290a150600190565b600254600160a060020a03163214806147d15750600254600160a060020a031633145b15156147dc57600080fd5b600160a060020a03811615156147f157600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b60185490565b6020805260009081526040902054600160a060020a031681565b60025460009081908190600160a060020a031632148061485d5750600254600160a060020a031633145b151561486857600080fd5b50506010546000190160005b601054811015611b9f5783600160a060020a0316600f8281548110151561489757fe5b600091825260209091200154600160a060020a031614156149ce57600f8054829081106148c057fe5b60009182526020909120018054600160a060020a031916905580821461496557600f8054839081106148ee57fe5b600091825260209091200154600f8054600160a060020a03909216918390811061491457fe5b60009182526020909120018054600160a060020a031916600160a060020a0392909216919091179055600f80548390811061494b57fe5b60009182526020909120018054600160a060020a03191690555b6010829055600160a060020a0384166000818152601160209081526040918290208054600160a060020a0319169055815192835290517fd41375b9d347dfe722f90a780731abd23b7855f9cf14ea7063c4cab5f9ae58e29281900390910190a160019250611ba4565b600101614874565b6002546000906060908290600160a060020a0316321480614a015750600254600160a060020a031633145b1515614a0c57600080fd5b6021856040518082805190602001908083835b60208310614a3e5780518252601f199092019160209182019101614a1f565b51815160209384036101000a60001901801990921691161790529201948552506040805194859003820185208054808402870184019092528186529350915060009084015b82821015614b2e5760008481526020908190208301805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815292830182828015614b1a5780601f10614aef57610100808354040283529160200191614b1a565b820191906000526020600020905b815481529060010190602001808311614afd57829003601f168201915b505050505081526020019060010190614a83565b505050509150600090505b8151811015614e1e57836040518082805190602001908083835b60208310614b725780518252601f199092019160209182019101614b53565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912085519093508592508491508110614bae57fe5b906020019060200201516040518082805190602001908083835b60208310614be75780518252601f199092019160209182019101614bc8565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415614e16578151600019018114614cd257815182906000198101908110614c3c57fe5b906020019060200201516021866040518082805190602001908083835b60208310614c785780518252601f199092019160209182019101614c59565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922080549092508491508110614cb357fe5b906000526020600020019080519060200190614cd09291906154fb565b505b6021856040518082805190602001908083835b60208310614d045780518252601f199092019160209182019101614ce5565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206001835103815481101515614d4857fe5b906000526020600020016000614d5e91906155ea565b60016021866040518082805190602001908083835b60208310614d925780518252601f199092019160209182019101614d73565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922080549390930392614dd19250905082615679565b50604080513381526000602082015281517f5f463eb53cddf646852b82c0d9bdb1d1ec215c3802b780e8b7beea8b6e99f94c929181900390910190a160019250612fa9565b600101614b39565b604080513381526001602082015281517f5f463eb53cddf646852b82c0d9bdb1d1ec215c3802b780e8b7beea8b6e99f94c929181900390910190a1506000949350505050565b60008084518651141515614e7757600080fd5b5060005b8551811015614fa457826040518082805190602001908083835b60208310614eb45780518252601f199092019160209182019101614e95565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912088519093508892508491508110614ef057fe5b906020019060200201516040518082805190602001908083835b60208310614f295780518252601f199092019160209182019101614f0a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161480614f8e575083600160a060020a03168682815181101515614f7957fe5b90602001906020020151600160a060020a0316145b15614f9c5760019150614fa9565b600101614e7b565b600091505b50949350505050565b6060600080825b8551821015614ffa57614fe38683815181101515614fd357fe5b9060200190602002015186615434565b15614fef576001909201915b600190910190614fb9565b8260405190808252806020026020018201604052801561502e57816020015b60608152602001906001900390816150195790505b509050821515615040578093506150ae565b60009250600091505b85518210156150aa576150638683815181101515614fd357fe5b1561509f57858281518110151561507657fe5b90602001906020020151818481518110151561508e57fe5b602090810290910101526001909201915b600190910190615049565b8093505b50505092915050565b600b90565b604080517f6d616b654944537472696e6728696e742c6164647265737329000000000000008152905190819003601901812080825260e060020a8402600483018190526008830184905260609260ff90848160288160008681f180151561512257600080fd5b50606081016040529695505050505050565b600160a060020a03808216600090815260136020526040812054909182918291161561515f57600080fd5b601d60009054906101000a9004600160a060020a0316600160a060020a0316637708bc416040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156151b257600080fd5b505af11580156151c6573d6000803e3d6000fd5b505050506040513d60208110156151dc57600080fd5b50519150600160a060020a038416321461526e5750604080517ff2fde38b000000000000000000000000000000000000000000000000000000008152600160a060020a0385811660048301529151839283169163f2fde38b91602480830192600092919082900301818387803b15801561525557600080fd5b505af1158015615269573d6000803e3d6000fd5b505050505b60408051600160a060020a038416815290517f56c4bf13bebaa9f2be39ac3f2f4619a0dd1b694bb8c5f43c6b244a6dba0f0cca9181900360200190a150600160a060020a0392831660009081526013602052604090208054600160a060020a031916938216939093179092555090565b8154831080156152ee5750805483105b15156152f957600080fd5b81546000190183146153c05780548190600019810190811061531757fe5b90600052602060002001818481548110151561532f57fe5b906000526020600020019080546001816001161561010002031660029004615358929190615575565b5081548290600019810190811061536b57fe5b6000918252602090912001548254600160a060020a039091169083908590811061539157fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055505b8054819060001981019081106153d257fe5b9060005260206000200160006153e891906155ea565b80546153f8826000198301615679565b5081548290600019810190811061540b57fe5b60009182526020909120018054600160a060020a03191690558154614571836000198301615655565b600080600083519150845182111561544b57845191505b5060005b818110156154f057838181518110151561546557fe5b90602001015160f860020a900460f860020a027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191685828151811015156154a857fe5b60209101015160f860020a90819004027fff0000000000000000000000000000000000000000000000000000000000000016146154e85760009250612fa9565b60010161544f565b506001949350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061553c57805160ff1916838001178555615569565b82800160010185558215615569579182015b8281111561556957825182559160200191906001019061554e565b5061279092915061569d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106155ae5780548555615569565b8280016001018555821561556957600052602060002091601f016020900482015b828111156155695782548255916001019190600101906155cf565b50805460018160011615610100020316600290046000825580601f10615610575061562e565b601f01602090049060005260206000209081019061562e919061569d565b50565b815481835581811115613523576000838152602090206135239181019083016156b7565b8154818355818111156135235760008381526020902061352391810190830161569d565b815481835581811115613523576000838152602090206135239181019083016156da565b61130391905b8082111561279057600081556001016156a3565b61130391905b808211156127905760006156d182826155ea565b506001016156bd565b61130391905b808211156127905760006156f482826155ea565b506001016156e05600a165627a7a723058200004d1710c8d45b789929b4b28abd834bfa6acb76b386e525df7b8109f9f598c0029"
};
module.exports = contract;