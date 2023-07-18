const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class{
  addTokenValidator(){
    return [
      check('tokenName')
      .not()
       .isEmpty()
        .withMessage('tokenAddress is invalid'),
      check('tokenAddress')
        .not()
        .isEmpty()
        .withMessage('tokeAddress cant be empty')
    ]
  }
getTokenPrice(){
      return [
      check('tokenName')
      .not()
        .isEmpty()
        .withMessage('tokenName is invalid')
    ]
}

   createPair(){
    return [
      check('tokenName1')
      .not()
        .isEmpty()
        .withMessage('tokenName1 is invalid'),
       check('tokenName2')
      .not()
        .isEmpty()
        .withMessage('tokenName2 is invalid')
    ]
  }
}