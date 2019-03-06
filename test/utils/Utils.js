const crypto = require("crypto");
const Ethers = require("ethers");
const {ElvClient} = require("../../src/ElvClient");
const ClientConfiguration = require("../../TestConfiguration");

// Private key can be specified as environment variable
// e.g. PRIVATE_KEY=<private-key> npm run test
let privateKey = process.env["PRIVATE_KEY"] || "0xca3a2b0329b2ed1ce491643917f4b13d1619088f73a03728bb4149ed3fda3fbf";

const BufferToArrayBuffer = (buffer) => {
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
};

// Create an ArrayBuffer of the specified size with random data
const RandomBytes = (size) => {
  return BufferToArrayBuffer(crypto.randomBytes(size));
};

// Create an ArrayBuffer of the specified size with random data
const RandomString = (size) => {
  return crypto.randomBytes(size).toString("hex");
};

const CreateClient = async () => {
  const client = ElvClient.FromConfiguration({configuration: ClientConfiguration});
  const wallet = client.GenerateWallet();
  const fundedSigner = wallet.AddAccount({privateKey});

  // Create a new account and send some ether
  const signer = wallet.AddAccountFromMnemonic({
    mnemonic: wallet.GenerateMnemonic()
  });

  // Each test file is run in parallel, so there may be collisions when initializing - retry until success
  for(let i = 0; i < 5; i++) {
    try {
      await fundedSigner.sendTransaction({
        to: signer.address,
        value: Ethers.utils.parseEther("3")
      });

      break;
    } catch (e) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  // Ensure transaction has time to resolve fully before continuing
  await new Promise(resolve => setTimeout(resolve, 1000));

  client.SetSigner({signer});

  return client;
};

module.exports = {
  BufferToArrayBuffer,
  RandomBytes,
  RandomString,
  CreateClient
};
