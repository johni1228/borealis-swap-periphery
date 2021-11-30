const HDWalletProvider = require("@truffle/hdwallet-provider");

const fs = require('fs')
const mnemonic = fs.readFileSync('.secret').toString().trim();

module.exports = {
 
  networks: {
    
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },

    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://testnet.aurora.dev`),
      network_id: 1313161555,
      gas: 10000000,
      confirmations: 5,
      networkCheckTimeout: 120000,
      skipDryRun: true,
    },
    bsc: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      networkCheckTimeout: 120000,
      skipDryRun: true
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    // Add BSCSCAN_API_KEY in .env file to verify contracts deployed through truffle
    etherscan: process.env.BSCSCAN_API_KEY
  },
  mocha: {
 
  },

  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1
        },
        evmVersion: "istanbul", 
        outputSelection: {
          "*": {
            "": [
              "ast"
            ],
            "*": [
              "evm.bytecode.object",
              "evm.deployedBytecode.object",
              "abi",
              "evm.bytecode.sourceMap",
              "evm.deployedBytecode.sourceMap",
              "metadata"
            ]
          }
        }
    }
    }
  },
};
