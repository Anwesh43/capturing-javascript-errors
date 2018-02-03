const mongoose = require('mongoose')
const LogErrorSchema = mongoose.Schema({errorMsg:String,lineNumber:Number,url:String,date:String,userAgent:String})
module.exports = LogErrorSchema
