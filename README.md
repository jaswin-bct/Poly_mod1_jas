# NFT Minting and Transfer Project

This project involves the creation of an ERC-721 compliant NFT contract called "JFT" and the deployment of this contract on the Goerli test network. Subsequently, NFTs are minted using the contract, and a few of these NFTs are transferred from Goerli to the Mumbai test network. Finally, the balance of NFTs on the Mumbai test network is displayed.

## Smart Contract

The smart contract is written in Solidity and is named `JFT.sol`. The contract inherits from OpenZeppelin's ERC721 contract. The contract allows minting of NFTs and stores metadata URIs for each token. The contract also has a `mintNFT` function for minting new NFTs.

## Deployment Script

The deployment script is named `deploy.js`. It deploys the `JFT` contract to the Goerli test network.

## Minting NFTs Script

The minting script is named `batchMint.js`. It mints NFTs using the deployed `JFT` contract and stores the metadata URIs for each token. This script is used to mint NFTs on the Goerli test network.

## Transferring NFTs Script

The transferring script is named `batchTransfer.js`. It transfers NFTs from the Goerli test network to the Mumbai test network. This script utilizes the `JFT` contract and the Root Tunnel contract on the Mumbai network for the transfer.

## Checking NFT Balance Script

The balance script is named `balance.js`. It checks the NFT balance of a specified account on the Mumbai test network. The address and the contract address are specified in the `.env` file.

## Setup and Execution

1. Make sure to have Hardhat configured and set up the environment variables in the `.env` file.

2. To deploy the contract, execute the `deploy.js` script using Hardhat:

```
npx hardhat run scripts/deploy.js --network goerli
```

3. Mint NFTs using the `batchMint.js` script:

```
npx hardhat run scripts/batchMint.js --network goerli
```

4. Transfer NFTs using the `batchTransfer.js` script:

```
npx hardhat run scripts/batchTransfer.js --network goerli
```

5. Check the NFT balance on the Mumbai test network using the `balance.js` script:

```
npx hardhat run scripts/balance.js --network mumbai
```

Feel free to customize and modify the scripts as needed for your specific use case.

## Authors

- Jaswin S.  >>  https://github.com/jaswin-bct

## License

This code is released under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

