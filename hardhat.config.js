require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

// const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
// const PRIVATE_KEY = process.env.PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL,         //Your RPC URL
      accounts: ["f58b0d145bc958fd1b3ce72977e04e8be5815108d87b59bf02720f011a7e0f35"],          //Your private key

    },
  },
};
