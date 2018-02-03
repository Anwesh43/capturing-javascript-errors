class ErrorContainer {
    constructor() {
        this.errors = []
    }
    addError(url,lineNumber,errName) {
        this.errors.push(new LogError(url,lineNumber,errName))
        console.error(`${errName} captured in the server`)
    }
}
class LogError {
    constructor(url,lineNumber,errName) {
        this.url = url
        this.lineNumber = lineNumber
        this.errName = errName
    }
}
const startCapturingError = function () {
    console.log("hello")
    window.onerror = (errorMsg, url, lineNumber, column, errorObj) => {
        console.log(errorMsg)
        console.log(url)
        console.log(lineNumber)
        const date = (new Date()).toString()
        var userAgent = 'UNKNOWN'
        if(navigator && navigator.userAgent) {
            userAgent = navigator.userAgent
        }
        fetch('http://localhost:9000/api/log-error',{method:'POST',body:JSON.stringify({errorMsg,url,lineNumber,date,userAgent}),headers:{'Content-Type':'application/json'}}).then((res)=>res.json).then((jsonObj) =>  console.log(jsonObj))
        return true
    }
    console.error = (str) => {
        console.log(str)
    }
}
