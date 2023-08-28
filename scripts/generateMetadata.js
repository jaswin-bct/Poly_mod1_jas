const fs = require("fs");
const path = require("path");

// Image URLs for the 5 NFTs
const imageUrls = [
  "https://apricot-horizontal-primate-968.mypinata.cloud/ipfs/QmQ6moCCB2BdttHgD75QqWKErBQbfX5VFtUGVQ4Fre9t2F/DreamShaper_v7_monkey_with_cool_shades_2.jpg",
  "https://apricot-horizontal-primate-968.mypinata.cloud/ipfs/QmQ6moCCB2BdttHgD75QqWKErBQbfX5VFtUGVQ4Fre9t2F/DreamShaper_v7_monkey_with_cool_shades_1.jpg",
  "https://apricot-horizontal-primate-968.mypinata.cloud/ipfs/QmQ6moCCB2BdttHgD75QqWKErBQbfX5VFtUGVQ4Fre9t2F/DreamShaper_v7_monkey_with_cool_shades_3.jpg",
  "https://apricot-horizontal-primate-968.mypinata.cloud/ipfs/QmQ6moCCB2BdttHgD75QqWKErBQbfX5VFtUGVQ4Fre9t2F/DreamShaper_v7_monkey_with_cool_shades_4.jpg",
  "https://apricot-horizontal-primate-968.mypinata.cloud/ipfs/QmQ6moCCB2BdttHgD75QqWKErBQbfX5VFtUGVQ4Fre9t2F/DreamShaper_v7_monkey_with_cool_shades_0.jpg",
];

// NFT information
const name = "kidkong";
const description = "kidkong";

// Create NFThub directory if it doesn't exist
const dir = "./NFThub";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// Generate metadata for each NFT
for (let i = 0; i < imageUrls.length; i++) {
  const nftData = {
    name: `${name} #${i + 1}`,
    description: description,
    image: imageUrls[i],
  };

  const nftJson = JSON.stringify(nftData, null, 2);
  const fileName = `nft${i + 1}.json`;
  const filePath = path.join(dir, fileName);

  fs.writeFileSync(filePath, nftJson);
}

console.log("Metadata files generation done!");
