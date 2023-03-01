const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors  = require('cors')
const express = require('express')
const passport = require('passport')
const {authRole} = require('./authverification/roles')
const routeAPI = require('../Nodejs/router/route')
                 require('./passport/passport')
  const morgan = require('morgan')               

mongoose.connect('mongodb://localhost:27017/Seed',(err)=>{
    if(!err){
        console.log("DB is connected sucessfully")
    }else{
        console.log("error is occured",err)
    }
})


const app = express()
const PORT = process.env.PORT || 3000
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())
app.use(morgan('dev'))
app.use(passport.initialize())


//folder medalware
app.use(express.static('uploads'))
app.use(express.static('images'))


app.use('/api',routeAPI)

app.listen(PORT,(err)=>{
    if(!err){
        console.log("server is connected secessfully with this port "+PORT)
    }else{
        console.log("error is occured",err)
    }
})
