const express=require('express')
const app=express()
const {connectDB}=require('./config/connectDb')
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('dotenv').config()
const PORT=process.env.PORT

connectDB()

app.use('/api/store', require('./routes/storeRoute'))

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`)
})

