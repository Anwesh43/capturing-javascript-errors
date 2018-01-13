const router = require('express').Router()
router.post('/log-error',(req,res)=>{
    const body = req.body
    const url = body.url
    const errName = body.errName
    const lineNumber = body.lineNumber
    console.log(body)
    res.json({url,errName,lineNumber})
})
module.exports = router
