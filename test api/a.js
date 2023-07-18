const axios = require('axios');

const Backend = require("./connectTobackend")
const backend = new Backend()
backend.addToken("als","asfgfndg")
backend.createPair("sag" , "sayani")
backend.getAddress("btc")
backend.getTokenPrice("btc");
backend.tokenValidation("sag")
backend.setPricesWithAmounts("btc" , "eth" , 10,5,10)