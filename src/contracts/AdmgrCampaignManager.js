const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccessInfo","outputs":[{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccess","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"runFinalize","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"proposed_status_code","type":"int256"}],"name":"runStatusChange","outputs":[{"name":"","type":"int256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"percent","type":"uint8"}],"name":"setLibraryRetrocession","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"int256"}],"name":"runDescribeStatus","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"campaignLibraryAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEFAULT_ACCESS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"libraryRetrocession","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"runCreate","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"campaign_library_address","type":"address"}],"name":"setCampaignLibraryAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"runKill","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"contentSpace","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEFAULT_SEE","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"market_place_address","type":"address"}],"name":"setMarketPlaceAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"initializedAsCampaignMgr","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bool"}],"name":"runGrant","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"marketPlaceAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEFAULT_CHARGE","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"b","type":"bool"}],"name":"LogBool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"a","type":"address"}],"name":"LogAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"u","type":"uint256"}],"name":"LogUint256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"u","type":"int256"}],"name":"LogInt256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"b","type":"bytes32"}],"name":"LogBytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"payee","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunKill","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proposedStatusCode","type":"int256"},{"indexed":false,"name":"returnStatusCode","type":"int256"}],"name":"RunStatusChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"level","type":"uint8"},{"indexed":false,"name":"calculateAccessCharge","type":"int256"}],"name":"RunAccessCharge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunAccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunFinalize","type":"event"}],"bytecode":"60806040527f4f776e61626c6532303139303532383139333830304d4c0000000000000000006000557f436f6e74656e7432303139303531303135313630304d4c0000000000000000006004557f41646d677243616d706169676e4d677232303139303232323135333630304d4c6005556006805460ff191690556007805460a060020a60ff021916905560018054600160a060020a031990811632908117909255600280549091169091179055611fdd806100bc6000396000f3006080604052600436106101485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f811461014a5780630f82c16f1461017b578063123e0e801461024057806317685953146102df5780633513a805146102ed57806341c0e1b5146102f8578063444814391461030d578063450804421461033e5780634edd676b1461035657806354fd4d501461036b5780636af27417146103805780636d2e4b1b1461039557806374cf29c2146103b65780637b1cdb3e146103cb5780638597a2a3146103d35780638da5cb5b146103f45780639e99bbea14610409578063af570c0414610411578063b535b03e14610426578063cc98ef961461043b578063d7f48c341461045c578063e870ed9114610485578063ed27107b14610495578063f185db0c146104aa578063f2fde38b146104bf575b005b34801561015657600080fd5b5061015f6104e0565b60408051600160a060020a039092168252519081900360200190f35b34801561018757600080fd5b5060408051602060046024803582810135848102808701860190975280865261021196843560ff1696369660449591949091019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506104ef9650505050505050565b6040805160ff958616815293851660208501529190931682820152606082019290925290519081900360800190f35b60408051602060046044358181013583810280860185019096528085526102cd958335956024803560ff1696369695606495939492019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506104fe9650505050505050565b60408051918252519081900360200190f35b6102cd600435602435610508565b6102cd600435610510565b34801561030457600080fd5b50610148610513565b34801561031957600080fd5b5061032860ff6004351661054f565b6040805160ff9092168252519081900360200190f35b34801561034a57600080fd5b506102cd600435610597565b34801561036257600080fd5b5061015f61059d565b34801561037757600080fd5b506102cd6105b1565b34801561038c57600080fd5b506103286105b7565b3480156103a157600080fd5b50610148600160a060020a03600435166105bc565b3480156103c257600080fd5b50610328610617565b6102cd610620565b3480156103df57600080fd5b50610148600160a060020a03600435166108c7565b34801561040057600080fd5b5061015f61092a565b6102cd610939565b34801561041d57600080fd5b5061015f61093e565b34801561043257600080fd5b5061032861094d565b34801561044757600080fd5b50610148600160a060020a0360043516610952565b34801561046857600080fd5b50610471610998565b604080519115158252519081900360200190f35b6102cd6004356024351515610508565b3480156104a157600080fd5b5061015f6109b9565b3480156104b657600080fd5b506103286109c8565b3480156104cb57600080fd5b50610148600160a060020a03600435166109cd565b600154600160a060020a031681565b60076000808093509350935093565b6000949350505050565b600092915050565b90565b600254600160a060020a03163214806105365750600254600160a060020a031633145b151561054157600080fd5b600254600160a060020a0316ff5b600254600090600160a060020a03163214806105755750600254600160a060020a031633145b151561058057600080fd5b506006805460ff191660ff92831617908190551690565b50600090565b6006546101009004600160a060020a031681565b60055481565b600281565b600154600160a060020a031632146105d357600080fd5b600160a060020a03811615156105e857600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60065460ff1681565b60075460009081908190819074010000000000000000000000000000000000000000900460ff16151561068b576007805474ff0000000000000000000000000000000000000000191674010000000000000000000000000000000000000000179055600093506108c1565b610693610a3f565b604051809103906000f0801580156106af573d6000803e3d6000fd5b50604080517fe5385303000000000000000000000000000000000000000000000000000000008152600160a060020a03831660048201529051919450339350839163e53853039160248082019260009290919082900301818387803b15801561071757600080fd5b505af115801561072b573d6000803e3d6000fd5b5050600654604080517f4448143900000000000000000000000000000000000000000000000000000000815260ff909216600483015251869450600160a060020a03851693506344481439925060248083019260209291908290030181600087803b15801561079957600080fd5b505af11580156107ad573d6000803e3d6000fd5b505050506040513d60208110156107c357600080fd5b5050604080517f63c77f8f0000000000000000000000000000000000000000000000000000000081523060048201529051600160a060020a038316916363c77f8f91602480830192600092919082900301818387803b15801561082557600080fd5b505af1158015610839573d6000803e3d6000fd5b5050600254604080517f6d2e4b1b000000000000000000000000000000000000000000000000000000008152600160a060020a03928316600482015290519185169350636d2e4b1b925060248082019260009290919082900301818387803b1580156108a457600080fd5b505af11580156108b8573d6000803e3d6000fd5b50505050600093505b50505090565b600254600160a060020a03163214806108ea5750600254600160a060020a031633145b15156108f557600080fd5b60068054600160a060020a039092166101000274ffffffffffffffffffffffffffffffffffffffff0019909216919091179055565b600254600160a060020a031681565b600090565b600354600160a060020a031681565b600181565b600154600160a060020a0316321461096957600080fd5b6007805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60075474010000000000000000000000000000000000000000900460ff1681565b600754600160a060020a031681565b600481565b600254600160a060020a03163214806109f05750600254600160a060020a031633145b15156109fb57600080fd5b600160a060020a0381161515610a1057600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60405161156280610a5083390190560060806040527f4f776e61626c6532303139303532383139333830304d4c00000000000000000060009081557f436f6e74656e7432303139303531303135313630304d4c0000000000000000006004557f41646d677243616d706169676e32303139303331383130353130304d4c0000006005556006805460a060020a60ff021916905542600a55600b5560018054600160a060020a0319908116329081179092556002805490911690911790556114a7806100bb6000396000f3006080604052600436106101b65763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f81146101b85780630b97bc86146101e95780630f82c16f146102105780630fb5a6b4146102d5578063123e0e80146102ea57806317685953146103775780631e1333fb1461038557806322f3e2d4146103bd578063309d1e40146103d25780633513a805146104185780633b917c301461042357806341c0e1b514610438578063444814391461044d578063450804421461047e57806346d5badb1461049657806354fd4d50146104ab57806363c77f8f146104c05780636af27417146104e15780636d2e4b1b146104f657806374cf29c21461051757806379d367ef1461052c5780637b1cdb3e1461054d5780638da5cb5b146105555780639dfa5d331461056a5780639e99bbea1461054d578063af570c041461057f578063b535b03e14610594578063c940c6b3146105a9578063cfefb3d5146105ca578063e177246e146105e2578063e870ed91146105fa578063f06148f21461060a578063f185db0c1461062e578063f2fde38b14610643578063f34da3c014610664575b005b3480156101c457600080fd5b506101cd61067c565b60408051600160a060020a039092168252519081900360200190f35b3480156101f557600080fd5b506101fe61068b565b60408051918252519081900360200190f35b34801561021c57600080fd5b506040805160206004602480358281013584810280870186019097528086526102a696843560ff1696369660449591949091019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506106919650505050505050565b6040805160ff958616815293851660208501529190931682820152606082019290925290519081900360800190f35b3480156102e157600080fd5b506101fe6106a0565b60408051602060046044358181013583810280860185019096528085526101fe958335956024803560ff1696369695606495939492019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506106a69650505050505050565b6101fe6004356024356106b0565b34801561039157600080fd5b506103a9600160a060020a03600435166024356106b8565b604080519115158252519081900360200190f35b3480156103c957600080fd5b506103a96107eb565b3480156103de57600080fd5b506103f3600160a060020a036004351661081f565b604080519384526020840192909252600090810b900b82820152519081900360600190f35b6101fe600435610840565b34801561042f57600080fd5b506101cd610843565b34801561044457600080fd5b506101b6610852565b34801561045957600080fd5b5061046860ff6004351661088e565b6040805160ff9092168252519081900360200190f35b34801561048a57600080fd5b506101fe6004356108f0565b3480156104a257600080fd5b506101fe6108f6565b3480156104b757600080fd5b506101fe6108fc565b3480156104cc57600080fd5b506101b6600160a060020a0360043516610902565b3480156104ed57600080fd5b50610468610948565b34801561050257600080fd5b506101b6600160a060020a036004351661094d565b34801561052357600080fd5b506104686109a8565b34801561053857600080fd5b506103a9600160a060020a03600435166109c9565b6101fe610b73565b34801561056157600080fd5b506101cd610b78565b34801561057657600080fd5b506101fe610b87565b34801561058b57600080fd5b506101cd610bc2565b3480156105a057600080fd5b50610468610bd1565b3480156105b557600080fd5b506101fe600435602435604435606435610bd6565b3480156105d657600080fd5b506103a9600435610c24565b3480156105ee57600080fd5b506101fe60043561131e565b6101fe60043560243515156106b0565b34801561061657600080fd5b506103a9600160a060020a036004351660243561135f565b34801561063a57600080fd5b506104686113b8565b34801561064f57600080fd5b506101b6600160a060020a03600435166113bd565b34801561067057600080fd5b506101cd60043561142f565b600154600160a060020a031681565b600a5481565b60076000808093509350935093565b600b5481565b6000949350505050565b600092915050565b60006106c2611457565b600254600090600160a060020a03163214806106e85750600254600160a060020a031633145b15156106f357600080fd5b50506040805160608101825283815260006020808301829052600183850152600160a060020a038716825260079052918220600281015491929091810b900b151561079b5760088054600180820183556000929092527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee301805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0388161790556009805490910190555b50600160a060020a039390931660009081526007602090815260408083208651815591860151600180840191909155950151600290910180549190920b60ff1660ff199091161790555090919050565b600a546000904290811015610803576000915061081b565b600b541580610818575080600b54600a540110155b91505b5090565b60076020526000908152604081208054600182015460029092015490920b83565b90565b600654600160a060020a031681565b600254600160a060020a03163214806108755750600254600160a060020a031633145b151561088057600080fd5b600254600160a060020a0316ff5b600154600090600160a060020a031632146108a857600080fd5b506006805474ff000000000000000000000000000000000000000019167401000000000000000000000000000000000000000060ff9384168102919091179182905590041690565b50600090565b60095481565b60055481565b600154600160a060020a0316321461091957600080fd5b6006805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600281565b600154600160a060020a0316321461096457600080fd5b600160a060020a038116151561097957600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60065474010000000000000000000000000000000000000000900460ff1681565b6002546000908190600160a060020a03163214806109f15750600254600160a060020a031633145b15156109fc57600080fd5b50600160a060020a038216600090815260076020526040812081815560018101829055600201805460ff191690555b600954811015610b685782600160a060020a0316600882815481101515610a4e57fe5b600091825260209091200154600160a060020a03161415610b60576008805482908110610a7757fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff19169055600954600019018114610b4d576008600160095403815481101515610abe57fe5b60009182526020909120015460088054600160a060020a039092169183908110610ae457fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506008600160095403815481101515610b2657fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff191690555b6009805460001901905560019150610b6d565b600101610a2b565b600091505b50919050565b600090565b600254600160a060020a031681565b600254600090600160a060020a0316321480610bad5750600254600160a060020a031633145b1515610bb857600080fd5b5042600a81905590565b600354600160a060020a031681565b600181565b600254600090600160a060020a0316321480610bfc5750600254600160a060020a031633145b1515610c0757600080fd5b50603c60188502840181028301028101600b819055949350505050565b6000806000806000806000806000610c3a6107eb565b1515610c4557600080fd5b604080517f0e0a0d74000000000000000000000000000000000000000000000000000000008152600481018c905290513399508991630e0a0d749160248083019260209291908290030181600087803b158015610ca157600080fd5b505af1158015610cb5573d6000803e3d6000fd5b505050506040513d6020811015610ccb57600080fd5b5051604080517f98980081000000000000000000000000000000000000000000000000000000008152600481018d90529051919850600160a060020a038a16916398980081916024808201926020929091908290030181600087803b158015610d3357600080fd5b505af1158015610d47573d6000803e3d6000fd5b505050506040513d6020811015610d5d57600080fd5b5051604080517f2310167f00000000000000000000000000000000000000000000000000000000815290519197508796503391600160a060020a03881691632310167f9160048083019260209291908290030181600087803b158015610dc257600080fd5b505af1158015610dd6573d6000803e3d6000fd5b505050506040513d6020811015610dec57600080fd5b5051600160a060020a031614610e0157600080fd5b604080517f7afc54d4000000000000000000000000000000000000000000000000000000008152600481018c905290513291600160a060020a038b1691637afc54d4916024808201926020929091908290030181600087803b158015610e6657600080fd5b505af1158015610e7a573d6000803e3d6000fd5b505050506040513d6020811015610e9057600080fd5b5051600160a060020a031614610ea557600080fd5b600160a060020a03861660009081526007602052604081206002810154909550810b900b600114610ed557600080fd5b83541580610eea575060018401548454038711155b1515610ef557600080fd5b600180850154600160a060020a0388166000908152600760205260409020908901910155835415801590610f4457508354600160a060020a038716600090815260076020526040902060010154145b15610f7057600160a060020a0386166000908152600760205260409020600201805460ff191660ff1790555b60065474010000000000000000000000000000000000000000900460ff1660648804029250821561127157604080517f5cc15001000000000000000000000000000000000000000000000000000000008152600481018c90529051600160a060020a038a1691635cc150019160248083019260209291908290030181600087803b158015610ffd57600080fd5b505af1158015611011573d6000803e3d6000fd5b505050506040513d602081101561102757600080fd5b5051604080517fb816f5130000000000000000000000000000000000000000000000000000000081529051919350600160a060020a0384169163b816f513916004808201926020929091908290030181600087803b15801561108857600080fd5b505af115801561109c573d6000803e3d6000fd5b505050506040513d60208110156110b257600080fd5b5051604080517f8da5cb5b0000000000000000000000000000000000000000000000000000000081529051919250600160a060020a03831691638da5cb5b916004808201926020929091908290030181600087803b15801561111357600080fd5b505af1158015611127573d6000803e3d6000fd5b505050506040513d602081101561113d57600080fd5b5051604051600160a060020a039091169084156108fc029085906000818181858888f19350505050158015611176573d6000803e3d6000fd5b507f6a0f12fe24f7c34df8acc096f076bac6e3f1ff225f4fccc7b0f389657bde895a81600160a060020a0316638da5cb5b6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156111ef57600080fd5b505af1158015611203573d6000803e3d6000fd5b505050506040513d602081101561121957600080fd5b505160408051600160a060020a0390921660208301528181018690526060808352600c908301527f526574726f63657373696f6e00000000000000000000000000000000000000006080830152519081900360a00190a15b604051329084890380156108fc02916000818181858888f1935050505015801561129f573d6000803e3d6000fd5b50604080513260208201528489038183015260608082526006908201527f5265776172640000000000000000000000000000000000000000000000000000608082015290517f6a0f12fe24f7c34df8acc096f076bac6e3f1ff225f4fccc7b0f389657bde895a9181900360a00190a15060019998505050505050505050565b600254600090600160a060020a03163214806113445750600254600160a060020a031633145b151561134f57600080fd5b50600a8054820190819055919050565b60008061136a6107eb565b151561137557600080fd5b50600160a060020a0383166000908152600760205260409020805415806113a3575060018101548154038311155b15156113ae57600080fd5b5060019392505050565b600481565b600254600160a060020a03163214806113e05750600254600160a060020a031633145b15156113eb57600080fd5b600160a060020a038116151561140057600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600880548290811061143d57fe5b600091825260209091200154600160a060020a0316905081565b60606040519081016040528060008152602001600081526020016000800b815250905600a165627a7a72305820becc96e99c6926cb052edc800d780fc74a533f9dde4b797cc7e4642f277fd1cc0029a165627a7a72305820ba38a2c5cfdcbb681408b1b80cb36cc3bffae73072fe02d8f38e737a771587ef0029"}; module.exports=contract;