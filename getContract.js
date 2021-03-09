var  Web3  =  require('web3');  
web3  =  new  Web3("http://127.0.0.1:7545");

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
var  addr  =  "0x7883955002A7e3D1E93c9F6E6eDD7B60269e3693";

var  contractInstance  =  new  web3.eth.Contract(abi, addr);

// FUNCTION must the name of the function you want to call. 
contractInstance.methods.store(30).send({from : "0x66f5b3900f1dd1f7eee385a0bd58a681911488fd"}).then(function(){
    contractInstance.methods.retrieve().call().then(console.log);
});
