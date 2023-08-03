const express = require('express')
const app = express()
const User = require('./model/user')
const mongoose = require('mongoose')
const cors = require('cors')

//middlerware

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// connect to database
const  db_url='mongodb://localhost:27017/user'
mongoose.connect(db_url).then(()=>{
    console.log("connection established");
})

app.post('/login',(req,res)=>{
   User.findOne({email:req.body.email}).then((userData)=>{
      if(userData){
          if (req.body.password === userData.password) {
            res.send({message:'login sucessfull',status:200})
            
          } else {
            res.send({message:'please enter your valid password'})
          }
      }else{
         res.send({message:'User not found'})
      }
   })
})

app.post('/register',async(req,res)=>{
 User.findOne({email:req.body.email}).then((userData)=>{
   if (userData) {
    // error message
    res.send({message:'User Already exists'})

   } else {
    // Add the data
 let userData = new User({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:req.body.password
 })
 userData.save().then(()=>{
    res.send({message:'user registered sucessfully'})
 }).catch(()=>{
    res.send({message:'user registration failed. Try after sometime'})
 })

   }
 })

})

app.listen(4000,()=>{
console.log("server running in port 4000");
})