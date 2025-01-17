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
      "name": "content_address",
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
      "name": "",
      "type": "address"
    }],
    "name": "retrocessions",
    "outputs": [{
      "name": "active",
      "type": "bool"
    }, {
      "name": "maxAdsPerContent",
      "type": "uint8"
    }, {
      "name": "libraryPercent",
      "type": "uint8"
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
    "constant": false,
    "inputs": [{
      "name": "library_addr",
      "type": "address"
    }, {
      "name": "max_ads_per_item",
      "type": "uint8"
    }, {
      "name": "percent",
      "type": "uint8"
    }, {
      "name": "active",
      "type": "bool"
    }],
    "name": "setRetrocession",
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
  "bytecode": "60806040527f4f776e61626c6532303139303532383139333830304d4c00000000000000000060009081557f436f6e74656e7432303139303531303135313630304d4c0000000000000000006004557f53706c436f6e7441644d6b74706c636532303139303331383130333130304d4c60055560095560018054600160a060020a0319908116329081179092556002805490911690911790556113bd806100a76000396000f30060806040526004361061013a5763ffffffff60e060020a60003504166302d05d3f811461013c5780630f32e7161461016d5780630f82c16f1461020c578063123e0e80146102d157806317685953146103705780633513a8051461037e57806341c0e1b514610389578063450804421461039e578063508ddbb0146103b657806354fd4d50146103cb57806355a632f8146103e05780636af27417146103f55780636d2e4b1b14610420578063791ec135146104415780637b1cdb3e146104865780638da5cb5b1461048e5780639e99bbea14610486578063af570c04146104a3578063b535b03e146104b8578063c5f8c53f146104cd578063d4ecba4f146104e5578063dded4d7b14610536578063e2d551f514610557578063e870ed911461059d578063f185db0c146105ad578063f2fde38b146105c2575b005b34801561014857600080fd5b506101516105e3565b60408051600160a060020a039092168252519081900360200190f35b34801561017957600080fd5b50610197600160a060020a03600435811690602435166044356105f2565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101d15781810151838201526020016101b9565b50505050905090810190601f1680156101fe5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021857600080fd5b506040805160206004602480358281013584810280870186019097528086526102a296843560ff1696369660449591949091019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506107ce9650505050505050565b6040805160ff958616815293851660208501529190931682820152606082019290925290519081900360800190f35b604080516020600460443581810135838102808601850190965280855261035e958335956024803560ff1696369695606495939492019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506107dd9650505050505050565b60408051918252519081900360200190f35b61035e600435602435610963565b61035e600435610d13565b34801561039557600080fd5b5061013a610d16565b3480156103aa57600080fd5b5061035e600435610d52565b3480156103c257600080fd5b50610151610d58565b3480156103d757600080fd5b5061035e610d67565b3480156103ec57600080fd5b5061035e610d6d565b34801561040157600080fd5b5061040a610d73565b6040805160ff9092168252519081900360200190f35b34801561042c57600080fd5b5061013a600160a060020a0360043516610d78565b34801561044d57600080fd5b50610462600160a060020a0360043516610dd3565b60408051931515845260ff9283166020850152911682820152519081900360600190f35b61035e610dfb565b34801561049a57600080fd5b50610151610e00565b3480156104af57600080fd5b50610151610e0f565b3480156104c457600080fd5b5061040a610e1e565b3480156104d957600080fd5b5061013a600435610e23565b3480156104f157600080fd5b506104fd600435610e8c565b60408051600160a060020a03958616815293909416602084015282840191909152600090810b900b606082015290519081900360800190f35b34801561054257600080fd5b50610151600160a060020a0360043516610ec2565b34801561056357600080fd5b50610589600160a060020a036004351660ff602435811690604435166064351515610f68565b604080519115158252519081900360200190f35b61035e600435602435151561101d565b3480156105b957600080fd5b5061040a611025565b3480156105ce57600080fd5b5061013a600160a060020a036004351661102a565b600154600160a060020a031681565b60408051604b80825260808201909252606091829160009182919060208201610960803883395050815191945060fd60020a91859150600090811061063357fe5b906020010190600160f860020a031916908160001a905350825160fd60020a908490601590811061066057fe5b906020010190600160f860020a031916908160001a905350825160fd60020a908490602a90811061068d57fe5b906020010190600160f860020a031916908160001a905350600091505b601482101561075e578160130360080260020a86600160a060020a03168115156106d057fe5b0490508060f860020a0283836001018151811015156106eb57fe5b906020010190600160f860020a031916908160001a9053508160130360080260020a87600160a060020a031681151561072057fe5b0490508060f860020a02838360160181518110151561073b57fe5b906020010190600160f860020a031916908160001a9053506001909101906106aa565b600091505b60208210156107c35784826020811061077857fe5b1a60f860020a0260f860020a900490508060f860020a028383602b018151811015156107a057fe5b906020010190600160f860020a031916908160001a905350600190910190610763565b509095945050505050565b60076000808093509350935093565b60008060008060008060008060008960008151811015156107fa57fe5b90602001906020020151975087965086600160a060020a031663b816f5136040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561084757600080fd5b505af115801561085b573d6000803e3d6000fd5b505050506040513d602081101561087157600080fd5b5051600160a060020a03811660009081526007602052604090208054919750955060ff1615156108a057600080fd5b8a60008151811015156108af57fe5b9060200190602002015193508a60018151811015156108ca57fe5b6020908102909101015160001a60f860020a0260f860020a900492508a60028151811015156108f557fe5b9060200190602002015191508a600381518110151561091057fe5b906020019060200201519050610929888585858561109c565b600954158061093a57506009548411155b151561094557600080fd5b6109508d898661121f565b5060009c9b505050505050505050505050565b60008060008060008060008060008a336040516020018083815260200182600160a060020a0316600160a060020a03166c01000000000000000000000000028152601401925050506040516020818303038152906040526040518082805190602001908083835b602083106109e95780518252601f1990920191602091820191016109ca565b51815160001960209485036101000a0190811690199190911617905260408051949092018490039093206000818152600890945292208054929c509a5050600160a060020a031632149150508015610a4a57506003870154600090810b900b155b1515610a5557600080fd5b8660010160009054906101000a9004600160a060020a0316955085600160a060020a031663b816f5136040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610aad57600080fd5b505af1158015610ac1573d6000803e3d6000fd5b505050506040513d6020811015610ad757600080fd5b5051604080517fb816f5130000000000000000000000000000000000000000000000000000000081529051919650600160a060020a0388169163b816f513916004808201926020929091908290030181600087803b158015610b3857600080fd5b505af1158015610b4c573d6000803e3d6000fd5b505050506040513d6020811015610b6257600080fd5b5051600160a060020a038616600090815260076020526040808220805460028c0154925194985090965062010000900460ff1660648204029450849003925032916108fc84150291849190818181858888f19350505050158015610bca573d6000803e3d6000fd5b5083600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610c0957600080fd5b505af1158015610c1d573d6000803e3d6000fd5b505050506040513d6020811015610c3357600080fd5b5051604051600160a060020a039091169083156108fc029084906000818181858888f19350505050158015610c6c573d6000803e3d6000fd5b5060038781018054600160ff19918216811790925560008b8152600860209081526040808320805473ffffffffffffffffffffffffffffffffffffffff19908116825595810180549096169095556002850183905593909401805490921690915581518e81529283015280517fbf0f2215c45c5ee802d4c20bdfc915308c4459b0f6a78f23ad350e6408bf28919281900390910190a15060009a9950505050505050505050565b90565b600254600160a060020a0316321480610d395750600254600160a060020a031633145b1515610d4457600080fd5b600254600160a060020a0316ff5b50600090565b600654600160a060020a031681565b60055481565b60095481565b600281565b600154600160a060020a03163214610d8f57600080fd5b600160a060020a0381161515610da457600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60076020526000908152604090205460ff808216916101008104821691620100009091041683565b600090565b600254600160a060020a031681565b600354600160a060020a031681565b600181565b600254600160a060020a0316321480610e465750600254600160a060020a031633145b1515610e5157600080fd5b60098190556040805182815290517f1f6808146a51d157d9343b08ee6fce3b39b0e5b419f4c8524a56512acf5ba2b59181900360200190a150565b6008602052600090815260408120805460018201546002830154600390930154600160a060020a03928316949290911692910b84565b600254600090600160a060020a0316321480610ee85750600254600160a060020a031633145b1515610ef357600080fd5b6006805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03848116919091179182905560408051929091168252517fecfcc1bcfb602db0a89a128bad350799ac7741ae87395080e8da39da6f100fcb916020908290030190a15050600654600160a060020a031690565b6000610f7261134a565b600254600160a060020a0316321480610f955750600254600160a060020a031633145b1515610fa057600080fd5b505060408051606081018252821515815260ff9485166020808301918252948616828401908152600160a060020a0397909716600090815260079095529190932092518354915195518516620100000262ff000019969095166101000261ff001991151560ff199093169290921716179390931691909117905590565b600092915050565b600481565b600254600160a060020a031632148061104d5750600254600160a060020a031633145b151561105857600080fd5b600160a060020a038116151561106d57600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60606000806110ac8833896105f2565b92508260405160200180807f19457468657265756d205369676e6564204d6573736167653a0a373500000000815250601c0182805190602001908083835b602083106111095780518252601f1990920191602091820191016110ea565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b6020831061116c5780518252601f19909201916020918201910161114d565b51815160209384036101000a600019018019909216911617905260408051929094018290038220600080845283830180875282905260ff8e1684870152606084018d9052608084018c905294519098506001965060a080840196509194601f19820194509281900390910191865af11580156111ec573d6000803e3d6000fd5b5050604051601f190151600654909250600160a060020a03808416911614905061121557600080fd5b5050505050505050565b600061122961136a565b6040805160208082018890526c0100000000000000000000000033028284015282516034818403018152605490920192839052815191929182918401908083835b602083106112895780518252601f19909201916020918201910161126a565b51815160001960209485036101000a0190811690199190911617905260408051949092018490038420608085018352328552600160a060020a039a8b168583019081528584019a8b52600060608701818152928152600890935292822094518554908c1673ffffffffffffffffffffffffffffffffffffffff19918216178655925160018601805491909c1693169290921790995596516002830155509451600390950180549590960b60ff1660ff19909516949094179094555050505050565b604080516060810182526000808252602082018190529181019190915290565b604080516080810182526000808252602082018190529181018290526060810191909152905600a165627a7a72305820eb09a855ac7b96b63cd0ed2d5357d9dbe1c656585a86543248651a82bfc7ac240029"
};
module.exports = contract;