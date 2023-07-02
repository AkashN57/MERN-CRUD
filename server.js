const express = require('express')
const app = express()

const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect("").catch(err=>console.log(err));

const blogSchema = mongoose.Schema({
    title:String,
    description:String
})

const Post = mongoose.model('blogs',blogSchema)

app.get('/',async(req,res)=>{
  await res.send("Express is here")
})
app.post('/create',async(req,res)=>{

 await Post.create({
        title:req.body.title,
        description:req.body.description
    }).then(res=>console.log(res)).catch((err)=>console.log(err))
    
})

app.get('/posts',async(req,res)=>{
   await Post.find().then(items=>res.json(items)).catch(err=>console.log(err))
})

app.delete('/delete/:id',async(req,res)=>{
    await Post.findByIdAndDelete({_id:req.params.id})
    .then(doc => console.log(doc)).catch(err=>console.log(err))
})




const PORT = 3001

app.listen(PORT,()=>{
    console.log("Server is running on 3001")
})