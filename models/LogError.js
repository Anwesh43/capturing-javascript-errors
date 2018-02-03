const mongoose = require('mongoose')
const LogErrorSchema = require('../schemas/LogErrorSchema')
console.log(LogErrorSchema)
const LogError = mongoose.model('logError',LogErrorSchema)
module.exports = LogError
