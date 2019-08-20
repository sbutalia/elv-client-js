"use strict";

var topics = {
  "0x23dcae6acc296731e3679d01e7cd963988e5a372850a0a1db2b9b01539e19ff4": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "principal",
        "type": "address"
      }, {
        "indexed": false,
        "name": "entity",
        "type": "address"
      }, {
        "indexed": false,
        "name": "aggregate",
        "type": "uint8"
      }],
      "name": "RightsChanged",
      "type": "event"
    }],
    "contract": "BaseAccessWallet"
  },
  "0xa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b260": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "label",
        "type": "string"
      }, {
        "indexed": false,
        "name": "index",
        "type": "uint256"
      }, {
        "indexed": false,
        "name": "a",
        "type": "address"
      }],
      "name": "dbgAddress",
      "type": "event"
    }],
    "contract": "BaseAccessWallet"
  },
  "0xed78a9defa7412748c9513ba9cf680f57703a46dd7e0fb0b1e94063423c73e88": {
    "abi": [{
      "anonymous": false,
      "inputs": [],
      "name": "AccessRequest",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0x1f6808146a51d157d9343b08ee6fce3b39b0e5b419f4c8524a56512acf5ba2b5": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "maxCreditPerAd",
        "type": "uint256"
      }],
      "name": "MaxCreditPerAd",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0xecfcc1bcfb602db0a89a128bad350799ac7741ae87395080e8da39da6f100fcb": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "bitcode",
        "type": "address"
      }],
      "name": "BitcodeAddress",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0xb92a8e382f572ae6133fc542b538c526abdb10f38288b27314dbe5f88e8289c9": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "msg",
        "type": "string"
      }, {
        "indexed": false,
        "name": "flag",
        "type": "bool"
      }],
      "name": "dbgBool",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0x6ff7fb64b6de68edefccdbd8bcbc45f7693866bfe7cf42112e795b744a36a979": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "msg",
        "type": "string"
      }, {
        "indexed": false,
        "name": "addr",
        "type": "address"
      }],
      "name": "dbgAddress",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0xfdd59060f425ba73a285897b1a70f2e10b4306ab319f982c2cca84f2624b31a3": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "msg",
        "type": "string"
      }, {
        "indexed": false,
        "name": "num",
        "type": "uint256"
      }],
      "name": "dbgUint256",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0xa6d42b96edd4a573a32700876f80ba069a9ae914e8eafadde0105d4f88655b65": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "msg",
        "type": "string"
      }, {
        "indexed": false,
        "name": "num",
        "type": "uint8"
      }],
      "name": "dbgUint8",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0xaece22630686dbd55b6abda418f40cdac4e6a852a84d7dd1b92dc7c116a30e52": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "msg",
        "type": "string"
      }, {
        "indexed": false,
        "name": "b",
        "type": "bytes32"
      }],
      "name": "dbgByte32",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0xf32c87b0fe4dc0f05e659e69aefad874adfa8d887470813f002140900047e744": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "msg",
        "type": "string"
      }, {
        "indexed": false,
        "name": "b",
        "type": "bytes"
      }],
      "name": "dbgBytes",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0xcf34ef537ac33ee1ac626ca1587a0a7e8e51561e5514f8cb36afa1c5102b3bab": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "label",
        "type": "string"
      }],
      "name": "Log",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0x4c34c2f9a78632f29fa59aaed5514cb742fd9fbcfd7ccc2c03c85f2bbc621c47": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "label",
        "type": "string"
      }, {
        "indexed": false,
        "name": "b",
        "type": "bool"
      }],
      "name": "LogBool",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0x62ddffe5b5108385f7a590f100e1ee414ad9551a31f089e64e82998440785e1e": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "label",
        "type": "string"
      }, {
        "indexed": false,
        "name": "a",
        "type": "address"
      }],
      "name": "LogAddress",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0x31c369d7029afba34b21369bcf9a6ac132fb2621c34558b914859b768d05232d": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "label",
        "type": "string"
      }, {
        "indexed": false,
        "name": "u",
        "type": "uint256"
      }],
      "name": "LogUint256",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0x3d9b341774178bb033613e3a7a1cadb2244b3bcbb1372905d2ba24dca38aeb22": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "label",
        "type": "string"
      }, {
        "indexed": false,
        "name": "u",
        "type": "int256"
      }],
      "name": "LogInt256",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0x02d93529bba9d141e5e06733c52c7e6fbcb1149586adb5c24064b522ab26f1d7": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "label",
        "type": "string"
      }, {
        "indexed": false,
        "name": "b",
        "type": "bytes32"
      }],
      "name": "LogBytes32",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0x6a0f12fe24f7c34df8acc096f076bac6e3f1ff225f4fccc7b0f389657bde895a": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "label",
        "type": "string"
      }, {
        "indexed": false,
        "name": "payee",
        "type": "address"
      }, {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }],
      "name": "LogPayment",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0x9df71221e13c480b974b5d5bd7591b30b7ea3bfff8a56dfa7fde810a14c1c39b": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "result",
        "type": "uint256"
      }],
      "name": "RunCreate",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0x6d0dbfc3805aef247651b04b50fc717599f7e0b66c6b022ae1544406f7bf8f86": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "result",
        "type": "uint256"
      }],
      "name": "RunKill",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0xb6c1c013bb5004fe8e943c6890e300ccedf9bd73dcd4eb291b31b9f96874feff": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "proposedStatusCode",
        "type": "int256"
      }, {
        "indexed": false,
        "name": "returnStatusCode",
        "type": "int256"
      }],
      "name": "RunStatusChange",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0xffadad18ab3777a19f664019a6261b011ab9405749e01a45950d44fb9360b385": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "level",
        "type": "uint8"
      }, {
        "indexed": false,
        "name": "calculateAccessCharge",
        "type": "int256"
      }],
      "name": "RunAccessCharge",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0x3e68dc35f88d76818f276322c37f5021ee00e232fe0d27a93c02801aec4d9c58": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "requestID",
        "type": "uint256"
      }, {
        "indexed": false,
        "name": "result",
        "type": "uint256"
      }],
      "name": "RunAccess",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0xbf0f2215c45c5ee802d4c20bdfc915308c4459b0f6a78f23ad350e6408bf2891": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "requestID",
        "type": "uint256"
      }, {
        "indexed": false,
        "name": "result",
        "type": "uint256"
      }],
      "name": "RunFinalize",
      "type": "event"
    }],
    "contract": "AdmgrAdvertisement"
  },
  "0xb251eb052afc73ffd02ffe85ad79990a8b3fed60d76dbc2fa2fdd7123dffd914": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "candidate",
        "type": "address"
      }],
      "name": "MemberAdded",
      "type": "event"
    }],
    "contract": "BaseAccessControlGroup"
  },
  "0x93bcaab179551bde429187645251f8e1fb8ac85801fcb1cf91eb2c9043d61117": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "candidate",
        "type": "address"
      }],
      "name": "ManagerAccessGranted",
      "type": "event"
    }],
    "contract": "BaseAccessControlGroup"
  },
  "0x745cd29407db644ed93e3ceb61cbcab96d1dfb496989ac5d5bf514fc5a9fab9c": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "candidate",
        "type": "address"
      }],
      "name": "MemberRevoked",
      "type": "event"
    }],
    "contract": "BaseAccessControlGroup"
  },
  "0x2d6aa1a9629d125e23a0cf692cda7cd6795dff1652eedd4673b38ec31e387b95": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "candidate",
        "type": "address"
      }],
      "name": "ManagerAccessRevoked",
      "type": "event"
    }],
    "contract": "BaseAccessControlGroup"
  },
  "0x23de2adc3e22f171f66b3e5a333e17feb9dc30ba9570933bd259cb6c13ef7ab7": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "operationCode",
        "type": "uint256"
      }, {
        "indexed": false,
        "name": "candidate",
        "type": "address"
      }],
      "name": "UnauthorizedOperation",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0xb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa75": {
    "abi": [{
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
    }],
    "contract": "BaseLibrary"
  },
  "0x403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b65": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "objectHash",
        "type": "string"
      }],
      "name": "UpdateRequest",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0x482875da75e6d9f93f74a5c1a61f14cf08822057c01232f44cb92ae998e30d8e": {
    "abi": [{
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
    }],
    "contract": "BaseLibrary"
  },
  "0x238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f51": {
    "abi": [{
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
    }],
    "contract": "BaseLibrary"
  },
  "0x583d8312ef7016406c7ea8ba9796b9e55ac1fdc22455754cbc93869509faefad": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "guarantor",
        "type": "address"
      }, {
        "indexed": false,
        "name": "code",
        "type": "int256"
      }],
      "name": "ExecStatus",
      "type": "event"
    }],
    "contract": "BaseAccessWallet"
  },
  "0x280016f7418306a55542432120fd1a239ef9fcc1a92694d8d44ca76be0249ea7": {
    "abi": [{
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
    }],
    "contract": "BaseLibrary"
  },
  "0xd41375b9d347dfe722f90a780731abd23b7855f9cf14ea7063c4cab5f9ae58e2": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "contentType",
        "type": "address"
      }],
      "name": "ContentTypeRemoved",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0xc3decc188980e855666b70498ca85e8fa284d97d30483d828fa126f7303d7d19": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "containingLibrary",
        "type": "address"
      }],
      "name": "ContentObjectCreate",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0x4f692e87baf302f7281e83eec109053efc2ca8e7bddfc6ce88c579cd9767f71f": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "contentType",
        "type": "address"
      }, {
        "indexed": false,
        "name": "contentContractAddress",
        "type": "address"
      }],
      "name": "SetContentType",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0x50f423e39e8beb25bb2da38a63e3d33b5368f261522813712756733eaf569a06": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "requestID",
        "type": "uint256"
      }, {
        "indexed": false,
        "name": "level",
        "type": "uint8"
      }, {
        "indexed": false,
        "name": "contentHash",
        "type": "string"
      }, {
        "indexed": false,
        "name": "pkeRequestor",
        "type": "string"
      }, {
        "indexed": false,
        "name": "pkeAFGH",
        "type": "string"
      }],
      "name": "AccessRequest",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0xad58d18ea7292f887da6f15bb4f0badddaa33d169713d09cf49710acc7c3a5b9": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "requestID",
        "type": "uint256"
      }, {
        "indexed": false,
        "name": "label",
        "type": "string"
      }, {
        "indexed": false,
        "name": "payee",
        "type": "address"
      }, {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }],
      "name": "LogPayment",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0x475e9d68ca61f129cebee5af694af00ed0e3b3b0d4b74071fbb81d0e2b912718": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "requestID",
        "type": "uint256"
      }, {
        "indexed": false,
        "name": "access_granted",
        "type": "bool"
      }, {
        "indexed": false,
        "name": "reKey",
        "type": "string"
      }, {
        "indexed": false,
        "name": "encryptedAESKey",
        "type": "string"
      }],
      "name": "AccessGrant",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0x515e0a48b385fce2a8e4d9f169a97c4f6ea669a752358f5e6ab37cc3c2e84c38": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "customValue",
        "type": "bytes32"
      }],
      "name": "AccessRequestValue",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0xb6e3239e521a6c66920ae634f8e921a37e6991d520ac44d52f8516397f41b684": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "stakeholder",
        "type": "address"
      }],
      "name": "AccessRequestStakeholder",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0x2c49ac638ee7bf3341004c40512c79847bb7fb8f17fb53151ff576a35630ac06": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "requestID",
        "type": "uint256"
      }, {
        "indexed": false,
        "name": "scorePct",
        "type": "uint256"
      }, {
        "indexed": false,
        "name": "customContractResult",
        "type": "bool"
      }],
      "name": "AccessComplete",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0xa6f2e38f0cfebf27212317fced3ac40bc62e00bd33f38d69603710740c69acb7": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "contentContractAddress",
        "type": "address"
      }],
      "name": "SetContentContract",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0x4114f8ef80b6de2161db580cbefa14e1892d15d3ebe2062c9914e4a5773114a3": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "accessCharge",
        "type": "uint256"
      }],
      "name": "SetAccessCharge",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0xa58326ee5bb617cb8b4f0d0f5f557c469d2d05d7a738f777037deda9c724b370": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "level",
        "type": "uint8"
      }, {
        "indexed": false,
        "name": "accessCharge",
        "type": "uint256"
      }],
      "name": "GetAccessCharge",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0x03eb8b54a949acec2cd08fdb6d6bd4647a1f2c907d75d6900648effa92eb147f": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "accessCharge",
        "type": "uint256"
      }, {
        "indexed": false,
        "name": "amountProvided",
        "type": "uint256"
      }],
      "name": "InsufficientFunds",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0xda4f34b30fa0ba8a73fedb922f4d28e2a10a5d68e53cf8e942abce3ac09158a2": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "statusCode",
        "type": "int256"
      }],
      "name": "SetStatusCode",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0xad9c5eacc073b2e1767affc883e050347e1dd379c9799cb5ac0a17bde80f5cf4": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "requestStatus",
        "type": "bool"
      }, {
        "indexed": false,
        "name": "statusCode",
        "type": "int256"
      }, {
        "indexed": false,
        "name": "objectHash",
        "type": "string"
      }],
      "name": "Publish",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0x12b04791b5caab768e2757268992f0c62801e3921d9e310c893f0d5f9caa5f71": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "custom_contract",
        "type": "address"
      }],
      "name": "InvokeCustomPreHook",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0x8c693e8b27db7caf9b9637b66dcc11444760023a4d53e95407a3acef1b249f50": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "custom_contract",
        "type": "address"
      }, {
        "indexed": false,
        "name": "result",
        "type": "uint256"
      }],
      "name": "ReturnCustomHook",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0x97d9c9779ed3ed8b9a6edfe16d17b1fdec843245747a19abfb621806e37d4a89": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "custom_contract",
        "type": "address"
      }],
      "name": "InvokeCustomPostHook",
      "type": "event"
    }],
    "contract": "BaseContent"
  },
  "0x9e69777f30c55126be256664fa7beff4b796ac32ebceab94df5071b0148017f8": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "contentTypeAddress",
        "type": "address"
      }],
      "name": "CreateContentType",
      "type": "event"
    }],
    "contract": "BaseContentSpace"
  },
  "0x473c07a6d0228c4fb8fe2be3b4617c3b5fb7c0f8cd9ba4b67e8631844b9b6571": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "libraryAddress",
        "type": "address"
      }],
      "name": "CreateLibrary",
      "type": "event"
    }],
    "contract": "BaseContentSpace"
  },
  "0xa3b1fe71ae61bad8cffa485b230e24e518938f76182a30fa0d9979e7237ad159": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "groupAddress",
        "type": "address"
      }],
      "name": "CreateGroup",
      "type": "event"
    }],
    "contract": "BaseContentSpace"
  },
  "0xa0633ea0b3cb5796607e5f551ae79c7eeee0dc7ee0c3ff8996506261651368ce": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "contentAddress",
        "type": "address"
      }],
      "name": "CreateContent",
      "type": "event"
    }],
    "contract": "BaseContentSpace"
  },
  "0x56c4bf13bebaa9f2be39ac3f2f4619a0dd1b694bb8c5f43c6b244a6dba0f0cca": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "wallet",
        "type": "address"
      }],
      "name": "CreateAccessWallet",
      "type": "event"
    }],
    "contract": "BaseContentSpace"
  },
  "0x53ce35a7383a3ea3f695bdf0f87d7e5485ba816b382673e849bfdd24e7f5e3ca": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "accountAddress",
        "type": "address"
      }],
      "name": "EngageAccountLibrary",
      "type": "event"
    }],
    "contract": "BaseContentSpace"
  },
  "0x1c893ef9379093af30f458b9e74d2aba13c499660b68dec5e29af7b199c188b9": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "factory",
        "type": "address"
      }],
      "name": "SetFactory",
      "type": "event"
    }],
    "contract": "BaseContentSpace"
  },
  "0x4575facd117046c9c28b69a3eb9c08939f2462a5a22ea6c6dcd4f79b8dd124e9": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "nodeObjAddr",
        "type": "address"
      }],
      "name": "RegisterNode",
      "type": "event"
    }],
    "contract": "BaseContentSpace"
  },
  "0xb98695ab4c6cedb3b4dfe62479a9d39a59aa2cb38b8bd92bbb6ce5856e42bdf4": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "nodeObjAddr",
        "type": "address"
      }],
      "name": "UnregisterNode",
      "type": "event"
    }],
    "contract": "BaseContentSpace"
  },
  "0xdf8127994c229011ce9c4764bdc0375bb71c06cf1544f034cd81a42f37233319": {
    "abi": [{
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
    }],
    "contract": "BaseContentSpace"
  },
  "0x5f463eb53cddf646852b82c0d9bdb1d1ec215c3802b780e8b7beea8b6e99f94c": {
    "abi": [{
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
    }],
    "contract": "BaseContentSpace"
  },
  "0x599bb380c80b69455450a615c515544b8da3b09f2efa116a5f0567682203cf54": {
    "abi": [{
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
    }],
    "contract": "BaseContentSpace"
  },
  "0x1c917c3c2698bd5b98acb9772728da62f2ce3670e4578910a6465b955f63e157": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "walletAddress",
        "type": "address"
      }],
      "name": "GetAccessWallet",
      "type": "event"
    }],
    "contract": "BaseContentSpace"
  },
  "0xae5645569f32b946f7a747113c64094a29a6b84c5ddf55816ef4381ce8a3a46d": {
    "abi": [{
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
    }],
    "contract": "BaseContentSpace"
  },
  "0xd644c8164f225d3b7fdbcc404f279bb1e823ef0d93f88dd4b24e85d0e7bc6a54": {
    "abi": [{
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
    }],
    "contract": "BaseContentSpace"
  },
  "0x2bb0f9ba138ffddb5a8f974e9885b65a7814d3002654f1cf3f2d3f619a4006c4": {
    "abi": [{
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
    }],
    "contract": "BaseContentSpace"
  },
  "0x41ec5b9efdbf61871df6a18b687e04bea93d5793af5f8c8b4626e155b23dc19d": {
    "abi": [{
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
    }],
    "contract": "BaseContentSpace"
  },
  "0xadc3945407fc9e1f5763b74624698197e96e741e6e7c683373498712ba3eb878": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "contentAddress",
        "type": "address"
      }, {
        "indexed": false,
        "name": "content_type",
        "type": "address"
      }, {
        "indexed": false,
        "name": "spaceAddress",
        "type": "address"
      }],
      "name": "ContentObjectCreated",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0x36500cee87b0da1746889a3483dccb525acfc40b8c0f2218e164c6cdf1482a3e": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "contentAddress",
        "type": "address"
      }, {
        "indexed": false,
        "name": "spaceAddress",
        "type": "address"
      }],
      "name": "ContentObjectDeleted",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0x218673669018c25b89bfbf1b58d0075e37c8847ef16e707b92355b7833e97d61": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "group",
        "type": "address"
      }],
      "name": "ContributorGroupAdded",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0xbbd97daa1862eb12f77ed128a557406737cee07b131b1e2d7140dff2005e197c": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "group",
        "type": "address"
      }],
      "name": "ContributorGroupRemoved",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0x1b88a571cc8ac2e87512f05648e79d184f5cc0cbb2889bc487c41f8b9a3202eb": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "group",
        "type": "address"
      }],
      "name": "ReviewerGroupAdded",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0xdf9d78c5635b72b709c85300a786eb7238acbe5bffe01c60c16464e45c6eb6eb": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "group",
        "type": "address"
      }],
      "name": "ReviewerGroupRemoved",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0x3a94857e4393737f73edb175a7d0c195c7f635d9ae995e12740616ec55c9d411": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "group",
        "type": "address"
      }],
      "name": "AccessorGroupAdded",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0xc5224c4118417a068eeac7d714e6d8af6f99ec3fb611bc965185460b0e38f081": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "group",
        "type": "address"
      }],
      "name": "AccessorGroupRemoved",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0x0588a34cf0de4e025d359c89ca4bacbcbf175440909952d91c814412d9da996a": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "contentAddress",
        "type": "address"
      }, {
        "indexed": false,
        "name": "submitter",
        "type": "address"
      }],
      "name": "ApproveContentRequest",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0x70234ce475fee4ab40e5e55cf533f67f12b47ef4c860e62dd7affa84ead4b442": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "contentAddress",
        "type": "address"
      }, {
        "indexed": false,
        "name": "approved",
        "type": "bool"
      }, {
        "indexed": false,
        "name": "note",
        "type": "string"
      }],
      "name": "ApproveContent",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0x74538e2fbd034afddf32b42c5939d211ce86c7683f9768f1a4969746f81f8608": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "addressKms",
        "type": "address"
      }],
      "name": "UpdateKmsAddress",
      "type": "event"
    }],
    "contract": "BaseLibrary"
  },
  "0x66887b54b3a468d1f49f169043427354bba12c2a112aea5390bb426a96bf916c": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "numtokens",
        "type": "uint256"
      }, {
        "indexed": false,
        "name": "pay_to",
        "type": "string"
      }, {
        "indexed": false,
        "name": "nonce",
        "type": "string"
      }],
      "name": "RedeemTokenRequest",
      "type": "event"
    }],
    "contract": "PaymentService"
  },
  "0x34a9ae2cb75f5f06f7599e9cc92cb12c6a2f63af676d375bdc639acae37db5e0": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "currency",
        "type": "string"
      }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }, {
        "indexed": false,
        "name": "payment_proof",
        "type": "string"
      }, {
        "indexed": false,
        "name": "nonce",
        "type": "string"
      }],
      "name": "RedeemTokenExecuted",
      "type": "event"
    }],
    "contract": "PaymentService"
  },
  "0x5847a2cfd3bf297a9d3a67cfa50403274ce0289f9dac832c5cb7490a7972977a": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "currency",
        "type": "string"
      }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }],
      "name": "SetTokenValue",
      "type": "event"
    }],
    "contract": "PaymentService"
  },
  "0xfad6c097c568a4bcebf08faf3b35206ff6b371b1f71c78ea7a483d026e4ac5c4": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "tokenCreditPerAd",
        "type": "uint256"
      }],
      "name": "TokenCreditPerAd",
      "type": "event"
    }],
    "contract": "SampleContentAdvertising"
  },
  "0x21a238faf9b1599dfd0896a25399dae15f4b9876675a2987f55a6460b8a79fc4": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "message",
        "type": "string"
      }, {
        "indexed": false,
        "name": "stakeHolder0",
        "type": "address"
      }],
      "name": "HelloWorldEvent",
      "type": "event"
    }],
    "contract": "SampleContentHelloWorld"
  },
  "0x6fad978e8a2a7d154cdbeac8b127068f0cb03d8f2d585fe8087161308cc3dd1d": {
    "abi": [{
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "name": "payee",
        "type": "address"
      }, {
        "indexed": false,
        "name": "content",
        "type": "address"
      }, {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }],
      "name": "PayCredit",
      "type": "event"
    }],
    "contract": "SampleContentLicensing"
  }
};
module.exports = topics;