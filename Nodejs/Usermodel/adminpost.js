const mongoose = require('mongoose')

const thSchema = mongoose.Schema({

    title:{
        type:String,

    },
    description:{
        type:String
    },
    filePath:{
        type:String
    }

},
{
    timestamps:true
})

const Sschema = mongoose.model('adminpost',thSchema)
module.exports = Sschema

