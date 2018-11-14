const { ElvClient } = require("../src/ElvClient");
//const { ElvClient } = require("../ElvClient-node-min-dev");
//const { ElvClient } = require("../ElvClient-node-min");
const { FrameClient } = require("../src/FrameClient");
const TestMethods = require("./TestMethods");

const Test = async () => {
  let Client = new ElvClient({
    contentSpaceId: "ispcbw26LEeKAhtHMyJeY69Ha2P8Mfg",
    hostname: "localhost",
    port: 8008,
    useHTTPS: false,
    //ethHostname: "localhost",
    ethHostname: "localhost",
    ethPort: 8545,
    ethUseHTTPS: false
  });

  let wallet = Client.GenerateWallet();
  let signer = wallet.AddAccount({
    accountName: "Alice",
    //privateKey: "0000000000000000000000000000000000000000000000000000000000000000"
    privateKey: "0000000000000000000000000000000000000000000000000000000000000000"
  });
  Client.SetSigner({signer});

  TestMethods.TestQueries(Client, signer);

  // Ensure ElvClient and FrameClient agree on allowed methods
  const frameClient = new FrameClient({target: this});

  const frameClientMethods = frameClient.AllowedMethods();
  const elvClientMethods = Client.FrameAllowedMethods();

  const differentKeys = frameClientMethods
    .filter(x => !elvClientMethods.includes(x))
    .concat(elvClientMethods.filter(x => !frameClientMethods.includes(x)));

  if(differentKeys.length > 0) {
    console.error("MISMATCHED ALLOWED METHODS BETWEEN ELV CLIENT AND FRAME CLIENT");
    console.error(differentKeys);

    console.error("EXPECTED");
    console.log(JSON.stringify(elvClientMethods.sort(), null, 2));
  }
};

Test();
