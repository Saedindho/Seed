const mongoose = require('mongoose')

const about = mongoose.Schema({


    title:{
  type:String
    },
    aboutme:{
        type:String
    },
    email:{
     type:String
    },
    phone:{
        type:Number
    },
    facebook:{
        type:String,

    },
    twitter:{
        type:String
    }
})

const myschema = mongoose.model('about',about)

module.exports = myschema