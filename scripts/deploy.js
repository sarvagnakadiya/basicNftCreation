const hre = require("hardhat");
// const { developmentChains } = require("../helper-hardhat-config")
// const { verify } = require("../utils/verify")

async function main() {

  const nftContractFactory = await hre.ethers.getContractFactory('BasicNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log(" NFT contract deployed to:", nftContract.address);

  // Call the function.
  let txn = await nftContract.mintNft()
  // Wait for it to be mined.
  await txn.wait()
  console.log("Minted NFT #1")

  txn = await nftContract.mintNft()
  // Wait for it to be mined.
  await txn.wait()
  console.log("Minted NFT #2")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
