const mongoose=require('mongoose')

const connectDB= async()=>{
    try{
        mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true  
         })
       

    } 
    catch(e){
        console.log(e)
    }
}
module.exports={connectDB}