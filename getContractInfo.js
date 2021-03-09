var  Web3  =  require('web3');  
web3  =  new  Web3(new  Web3.providers.HttpProvider('https://kovan.infura.io/v3/461e417d912441f78958e476ebc11f47'));

console.log('Calling Contract.....');

var  abi  =  [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
//var  addr  =  "0x556184F6C503D656E9ada82c649c862F44D16426";

var  contractInstance  =  new  web3.eth.Contract(abi, addr);

// FUNCTION must the name of the function you want to call. 
contractInstance.methods.retrieve().call().then(console.log);
