const autoBind = require("auto-bind");
const {validationResult} = require('express-validator');
const Db = require('./../../startup/db')
const db = new Db()
module.exports = class {
  constructor() {
    autoBind(this);
    this.Token = db.db.collection("Token"); 
    this.Pair = db.db.collection("Pair"); 
  }
// this code came and valid aour validator
  validationBody(req,res){
    const result = validationResult(req);
    if(!result.isEmpty()){
      const errors = result.array();
      const messages = [];
      errors.forEach(err => messages.push(err.msg));
      res.status(400).json({
        message: 'validation error',
        data: messages
      }) 
      return false;
    }
    return true;
  }

  validate(req,res,next){
    if(!this.validationBody(req,res)){
      return;
    }
    next();
  }

  response({res, message, code=200, data={}}){
    res.status(code).json({
      message,
      data
    });
  }

}; 
