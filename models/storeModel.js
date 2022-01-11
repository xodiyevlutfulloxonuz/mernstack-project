const mongoose=require('mongoose')

const storeSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Number
    },
    job:{
        type:String 
    }
})  
 const connectModel = mongoose.model('store', storeSchema)

module.exports={connectModel}