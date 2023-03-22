const Web3 = require('web3');

// Replace these values with your own
const contractAddress = '0x1234567890123456789012345678901234567890';
const contractABI = [
  {
    "inputs": [],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
const infuraKey = 'YOUR_INFURA_API_KEY';
const network = 'mainnet';

async function main() {
  // Connect to Infura node
  const web3 = new Web3(`https://${network}.infura.io/v3/${infuraKey}`);

  // Check if MetaMask is installed
  if (!window.ethereum) {
    alert('Please install MetaMask to use this dApp');
    return;
  }

  // Request user's permission to connect to their wallet
  await window.ethereum.enable();

  // Create a contract instance
  const contract = new web3.eth.Contract(contractABI, contractAddress);

  // Listen for form submission
  const form = document.getElementById('mint-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.target);
    const tokenId = formData.get('tokenId');

    // Call the smart contract's "mint" function to mint the NFT
    try {
      const result = await contract.methods.mint(tokenId).send({from: window.ethereum.selectedAddress});
      console.log('Transaction hash:', result.transactionHash);
      alert('NFT minted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to mint NFT');
    }
  });
}

main();
