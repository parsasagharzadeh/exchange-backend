const { MongoClient } = require("mongodb");

const url = 'mongodb+srv://parsas:25738284@atlascluster.5gcw3sq.mongodb.net/?retryWrites=true&w=majority'; 
module.exports = class {
  constructor(){
     
this.client = new MongoClient(url)
this.dbName = "exchange"
this.db = this.client.db(this.dbName)
  }
 async connectDb  (){
    await this.client.connect();
  console.log('Connected successfully to server');
}
}



