class ModelDao {
    constructor(Model) {
        this.Model = Model
    }
    create(modelObj) {
        const newModelObj = new this.Model(modelObj)
        return new Promise((resolve,reject)=>{
            newModelObj.save((err)=>{
                if(err == null) {
                    resolve({status:"success"})
                }
                else {
                    reject({status:"error",err})
                }
            })
        })
    }
    fetchAll() {
        return new Promise((resolve,reject)=>{
            this.Model.find({},(err,data)=>{
                if(err == null) {
                    resolve({data})
                }
                else {
                    reject({err,status:"error"})
                }
            })
        })
    }
}
module.exports = ModelDao
