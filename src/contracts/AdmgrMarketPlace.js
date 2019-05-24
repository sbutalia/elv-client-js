const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccessInfo","outputs":[{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccess","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"runFinalize","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"proposed_status_code","type":"int256"}],"name":"runStatusChange","outputs":[{"name":"","type":"int256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"int256"}],"name":"runDescribeStatus","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEFAULT_ACCESS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"runCreate","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"runKill","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"DEFAULT_SEE","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bool"}],"name":"runGrant","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"DEFAULT_CHARGE","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"b","type":"bool"}],"name":"LogBool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"a","type":"address"}],"name":"LogAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"u","type":"uint256"}],"name":"LogUint256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"u","type":"int256"}],"name":"LogInt256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"b","type":"bytes32"}],"name":"LogBytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"payee","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunKill","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proposedStatusCode","type":"int256"},{"indexed":false,"name":"returnStatusCode","type":"int256"}],"name":"RunStatusChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"level","type":"uint8"},{"indexed":false,"name":"calculateAccessCharge","type":"int256"}],"name":"RunAccessCharge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunAccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunFinalize","type":"event"}],"bytecode":"60806040527f4f776e61626c6532303139303331353134313530304d4c0000000000000000006000557f436f6e74656e7432303139303531303135313630304d4c0000000000000000006003557f41646d67724d61726b6574506c61636532303139303232323135333730304d4c60045560018054600160a060020a0319908116329081179092556002805490911690911790556127fa806100a26000396000f3006080604052600436106100d75763ffffffff60e060020a60003504166302d05d3f81146100d95780630f82c16f1461010a578063123e0e80146101cf578063176859531461026e5780633513a8051461027c57806341c0e1b514610287578063450804421461029c57806354fd4d50146102b45780636af27417146102c95780636d2e4b1b146102f45780637b1cdb3e146103155780638da5cb5b1461031d5780639e99bbea14610332578063b535b03e1461033a578063e870ed911461034f578063f185db0c1461035f578063f2fde38b14610374575b005b3480156100e557600080fd5b506100ee610395565b60408051600160a060020a039092168252519081900360200190f35b34801561011657600080fd5b506040805160206004602480358281013584810280870186019097528086526101a096843560ff1696369660449591949091019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506103a49650505050505050565b6040805160ff958616815293851660208501529190931682820152606082019290925290519081900360800190f35b604080516020600460443581810135838102808601850190965280855261025c958335956024803560ff1696369695606495939492019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506103b39650505050505050565b60408051918252519081900360200190f35b61025c6004356024356103bd565b61025c6004356103c5565b34801561029357600080fd5b506100d76103c8565b3480156102a857600080fd5b5061025c600435610404565b3480156102c057600080fd5b5061025c61040a565b3480156102d557600080fd5b506102de610410565b6040805160ff9092168252519081900360200190f35b34801561030057600080fd5b506100d7600160a060020a0360043516610415565b61025c610470565b34801561032957600080fd5b506100ee6106f3565b61025c610702565b34801561034657600080fd5b506102de610707565b61025c60043560243515156103bd565b34801561036b57600080fd5b506102de61070c565b34801561038057600080fd5b506100d7600160a060020a0360043516610711565b600154600160a060020a031681565b60076000808093509350935093565b6000949350505050565b600092915050565b90565b600254600160a060020a03163214806103eb5750600254600160a060020a031633145b15156103f657600080fd5b600254600160a060020a0316ff5b50600090565b60045481565b600281565b600154600160a060020a0316321461042c57600080fd5b600160a060020a038116151561044157600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60008060008061047e610783565b604051809103906000f08015801561049a573d6000803e3d6000fd5b50604080517fe5385303000000000000000000000000000000000000000000000000000000008152600160a060020a03831660048201529051919450339350849250839163e53853039160248082019260009290919082900301818387803b15801561050557600080fd5b505af1158015610519573d6000803e3d6000fd5b5050604080517fcc98ef960000000000000000000000000000000000000000000000000000000081523060048201529051600160a060020a038516935063cc98ef969250602480830192600092919082900301818387803b15801561057d57600080fd5b505af1158015610591573d6000803e3d6000fd5b5050600254604080517f6d2e4b1b000000000000000000000000000000000000000000000000000000008152600160a060020a03928316600482015290519185169350636d2e4b1b925060248082019260009290919082900301818387803b1580156105fc57600080fd5b505af1158015610610573d6000803e3d6000fd5b5050505080600160a060020a031663f2fde38b83600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561066157600080fd5b505af1158015610675573d6000803e3d6000fd5b505050506040513d602081101561068b57600080fd5b50516040805160e060020a63ffffffff8516028152600160a060020a03909216600483015251602480830192600092919082900301818387803b1580156106d157600080fd5b505af11580156106e5573d6000803e3d6000fd5b505050506000935050505090565b600254600160a060020a031681565b600090565b600181565b600481565b600254600160a060020a03163214806107345750600254600160a060020a031633145b151561073f57600080fd5b600160a060020a038116151561075457600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60405161203b8061079483390190560060806040527f4f776e61626c6532303139303331353134313530304d4c0000000000000000006000557f436f6e74656e7432303139303531303135313630304d4c0000000000000000006003557f41646d677243616d706169676e4d677232303139303232323135333630304d4c6004556005805460ff191690556006805460a060020a60ff021916905560018054600160a060020a031990811632908117909255600280549091169091179055611f7f806100bc6000396000f30060806040526004361061013d5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f811461013f5780630f82c16f14610170578063123e0e801461023557806317685953146102d45780633513a805146102e257806341c0e1b5146102ed578063444814391461030257806345080442146103335780634edd676b1461034b57806354fd4d50146103605780636af27417146103755780636d2e4b1b1461038a57806374cf29c2146103ab5780637b1cdb3e146103c05780638597a2a3146103c85780638da5cb5b146103e95780639e99bbea146103fe578063b535b03e14610406578063cc98ef961461041b578063d7f48c341461043c578063e870ed9114610465578063ed27107b14610475578063f185db0c1461048a578063f2fde38b1461049f575b005b34801561014b57600080fd5b506101546104c0565b60408051600160a060020a039092168252519081900360200190f35b34801561017c57600080fd5b5060408051602060046024803582810135848102808701860190975280865261020696843560ff1696369660449591949091019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506104cf9650505050505050565b6040805160ff958616815293851660208501529190931682820152606082019290925290519081900360800190f35b60408051602060046044358181013583810280860185019096528085526102c2958335956024803560ff1696369695606495939492019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506104de9650505050505050565b60408051918252519081900360200190f35b6102c26004356024356104e8565b6102c26004356104f0565b3480156102f957600080fd5b5061013d6104f3565b34801561030e57600080fd5b5061031d60ff6004351661052f565b6040805160ff9092168252519081900360200190f35b34801561033f57600080fd5b506102c2600435610577565b34801561035757600080fd5b5061015461057d565b34801561036c57600080fd5b506102c2610591565b34801561038157600080fd5b5061031d610597565b34801561039657600080fd5b5061013d600160a060020a036004351661059c565b3480156103b757600080fd5b5061031d6105f7565b6102c2610600565b3480156103d457600080fd5b5061013d600160a060020a03600435166108a7565b3480156103f557600080fd5b5061015461090a565b6102c2610919565b34801561041257600080fd5b5061031d61091e565b34801561042757600080fd5b5061013d600160a060020a0360043516610923565b34801561044857600080fd5b50610451610969565b604080519115158252519081900360200190f35b6102c260043560243515156104e8565b34801561048157600080fd5b5061015461098a565b34801561049657600080fd5b5061031d610999565b3480156104ab57600080fd5b5061013d600160a060020a036004351661099e565b600154600160a060020a031681565b60076000808093509350935093565b6000949350505050565b600092915050565b90565b600254600160a060020a03163214806105165750600254600160a060020a031633145b151561052157600080fd5b600254600160a060020a0316ff5b600254600090600160a060020a03163214806105555750600254600160a060020a031633145b151561056057600080fd5b506005805460ff191660ff92831617908190551690565b50600090565b6005546101009004600160a060020a031681565b60045481565b600281565b600154600160a060020a031632146105b357600080fd5b600160a060020a03811615156105c857600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60055460ff1681565b60065460009081908190819074010000000000000000000000000000000000000000900460ff16151561066b576006805474ff0000000000000000000000000000000000000000191674010000000000000000000000000000000000000000179055600093506108a1565b610673610a10565b604051809103906000f08015801561068f573d6000803e3d6000fd5b50604080517fe5385303000000000000000000000000000000000000000000000000000000008152600160a060020a03831660048201529051919450339350839163e53853039160248082019260009290919082900301818387803b1580156106f757600080fd5b505af115801561070b573d6000803e3d6000fd5b5050600554604080517f4448143900000000000000000000000000000000000000000000000000000000815260ff909216600483015251869450600160a060020a03851693506344481439925060248083019260209291908290030181600087803b15801561077957600080fd5b505af115801561078d573d6000803e3d6000fd5b505050506040513d60208110156107a357600080fd5b5050604080517f63c77f8f0000000000000000000000000000000000000000000000000000000081523060048201529051600160a060020a038316916363c77f8f91602480830192600092919082900301818387803b15801561080557600080fd5b505af1158015610819573d6000803e3d6000fd5b5050600254604080517f6d2e4b1b000000000000000000000000000000000000000000000000000000008152600160a060020a03928316600482015290519185169350636d2e4b1b925060248082019260009290919082900301818387803b15801561088457600080fd5b505af1158015610898573d6000803e3d6000fd5b50505050600093505b50505090565b600254600160a060020a03163214806108ca5750600254600160a060020a031633145b15156108d557600080fd5b60058054600160a060020a039092166101000274ffffffffffffffffffffffffffffffffffffffff0019909216919091179055565b600254600160a060020a031681565b600090565b600181565b600154600160a060020a0316321461093a57600080fd5b6006805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60065474010000000000000000000000000000000000000000900460ff1681565b600654600160a060020a031681565b600481565b600254600160a060020a03163214806109c15750600254600160a060020a031633145b15156109cc57600080fd5b600160a060020a03811615156109e157600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60405161153380610a2183390190560060806040527f4f776e61626c6532303139303331353134313530304d4c00000000000000000060009081557f436f6e74656e7432303139303531303135313630304d4c0000000000000000006003557f41646d677243616d706169676e32303139303331383130353130304d4c0000006004556005805460a060020a60ff021916905542600955600a5560018054600160a060020a031990811632908117909255600280549091169091179055611478806100bb6000396000f3006080604052600436106101ab5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f81146101ad5780630b97bc86146101de5780630f82c16f146102055780630fb5a6b4146102ca578063123e0e80146102df578063176859531461036c5780631e1333fb1461037a57806322f3e2d4146103b2578063309d1e40146103c75780633513a8051461040d5780633b917c301461041857806341c0e1b51461042d5780634448143914610442578063450804421461047357806346d5badb1461048b57806354fd4d50146104a057806363c77f8f146104b55780636af27417146104d65780636d2e4b1b146104eb57806374cf29c21461050c57806379d367ef146105215780637b1cdb3e146105425780638da5cb5b1461054a5780639dfa5d331461055f5780639e99bbea14610542578063b535b03e14610574578063c940c6b314610589578063cfefb3d5146105aa578063e177246e146105c2578063e870ed91146105da578063f06148f2146105ea578063f185db0c1461060e578063f2fde38b14610623578063f34da3c014610644575b005b3480156101b957600080fd5b506101c261065c565b60408051600160a060020a039092168252519081900360200190f35b3480156101ea57600080fd5b506101f361066b565b60408051918252519081900360200190f35b34801561021157600080fd5b5060408051602060046024803582810135848102808701860190975280865261029b96843560ff1696369660449591949091019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506106719650505050505050565b6040805160ff958616815293851660208501529190931682820152606082019290925290519081900360800190f35b3480156102d657600080fd5b506101f3610680565b60408051602060046044358181013583810280860185019096528085526101f3958335956024803560ff1696369695606495939492019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506106869650505050505050565b6101f3600435602435610690565b34801561038657600080fd5b5061039e600160a060020a0360043516602435610698565b604080519115158252519081900360200190f35b3480156103be57600080fd5b5061039e6107cb565b3480156103d357600080fd5b506103e8600160a060020a03600435166107ff565b604080519384526020840192909252600090810b900b82820152519081900360600190f35b6101f3600435610820565b34801561042457600080fd5b506101c2610823565b34801561043957600080fd5b506101ab610832565b34801561044e57600080fd5b5061045d60ff6004351661086e565b6040805160ff9092168252519081900360200190f35b34801561047f57600080fd5b506101f36004356108d0565b34801561049757600080fd5b506101f36108d6565b3480156104ac57600080fd5b506101f36108dc565b3480156104c157600080fd5b506101ab600160a060020a03600435166108e2565b3480156104e257600080fd5b5061045d610928565b3480156104f757600080fd5b506101ab600160a060020a036004351661092d565b34801561051857600080fd5b5061045d610988565b34801561052d57600080fd5b5061039e600160a060020a03600435166109a9565b6101f3610b53565b34801561055657600080fd5b506101c2610b58565b34801561056b57600080fd5b506101f3610b67565b34801561058057600080fd5b5061045d610ba2565b34801561059557600080fd5b506101f3600435602435604435606435610ba7565b3480156105b657600080fd5b5061039e600435610bf5565b3480156105ce57600080fd5b506101f36004356112ef565b6101f36004356024351515610690565b3480156105f657600080fd5b5061039e600160a060020a0360043516602435611330565b34801561061a57600080fd5b5061045d611389565b34801561062f57600080fd5b506101ab600160a060020a036004351661138e565b34801561065057600080fd5b506101c2600435611400565b600154600160a060020a031681565b60095481565b60076000808093509350935093565b600a5481565b6000949350505050565b600092915050565b60006106a2611428565b600254600090600160a060020a03163214806106c85750600254600160a060020a031633145b15156106d357600080fd5b50506040805160608101825283815260006020808301829052600183850152600160a060020a038716825260069052918220600281015491929091810b900b151561077b5760078054600180820183556000929092527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68801805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0388161790556008805490910190555b50600160a060020a039390931660009081526006602090815260408083208651815591860151600180840191909155950151600290910180549190920b60ff1660ff199091161790555090919050565b60095460009042908110156107e357600091506107fb565b600a5415806107f8575080600a546009540110155b91505b5090565b60066020526000908152604081208054600182015460029092015490920b83565b90565b600554600160a060020a031681565b600254600160a060020a03163214806108555750600254600160a060020a031633145b151561086057600080fd5b600254600160a060020a0316ff5b600154600090600160a060020a0316321461088857600080fd5b506005805474ff000000000000000000000000000000000000000019167401000000000000000000000000000000000000000060ff9384168102919091179182905590041690565b50600090565b60085481565b60045481565b600154600160a060020a031632146108f957600080fd5b6005805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600281565b600154600160a060020a0316321461094457600080fd5b600160a060020a038116151561095957600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60055474010000000000000000000000000000000000000000900460ff1681565b6002546000908190600160a060020a03163214806109d15750600254600160a060020a031633145b15156109dc57600080fd5b50600160a060020a038216600090815260066020526040812081815560018101829055600201805460ff191690555b600854811015610b485782600160a060020a0316600782815481101515610a2e57fe5b600091825260209091200154600160a060020a03161415610b40576007805482908110610a5757fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff19169055600854600019018114610b2d576007600160085403815481101515610a9e57fe5b60009182526020909120015460078054600160a060020a039092169183908110610ac457fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506007600160085403815481101515610b0657fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff191690555b6008805460001901905560019150610b4d565b600101610a0b565b600091505b50919050565b600090565b600254600160a060020a031681565b600254600090600160a060020a0316321480610b8d5750600254600160a060020a031633145b1515610b9857600080fd5b5042600981905590565b600181565b600254600090600160a060020a0316321480610bcd5750600254600160a060020a031633145b1515610bd857600080fd5b50603c60188502840181028301028101600a819055949350505050565b6000806000806000806000806000610c0b6107cb565b1515610c1657600080fd5b604080517f0e0a0d74000000000000000000000000000000000000000000000000000000008152600481018c905290513399508991630e0a0d749160248083019260209291908290030181600087803b158015610c7257600080fd5b505af1158015610c86573d6000803e3d6000fd5b505050506040513d6020811015610c9c57600080fd5b5051604080517f98980081000000000000000000000000000000000000000000000000000000008152600481018d90529051919850600160a060020a038a16916398980081916024808201926020929091908290030181600087803b158015610d0457600080fd5b505af1158015610d18573d6000803e3d6000fd5b505050506040513d6020811015610d2e57600080fd5b5051604080517f2310167f00000000000000000000000000000000000000000000000000000000815290519197508796503391600160a060020a03881691632310167f9160048083019260209291908290030181600087803b158015610d9357600080fd5b505af1158015610da7573d6000803e3d6000fd5b505050506040513d6020811015610dbd57600080fd5b5051600160a060020a031614610dd257600080fd5b604080517f7afc54d4000000000000000000000000000000000000000000000000000000008152600481018c905290513291600160a060020a038b1691637afc54d4916024808201926020929091908290030181600087803b158015610e3757600080fd5b505af1158015610e4b573d6000803e3d6000fd5b505050506040513d6020811015610e6157600080fd5b5051600160a060020a031614610e7657600080fd5b600160a060020a03861660009081526006602052604081206002810154909550810b900b600114610ea657600080fd5b83541580610ebb575060018401548454038711155b1515610ec657600080fd5b600180850154600160a060020a0388166000908152600660205260409020908901910155835415801590610f1557508354600160a060020a038716600090815260066020526040902060010154145b15610f4157600160a060020a0386166000908152600660205260409020600201805460ff191660ff1790555b60055474010000000000000000000000000000000000000000900460ff1660648804029250821561124257604080517f5cc15001000000000000000000000000000000000000000000000000000000008152600481018c90529051600160a060020a038a1691635cc150019160248083019260209291908290030181600087803b158015610fce57600080fd5b505af1158015610fe2573d6000803e3d6000fd5b505050506040513d6020811015610ff857600080fd5b5051604080517fb816f5130000000000000000000000000000000000000000000000000000000081529051919350600160a060020a0384169163b816f513916004808201926020929091908290030181600087803b15801561105957600080fd5b505af115801561106d573d6000803e3d6000fd5b505050506040513d602081101561108357600080fd5b5051604080517f8da5cb5b0000000000000000000000000000000000000000000000000000000081529051919250600160a060020a03831691638da5cb5b916004808201926020929091908290030181600087803b1580156110e457600080fd5b505af11580156110f8573d6000803e3d6000fd5b505050506040513d602081101561110e57600080fd5b5051604051600160a060020a039091169084156108fc029085906000818181858888f19350505050158015611147573d6000803e3d6000fd5b507f6a0f12fe24f7c34df8acc096f076bac6e3f1ff225f4fccc7b0f389657bde895a81600160a060020a0316638da5cb5b6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156111c057600080fd5b505af11580156111d4573d6000803e3d6000fd5b505050506040513d60208110156111ea57600080fd5b505160408051600160a060020a0390921660208301528181018690526060808352600c908301527f526574726f63657373696f6e00000000000000000000000000000000000000006080830152519081900360a00190a15b604051329084890380156108fc02916000818181858888f19350505050158015611270573d6000803e3d6000fd5b50604080513260208201528489038183015260608082526006908201527f5265776172640000000000000000000000000000000000000000000000000000608082015290517f6a0f12fe24f7c34df8acc096f076bac6e3f1ff225f4fccc7b0f389657bde895a9181900360a00190a15060019998505050505050505050565b600254600090600160a060020a03163214806113155750600254600160a060020a031633145b151561132057600080fd5b5060098054820190819055919050565b60008061133b6107cb565b151561134657600080fd5b50600160a060020a038316600090815260066020526040902080541580611374575060018101548154038311155b151561137f57600080fd5b5060019392505050565b600481565b600254600160a060020a03163214806113b15750600254600160a060020a031633145b15156113bc57600080fd5b600160a060020a03811615156113d157600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600780548290811061140e57fe5b600091825260209091200154600160a060020a0316905081565b60606040519081016040528060008152602001600081526020016000800b815250905600a165627a7a723058206931dbcd2560cbabb378675c2a6fc780ad392a02f2d632b177102a7b794cf4890029a165627a7a723058207f2465d56c9b55b927368ce6380506cb7f8ffced1f834185b89d392288f201540029a165627a7a7230582087c89696fde3091183339c3e8e0f3848922bb834667af1aa33bd566b7cca18760029"}; module.exports=contract;