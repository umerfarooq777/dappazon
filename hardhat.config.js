require("@nomicfoundation/hardhat-toolbox");
// import {HardhatUserConfig} from "hardhat/config"


const ETHERSCAN_API_KEY = "";
const ALCHEMY_API_KEY = "";
const SEPOLIA_PRIVATE_KEY = "";

// const config = {
//   solidity: "0.8.9",
//   etherscan: {
//   apiKey: ETHERSCAN_API_KEY,
//   },
//   networks: {
//   sepolia: {
//   url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
//   accounts: [SEPOLIA_PRIVATE_KEY]
//   }
// }
//   };
//   export default config;




/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.17",
  solidity: "0.8.9",
  etherscan: {
  apiKey: ETHERSCAN_API_KEY,
  },
  networks: {
  sepolia: {
  url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
  accounts: [`0x${SEPOLIA_PRIVATE_KEY}`]
  }
}
};
