
const express =require('express')
const app =express()
const router =require("./src/routes/index")
const Db = require('./startup/db')
const db = new Db()
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
require('./startup/config')(app ,express);



db.connectDb()
require('./startup/logging')();





app.use('/api' ,router )

const port = process.env.PORT || 4000 ; 
app.listen(port , ()=>{console.log(`connected to port ${port}`)} )