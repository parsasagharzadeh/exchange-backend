const axios = require('axios');

class Backend{

  async addToken(tokenName,tokenAddress){
await axios.post("http://localhost:4000/api/token/addToken",{tokenName , tokenAddress})
  .then(function (response) {
    console.log(response.data.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  async createPair(tokenName1,tokenName2){
   await  axios.post("http://localhost:4000/api/token/createPair",{tokenName1,tokenName2})
  .then(function (response) {
    console.log(response.data.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  async getAddress(tokenName){
  await  axios.post("http://localhost:4000/api/token/getAddress",{tokenName})
  .then(function (response) {
    return response.data.data
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  async tokenValidation(tokenName){
await  axios.post("http://localhost:4000/api/token/tokenValidation",{tokenName})
  .then(function (response) {
    console.log(response.data.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
   async setPricesWithAmounts( tokenAddress1 ,
    tokenAddress2 ,
    price1 ,
    price2 ,amount1){

  
   
  await  axios.post("http://localhost:4000/api/token/setPricesWithAmounts",{tokenAddress1,tokenAddress2,price1, price2 , amount1})
  .then(function (response) {
    return response.data.data
  })
  .catch(function (error) {
    console.log(error);
  });
  }
   async getTokenPrice(tokenName){
 await  await axios.post("http://localhost:4000/api/token/getTokenPrice",{tokenName})
  .then(function (response) {
       return response.data.data

  })
  .catch(function (error) {
    console.log(error);
  });
  }
}
module.exports = Backend