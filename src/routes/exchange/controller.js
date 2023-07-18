const controller = require("./../controller");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const request = require('request');

module.exports = new (class extends controller {
  async addToken(req, res) {
 const token =  _.pick(req.body, [ "tokenAddress", "tokenName"]);
 const result =  await this.Token.insertOne(token)
 this.response({res,message:"token added" , data:result});
  }
async getTokenPrice(req,res){

const url2 = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${req.body.tokenName}`

  request.get({
    url: url2,
    json: true,
    headers: {
      'X-CMC_PRO_API_KEY': "e3003e5a-bbe1-405a-8830-6a6dace1a42a"
    }
  }, (error, response, data) => {
try {
  
    if (error) {
      return res.send({ 
        error: error
      });
    }
    let result =Object.entries(data.data)[0][1].quote.USD.price;

   
    res.send({
      data:result
      //.platform.token_address
      //.quote.USD.price
    });

} catch (error) {
  res.send({
        message:"this token isnt valid",
        data:null
      });
}
  });
} 

async createPair(req,res){ 
  let pair = await this.Pair.findOne({$or:[{tokenName1:req.body.tokenName1 ,tokenName2:req.body.tokenName2 },{tokenName1:req.body.tokenName2 ,tokenName2:req.body.tokenName1 }]})
  console.log(pair)
  if(pair){
  this.response({res,message:"tokens has aready added",data:true})

  }else{
    const token1 = await this.Token.findOne({tokenName:req.body.tokenName1})
       const token2 = await this.Token.findOne({tokenName:req.body.tokenName2})
       if(token1 && token2){
 await this.Pair.insertOne({tokenName1:req.body.tokenName1 ,tokenName2:req.body.tokenName2})
this.response({res,message:"token is  added",data:false})
       }else{
this.response({res,message:"those token are not in tokenlist",data:null})

       }
  }
  
}
  async tokenValidation(req, res) {
    const token = await this.Token.findOne({tokenName:req.body.tokenName})
    this.response({res,message:"token info is taken" , data:token})
  }
  async getAddress(req , res){
      const token = await this.Token.findOne({tokenName:req.body.tokenName})
    this.response({res,message:"token info is taken" , data:token}) 
  }
 
  async setPricesWithAmounts(req , res){
  let amount1 = req.body.amount1
  const price1 =req.body.price1
  const price2 =req.body.price2
  console.log(price1 , price2)
  const tokenAddress1 = req.body.tokenAddress1
  const tokenAddress2 = req.body.tokenAddress2
  const amount2 =(amount1 * price1) / price2
 let data={
    amount1 ,
    amount2  ,
    price1 ,
    price2 , 
    tokenAddress1 ,
    tokenAddress2
  }
  this.response({res,message:"done",data}) 
  } 
})();
