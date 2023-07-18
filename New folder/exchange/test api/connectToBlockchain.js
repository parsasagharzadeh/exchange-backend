
class SmartContract{
constructor(web3,tokenContractAddress,tokencontractABI,contractAbi,contractAddress){
    this.tokenContractAddress =tokenContractAddress 
   this. tokencontractABI = tokencontractABI
    this.contractAbi =contractAbi
    this.contractAddress = contractAddress
    this.web3 = web3
    this.protocolTokenAddress ="0xfc84C9BdD9566F5D1A8CF8704fFc8B5a3D1d3132"
    this.protocolToken = new web3.eth.Contract(this.tokenContractABI, this.protocolTokenAddress);
    this.contract = new web3.eth.Contract(this.contractAbi, this.contractAddress); 

}
async connectToContract(contractAddress , contractAbi){
let contract =await new web3.eth.Contract(contractAbi, contractAddress);
return contract
}
async approve(fromAddress,contractAddress,approveAddress,amount){
  let contract = this.connectToContract(this.tokencontractABI,contractAddress)
  const tx1 = contract.methods.approve(approveAddress , amount);
  const gasTx1 = await tx1.estimateGas({ from: fromAddress});
  const dataTx1 = tx1.encodeABI();
  const nonce = await this.web3.eth.getTransactionCount(fromAddress, 'latest');
  const txData = {
    from:fromAddress,
    to: this.contractAddress,
    gas:gasTx1,
    data:dataTx1,
    nonce,
  };

  this.web3.eth.sendTransaction(txData)
  .on('transactionHash', (hash) => {
    console.log(`Transaction hash: ${hash}`);
  })
  .on('confirmation', (confirmationNumber, receipt) => {
    console.log(`Confirmation number: ${confirmationNumber}`);
    console.log(`Receipt: ${receipt}`);
  })
  .on('receipt', (receipt) => {
    console.log(`Receipt: ${receipt}`);
  })
  .on('error', (error) => {
    console.error(error);
    });
}
async withdrew(fromAddress,tokenName1,tokenName2,amount1,amount2,price1,price2){
  const tx3 = this.contract.methods.withdrew(tokenName1,tokenName2,amount1,amount2,price1,price2);
  const gasTx3 = await tx3.estimateGas({ from:fromAddress});
  const dataTx3 = tx3.encodeABI();
  const nonce = await this.web3.eth.getTransactionCount(fromAddress, 'latest');
  const txData3 = {
    from:fromAddress,
    to: this.contractAddress,
    gas:gasTx3,
    data:dataTx3,
    nonce,
  };

  // باز کردن پنجره‌ی پرداخت با استفاده از MetaMask

  this.web3.eth.sendTransaction(txData3)
  .on('transactionHash', (hash) => {
    console.log(`Transaction hash: ${hash}`);
  })
  .on('confirmation', (confirmationNumber, receipt) => {
    console.log(`Confirmation number: ${confirmationNumber}`);
    console.log(`Receipt: ${receipt}`);
  })
  .on('receipt', (receipt) => {
    console.log(`Receipt: ${receipt}`);
  })
  .on('error', (error) => {
    console.error(error);
    }); 
}
async swapToken(fromAddress,tokenName1,tokenName2,amount1,price1,price2){
   const tx3 =this.contract.methods.swaptokens(tokenName1,tokenName2 ,amount1,price1,price2);
  const gasTx3 = await tx3.estimateGas({ from: fromAddress});
  const dataTx3 = tx3.encodeABI();
  const nonce = await this.web3.eth.getTransactionCount(fromAddress, 'latest');

  const txData3 = {
    from:fromAddress,
    to: this.contractAddress,
    gas:gasTx3,
    data:dataTx3,
    nonce,
  };

  // باز کردن پنجره‌ی پرداخت با استفاده از MetaMask

  this.web3.eth.sendTransaction(txData3)
  .on('transactionHash', (hash) => {
    console.log(`Transaction hash: ${hash}`);
  })
  .on('confirmation', (confirmationNumber, receipt) => {
    console.log(`Confirmation number: ${confirmationNumber}`);
    console.log(`Receipt: ${receipt}`);
  })
  .on('receipt', (receipt) => {
    console.log(`Receipt: ${receipt}`);
  })
  .on('error', (error) => {
    console.error(error);
    });
}
async createPair(fromAddress,tokenName1,tokenName2,amount1,amount2,price1,price2){
    const tx3 =this.contract.methods.createpair(tokenName1,tokenName2,amount1,amount2,price1,price2);
  const gasTx3 = await tx3.estimateGas({ from: fromAddress});
  const dataTx3 = tx3.encodeABI();
  const nonce = await this.web3.eth.getTransactionCount(fromAddress, 'latest');

  const txData3 = {
    from:fromAddress,
    to: this.contractAddress,
    gas:gasTx3,
    data:dataTx3,
    nonce,
  };

  // باز کردن پنجره‌ی پرداخت با استفاده از MetaMask

  this.web3.eth.sendTransaction(txData3)
  .on('transactionHash', (hash) => {
    console.log(`Transaction hash: ${hash}`);
  })
  .on('confirmation', (confirmationNumber, receipt) => {
    console.log(`Confirmation number: ${confirmationNumber}`);
    console.log(`Receipt: ${receipt}`);
  })
  .on('receipt', (receipt) => {
    console.log(`Receipt: ${receipt}`);
  })
  .on('error', (error) => {
    console.error(error);
    });
}
async increasePair(fromAddress,tokenName1,tokenName2,amount1,amount2,price1,price2){
    const tx3 =this.contract.methods.increasePairvalue(tokenName1,tokenName2,amount1,amount2,price1,price2);
  const gasTx3 = await tx3.estimateGas({ from: fromAddress});
  const dataTx3 = tx3.encodeABI();
  const nonce = await this.web3.eth.getTransactionCount(fromAddress, 'latest');

  const txData3 = {
    from:fromAddress,
    to: this.contractAddress,
    gas:gasTx3,
    data:dataTx3,
    nonce,
  };

  // باز کردن پنجره‌ی پرداخت با استفاده از MetaMask

  this.web3.eth.sendTransaction(txData3)
  .on('transactionHash', (hash) => {
    console.log(`Transaction hash: ${hash}`);
  })
  .on('confirmation', (confirmationNumber, receipt) => {
    console.log(`Confirmation number: ${confirmationNumber}`);
    console.log(`Receipt: ${receipt}`);
  })
  .on('receipt', (receipt) => {
    console.log(`Receipt: ${receipt}`);
  })
  .on('error', (error) => {
    console.error(error);
    });
}
}