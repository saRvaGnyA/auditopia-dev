const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const contract = await ethers.getContractFactory("TableLand");
  const deployedContract = await contract.deploy();
  await deployedContract.deployed();
  console.log("Contract deployed at address : ", deployedContract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
