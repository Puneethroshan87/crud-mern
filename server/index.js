const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/crud")

app.post('/create',(req,res)=>{
     UserModel.create(req.body)
     .then(users=>res.json(users))
     .catch(err=>res.js(err))
})


app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//updating
app.get('/getUser/:id',(req,res)=>{
    const id =req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.put('/update/:id',(req,res)=>{
    const id =req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {
        name:req.body.name,
          email:req.body.email , 
          age:req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3005,()=>{
    console.log("server is runing  on port 3005")

})