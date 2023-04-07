
const bcrypto = require('bcrypt')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { scheduler } = require('timers/promises')
//const uniqueValidator = require('mongoose-unique-validator')
const schema = new mongoose.Schema({

    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minlength:5
    },
    role:{
        type:String,
        enum:{
            values:['regular','admin']
        },
        default:'regular'
    }
})



schema.path('email').validate(val=>{
    emailRexlex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 return emailRexlex.test(val)
},'Invalid email')

schema.methods.isValidpass = function(passwordhash){
return bcrypto.compareSync(passwordhash,this.password)
}

schema.methods.generateJwt = function(){
return jwt.sign({_id:this._id,role:this.role},
    
    "" + process.env.SECERET, 

{expiresIn:1300819380})
}

const myschema = mongoose.model('Seed',schema)

module.exports =myschema