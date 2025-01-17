"use strict";

var contract = {
  "abi": [{
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
    "inputs": [{
      "name": "request_data_ID",
      "type": "bytes32"
    }],
    "name": "getAmount",
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
      "type": "uint8"
    }, {
      "name": "",
      "type": "bytes32[]"
    }, {
      "name": "",
      "type": "address[]"
    }],
    "name": "runAccessInfo",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }, {
      "name": "",
      "type": "uint8"
    }, {
      "name": "",
      "type": "uint8"
    }, {
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "request_ID",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint8"
    }, {
      "name": "custom_values",
      "type": "bytes32[]"
    }, {
      "name": "stake_holders",
      "type": "address[]"
    }],
    "name": "runAccess",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "request_ID",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }],
    "name": "runFinalize",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "request_ID",
      "type": "uint256"
    }, {
      "name": "ad_address",
      "type": "address"
    }],
    "name": "dbgRequest",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "proposed_status_code",
      "type": "int256"
    }],
    "name": "runStatusChange",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": true,
    "stateMutability": "payable",
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
    "inputs": [{
      "name": "",
      "type": "int256"
    }],
    "name": "runDescribeStatus",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "bitcodeAddress",
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
    "constant": true,
    "inputs": [],
    "name": "maxCreditPerAd",
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
      "name": "request_data_ID",
      "type": "bytes32"
    }],
    "name": "getContent",
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
    "name": "DEFAULT_ACCESS",
    "outputs": [{
      "name": "",
      "type": "uint8"
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
    "inputs": [{
      "name": "request_data_ID",
      "type": "bytes32"
    }],
    "name": "getOriginator",
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
    "name": "runCreate",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": true,
    "stateMutability": "payable",
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
    "inputs": [{
      "name": "request_data_ID",
      "type": "bytes32"
    }],
    "name": "getAdvertisement",
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
    "name": "runKill",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": true,
    "stateMutability": "payable",
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
    "constant": true,
    "inputs": [],
    "name": "DEFAULT_SEE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "creditPerAd",
      "type": "uint256"
    }],
    "name": "setMaxCreditPerAd",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "request_data_ID",
      "type": "bytes32"
    }],
    "name": "getCampaign",
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
      "name": "",
      "type": "bytes32"
    }],
    "name": "requestMap",
    "outputs": [{
      "name": "originator",
      "type": "address"
    }, {
      "name": "content",
      "type": "address"
    }, {
      "name": "advertisement",
      "type": "address"
    }, {
      "name": "campaign",
      "type": "address"
    }, {
      "name": "amount",
      "type": "uint256"
    }, {
      "name": "status",
      "type": "int8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "bitcode",
      "type": "address"
    }],
    "name": "setBitcodeAddress",
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
      "name": "content_address",
      "type": "address"
    }, {
      "name": "campaign_address",
      "type": "address"
    }, {
      "name": "ad_address",
      "type": "address"
    }, {
      "name": "amount",
      "type": "bytes32"
    }],
    "name": "createMessage",
    "outputs": [{
      "name": "",
      "type": "bytes"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "bool"
    }],
    "name": "runGrant",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "DEFAULT_CHARGE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
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
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "maxCreditPerAd",
      "type": "uint256"
    }],
    "name": "MaxCreditPerAd",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "bitcode",
      "type": "address"
    }],
    "name": "BitcodeAddress",
    "type": "event"
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "label",
      "type": "string"
    }],
    "name": "Log",
    "type": "event"
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "result",
      "type": "uint256"
    }],
    "name": "RunCreate",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "result",
      "type": "uint256"
    }],
    "name": "RunKill",
    "type": "event"
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  "bytecode": "60806040527f4f776e61626c6532303139303532383139333830304d4c00000000000000000060009081557f436f6e74656e7432303139303531303135313630304d4c0000000000000000006004557f41646d677241647665727469736d6e7432303139303531303135323230304d4c60055560085560018054600160a060020a031990811632908117909255600280549091169091179055611592806100a76000396000f30060806040526004361061017f5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f81146101815780630e0a0d74146101b25780630f82c16f146101dc578063123e0e80146102a1578063176859531461032e578063208daa4f1461033c5780633513a8051461036057806341c0e1b51461036b5780634508044214610380578063508ddbb01461039857806354fd4d50146103ad57806355a632f8146103c25780635cc15001146103d75780636af27417146103ef5780636d2e4b1b1461041a5780637afc54d41461043b5780637b1cdb3e146104535780638da5cb5b1461045b57806398980081146104705780639e99bbea14610453578063af570c0414610488578063b535b03e1461049d578063c5f8c53f146104b2578063cabe0452146104ca578063d4ecba4f146104e2578063dded4d7b14610544578063e75c24bb14610565578063e870ed911461060a578063f185db0c1461061a578063f2fde38b1461062f575b005b34801561018d57600080fd5b50610196610650565b60408051600160a060020a039092168252519081900360200190f35b3480156101be57600080fd5b506101ca60043561065f565b60408051918252519081900360200190f35b3480156101e857600080fd5b5060408051602060046024803582810135848102808701860190975280865261027296843560ff1696369660449591949091019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506106bc9650505050505050565b6040805160ff958616815293851660208501529190931682820152606082019290925290519081900360800190f35b60408051602060046044358181013583810280860185019096528085526101ca958335956024803560ff1696369695606495939492019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506106cb9650505050505050565b6101ca60043560243561092a565b34801561034857600080fd5b506101ca600435600160a060020a0360243516610bea565b6101ca600435610c97565b34801561037757600080fd5b5061017f610c9a565b34801561038c57600080fd5b506101ca600435610cd6565b3480156103a457600080fd5b50610196610cdc565b3480156103b957600080fd5b506101ca610ceb565b3480156103ce57600080fd5b506101ca610cf1565b3480156103e357600080fd5b50610196600435610cf7565b3480156103fb57600080fd5b50610404610d15565b6040805160ff9092168252519081900360200190f35b34801561042657600080fd5b5061017f600160a060020a0360043516610d1a565b34801561044757600080fd5b50610196600435610d75565b6101ca610d90565b34801561046757600080fd5b50610196610d95565b34801561047c57600080fd5b50610196600435610da4565b34801561049457600080fd5b50610196610dd1565b3480156104a957600080fd5b50610404610de0565b3480156104be57600080fd5b5061017f600435610de5565b3480156104d657600080fd5b50610196600435610e4e565b3480156104ee57600080fd5b506104fa600435610e6c565b60408051600160a060020a0397881681529587166020870152938616858501529190941660608401526080830193909352600092830b90920b60a082015290519081900360c00190f35b34801561055057600080fd5b50610196600160a060020a0360043516610eb2565b34801561057157600080fd5b50610595600160a060020a0360043581169060243581169060443516606435610f58565b6040805160208082528351818301528351919283929083019185019080838360005b838110156105cf5781810151838201526020016105b7565b50505050905090810190601f1680156105fc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101ca60043560243515156111af565b34801561062657600080fd5b506104046111b7565b34801561063b57600080fd5b5061017f600160a060020a03600435166111bc565b600154600160a060020a031681565b600081815260076020526040812060010154600160a060020a03161580159061069b5750600082815260076020526040812060050154810b900b155b15156106a657600080fd5b5060009081526007602052604090206004015490565b60076000808093509350935093565b60008060008060008060008060008951600014156106ec576000985061091a565b8960008151811015156106fb57fe5b602090810290910101519750600160a060020a038816156109155789600181518110151561072557fe5b9060200190602002015196508a600081518110151561074057fe5b9060200190602002015195508a600181518110151561075b57fe5b6020908102909101015160001a60f860020a0260f860020a900494508a600281518110151561078657fe5b9060200190602002015193508a60038151811015156107a157fe5b60209081029091010151600654909350600160a060020a0316156107cd576107cd88888888888861122e565b60085415806107de57506008548611155b15156107e957600080fd5b86915081600160a060020a0316632310167f6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561084357600080fd5b505af1158015610857573d6000803e3d6000fd5b505050506040513d602081101561086d57600080fd5b5051604080517ff06148f2000000000000000000000000000000000000000000000000000000008152336004820152602481018990529051919250600160a060020a0383169163f06148f2916044808201926020929091908290030181600087803b1580156108db57600080fd5b505af11580156108ef573d6000803e3d6000fd5b505050506040513d602081101561090557600080fd5b5061091590508d89338a8a6113b3565b600098505b5050505050505050949350505050565b600080600080600033876040516020018083600160a060020a0316600160a060020a03166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b602083106109aa5780518252601f19909201916020918201910161098b565b51815160001960209485036101000a0190811690199190911617905260408051949092018490039093206000818152600790945292208054929850965050600160a060020a031632149150508015610a0b57506005830154600090810b900b155b1515610a1657600080fd5b60008481526007602090815260408083206003015481517f2310167f0000000000000000000000000000000000000000000000000000000081529151600160a060020a0390911695508593632310167f93600480850194919392918390030190829087803b158015610a8757600080fd5b505af1158015610a9b573d6000803e3d6000fd5b505050506040513d6020811015610ab157600080fd5b5051604080517fcfefb3d5000000000000000000000000000000000000000000000000000000008152600481018790529051919250600160a060020a0383169163cfefb3d5916024808201926020929091908290030181600087803b158015610b1957600080fd5b505af1158015610b2d573d6000803e3d6000fd5b505050506040513d6020811015610b4357600080fd5b50506000848152600760209081526040808320805473ffffffffffffffffffffffffffffffffffffffff1990811682556001820180548216905560028201805482169055600382018054909116905560048101849055600501805460ff1916905580518a81529182019290925281517fbf0f2215c45c5ee802d4c20bdfc915308c4459b0f6a78f23ad350e6408bf2891929181900390910190a15060009695505050505050565b600081836040516020018083600160a060020a0316600160a060020a03166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b60208310610c645780518252601f199092019160209182019101610c45565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209695505050505050565b90565b600254600160a060020a0316321480610cbd5750600254600160a060020a031633145b1515610cc857600080fd5b600254600160a060020a0316ff5b50600090565b600654600160a060020a031681565b60055481565b60085481565b600090815260076020526040902060010154600160a060020a031690565b600281565b600154600160a060020a03163214610d3157600080fd5b600160a060020a0381161515610d4657600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600090815260076020526040902054600160a060020a031690565b600090565b600254600160a060020a031681565b600081815260076020526040812060020154600160a060020a0316801515610dcb57600080fd5b92915050565b600354600160a060020a031681565b600181565b600254600160a060020a0316321480610e085750600254600160a060020a031633145b1515610e1357600080fd5b60088190556040805182815290517f1f6808146a51d157d9343b08ee6fce3b39b0e5b419f4c8524a56512acf5ba2b59181900360200190a150565b600090815260076020526040902060030154600160a060020a031690565b600760205260009081526040812080546001820154600283015460038401546004850154600590950154600160a060020a03948516969385169592851694909116920b86565b600254600090600160a060020a0316321480610ed85750600254600160a060020a031633145b1515610ee357600080fd5b6006805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03848116919091179182905560408051929091168252517fecfcc1bcfb602db0a89a128bad350799ac7741ae87395080e8da39da6f100fcb916020908290030190a15050600654600160a060020a031690565b60408051606080825260808201909252819060009081908360208201610c00803883395050815191945060fd60020a918591506000908110610f9657fe5b906020010190600160f860020a031916908160001a905350825160fd60020a9084906015908110610fc357fe5b906020010190600160f860020a031916908160001a905350825160fd60020a908490602a908110610ff057fe5b906020010190600160f860020a031916908160001a905350825160fd60020a908490603f90811061101d57fe5b906020010190600160f860020a031916908160001a905350600091505b601482101561113e578160130360080260020a86600160a060020a031681151561106057fe5b0490508060f860020a02838360010181518110151561107b57fe5b906020010190600160f860020a031916908160001a9053508160130360080260020a87600160a060020a03168115156110b057fe5b0490508060f860020a0283836016018151811015156110cb57fe5b906020010190600160f860020a031916908160001a9053508160130360080260020a88600160a060020a031681151561110057fe5b0490508060f860020a028383602b0181518110151561111b57fe5b906020010190600160f860020a031916908160001a90535060019091019061103a565b600091505b60208210156111a35784826020811061115857fe5b1a60f860020a0260f860020a900490508060f860020a02838360400181518110151561118057fe5b906020010190600160f860020a031916908160001a905350600190910190611143565b50909695505050505050565b600092915050565b600481565b600254600160a060020a03163214806111df5750600254600160a060020a031633145b15156111ea57600080fd5b600160a060020a03811615156111ff57600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b606060008061123f8989338a610f58565b92508260405160200180807f19457468657265756d205369676e6564204d6573736167653a0a393600000000815250601c0182805190602001908083835b6020831061129c5780518252601f19909201916020918201910161127d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b602083106112ff5780518252601f1990920191602091820191016112e0565b51815160209384036101000a600019018019909216911617905260408051929094018290038220600080845283830180875282905260ff8e1684870152606084018d9052608084018c905294519098506001965060a080840196509194601f19820194509281900390910191865af115801561137f573d6000803e3d6000fd5b5050604051601f190151600654909250600160a060020a0380841691161490506113a857600080fd5b505050505050505050565b60006113bd611531565b84876040516020018083600160a060020a0316600160a060020a03166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b602083106114355780518252601f199092019160209182019101611416565b51815160209384036101000a60001901801990921691161790526040805192909401829003822060c083018552328352600160a060020a039c8d168383019081529b8d168386019081529a8d1660608401908152608084019a8b52600060a0850181815292815260079093529482209251835473ffffffffffffffffffffffffffffffffffffffff19908116918f169190911784559b516001840180548e16918f1691909117905599516002830180548d16918e169190911790559251600382018054909b169b169a909a1790985594516004890155505092516005909501805460ff191660ff9690930b959095169190911790935550505050565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810191909152905600a165627a7a723058204640479550920a2be8caccdcea4a4d566e86439d4e812b97ebfed56a50099d2d0029"
};
module.exports = contract;