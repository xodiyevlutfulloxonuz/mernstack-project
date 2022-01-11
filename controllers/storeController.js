const {connectModel}=require('../models/storeModel')

const getStoreById=async(req,res)=>{
    try{
        const store =await connectModel.findById(req.params.id)
    
        console.log(store)
        if(!store){
             res.status(404).json({
                message:"User not found"
            })
        }
        return res.status(200).json({
            message:"success",
            store
        })

    }
    catch(e){
        res.send(e)
    }

}
const getAllUsers=async(req,res)=>{
    try{
        const stories=await connectModel.find()
        res.status(200).json({
         message:"success",
         stories
     })
    }
    catch(e){
        console.log(e)
    }
  
}
const addStore=async(req,res)=>{
    try{
     const {name,age,job}=await req.body 
     console.log(req.body)
     if(name&&age&&job){
        const newStore=await connectModel.create({name,age,job})
        res.status(201).json({
            message:"Successfully created",
            newStore
        })
     }
     else{
         res.status(400).json({
             message:"Iltimos ma'lumotlarni to'liq kiriting"
         })
     }
    
    }
    catch(e){
         res.send(e+"")
    }


}
const updateStore=async (req,res)=>{
    try{
        const {name, age,job}=req.body 
        const updateStore= await  connectModel.findByIdAndUpdate(req.params.id, {
         name,
          age,
         job
    })
    console.log("success updated")
       res.status(200).json({
           message:"succesfully updated",
           updateStore 
       })     
    
    } 
    catch(e){
         res.send(e+ "")
    }
}

const removeStore=async(req,res)=>{
    try{
     await connectModel.findByIdAndDelete(req.params.id)
     
 
     res.status(200).json({
         message:"Successfully deleted"
     })
    } catch(e){
        res.send(e+"")
    }
 }


module.exports={
    getStoreById,
    getAllUsers,
    addStore,
    updateStore,
    removeStore 
}