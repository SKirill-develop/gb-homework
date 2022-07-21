const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic =
  "23cbf212de44ec2e7897960282ba4acbe206887530edfe416b379e97a3ceac1c";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `wss://ropsten.infura.io/ws/v3/df8ce6cce2784bb7bef17082aa23ca89`
        ),
      network_id: 3,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },

    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*", // Match any network id
    // },
    develop: {
      port: 8545,
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: "47PDJM2H4GKMAMUQP5HZSW6XGHAP258TDP",
  },
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
