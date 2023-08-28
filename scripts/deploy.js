const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  
  const name = "jas's  NFT Collection";
  const symbol = "JFT";
  const promptDesc =
    "A monkey with cool shades! ";

  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log(`Contract Deployer's address: ${deployerAddress}`);

  
  const JFT = await ethers.getContractFactory("JFT");
  const jft = await JFT.deploy(promptDesc, name, symbol);

  
  await jft.deployed();

 
  console.log("JFT deployed to:", jft.address);
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
