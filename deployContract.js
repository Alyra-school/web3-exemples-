var  Web3  =  require('web3');  
web3  =  new  Web3("http://127.0.0.1:7545");

var abi = [
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
				"name": "number1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "number2",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var myContract =  new  web3.eth.Contract(abi);

myContract.deploy({
    data: '0x608060405234801561001057600080fd5b5060d68061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80632e64cec11460375780636057361d14605a575b600080fd5b603d6085565b604051808381526020018281526020019250505060405180910390f35b608360048036036020811015606e57600080fd5b81019080803590602001909291905050506096565b005b600080600054600054915091509091565b806000819055505056fea2646970667358221220f9942d4906858d4b4d2e4d57de64402ef739f792c224f34b9f1cc12466d35c4764736f6c63430007060033'
})
.send({
    from: '0x66F5B3900F1dD1f7eEE385A0bD58A681911488FD',
    gas: 1500000
}, function(error, transactionHash){ })
.on('error', function(error){ console.log("Erreur : ", error); })
.on('transactionHash', function(transactionHash){ console.log("Transaction Hash : ", transactionHash); })
.on('receipt', function(receipt){
    console.log("Receipt : ", receipt);
    console.log(receipt.contractAddress) // contains the new contract address
})
.on('confirmation', function(confirmationNumber, receipt){  })
.then(function(newContractInstance){
    console.log("Contract address : ", newContractInstance.options.address) // instance with the new contract address
});
