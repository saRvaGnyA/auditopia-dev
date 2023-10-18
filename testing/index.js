const Web3 = require("web3");
const alchemyUrl =
  "https://eth-sepolia.g.alchemy.com/v2/xIPJxibYhfaqB9tPR_uFQkSeliiNB9np"; // Alchemy URL
const contractAddress = "0x89B6c686f2e7526C4D37A6F4CCf3698a24b39f2A"; // Proxy contract address

const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainid",
        type: "uint256",
      },
    ],
    name: "ChainNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "_juryTableId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "createTables",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "insertIntoJury",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const web3 = new Web3(alchemyUrl);

const contract = new web3.eth.Contract(contractABI, contractAddress);

console.log(contract.methods);

contract.methods
  .insertIntoJury()
  .call()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
