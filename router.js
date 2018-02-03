const router = require('express').Router()
const ModelDao = require('./daos/ModelDao')
const LogError = require('./models/LogError')
const logErrorDao = new ModelDao(LogError)
router.post('/log-error',(req,res)=>{
    const body = req.body
    const url = body.url
    const errorMsg = body.errorMsg
    const lineNumber = body.lineNumber
    const userAgent = body.userAgent
    logErrorDao.create(body).then((status)=>{
        res.json(status)
    }).catch((err)=>{
        res.json(err)
    })
})
module.exports = router
