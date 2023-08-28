const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS; // Replace with your contract address
  console.log(contractAddress)
  const contract = await ethers.getContractAt("JFT", contractAddress);
  console.log(contract)
  const accountAddress = process.env.PUBLIC_KEY; // Replace with the recipient account address
  console.log(accountAddress)
  const metadataURIs = [
    "https://apricot-horizontal-primate-968.mypinata.cloud/ipfs/QmXQ8C71ztzeuFc8mmr47P6pDwHZ4xqpYfCHmLmVw92Zfn/nft5.json",
    "https://apricot-horizontal-primate-968.mypinata.cloud/ipfs/QmXQ8C71ztzeuFc8mmr47P6pDwHZ4xqpYfCHmLmVw92Zfn/nft4.json",
    "https://apricot-horizontal-primate-968.mypinata.cloud/ipfs/QmXQ8C71ztzeuFc8mmr47P6pDwHZ4xqpYfCHmLmVw92Zfn/nft3.json",
    "https://apricot-horizontal-primate-968.mypinata.cloud/ipfs/QmXQ8C71ztzeuFc8mmr47P6pDwHZ4xqpYfCHmLmVw92Zfn/nft2.json",
    "https://apricot-horizontal-primate-968.mypinata.cloud/ipfs/QmXQ8C71ztzeuFc8mmr47P6pDwHZ4xqpYfCHmLmVw92Zfn/nft1.jsons",
  ];
  const numNFTs = 5; // Number of NFTs to mint

  for (let i = 0; i < numNFTs; i++) {
    const metadataURI = metadataURIs[i];
    console.log(`Minting NFT #${i + 1} : ${metadataURI}`);

    // Call the contract's mintNFT function
    const transaction = await contract.mintNFT(accountAddress, metadataURI);
    await transaction.wait();

    console.log(`NFT #${i + 1} minting done`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
