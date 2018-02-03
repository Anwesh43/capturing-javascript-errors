const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./router')
const mongoose = require('mongoose')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    next()
})
app.use('/api',router)
mongoose.connect("mongodb://localhost:27017/log_error_db",()=>{
    console.log("connected to mongo")
    app.listen(9000,()=>{
        console.log("started the server on port 9000")
    })
})
