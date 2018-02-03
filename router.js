const router = require('express').Router()
router.post('/log-error',(req,res)=>{
    const body = req.body
    const url = body.url
    const errorMsg = body.errorMsg
    const lineNumber = body.lineNumber
    console.log(body)
    res.json({url,errorMsg,lineNumber})
})
module.exports = router
