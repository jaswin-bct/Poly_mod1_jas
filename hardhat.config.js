require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();
module.exports = {
  solidity: {
    version: "0.8.1",
  },
  etherscan: {
    apiKey: "B5PCI1D1YEHB47DRVS43PJDT4RRJZINRIP",
  },
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/336a201c36684a2f884db2578ac19cff",
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
