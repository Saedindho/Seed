
const mongoose = require('mongoose')



const mschema = mongoose.Schema({

    title:{
        type:String
    },
    description:{
        type:String
    },
   
},

{
    timestamps:true
})

const myshema = mongoose.model('summery',mschema)

module.exports = myshema