var  Web3  =  require('web3');

web3  =  new  Web3(new  Web3.providers.HttpProvider('https://mainnet.infura.io/v3/461e417d912441f78958e476ebc11f47'));

var  ethTx  = '0x144af2350f95c15c11019692c6afb23da51981f40c0ff62694e1dc98cb23f6c0';

web3.eth.getTransaction(ethTx , function(erreur, tx){
    if(erreur !== null) {
        console.log(tx); // Log all the transaction info
        console.log('From Address: '  +  tx.from); // Log the from address
        console.log('To Address: '  +  tx.to); // Log the to address
        console.log('Ether Transacted: '  + (web3.utils.fromWei(tx.value, 'ether'))); // Get the value, convert from Wei to Ether and log it
    }
    else console.log(erreur);
});



