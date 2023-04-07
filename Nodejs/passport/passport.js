const { deserializeUser } = require('passport')
const passport = require('passport')
const localstrategy = require('passport-local').Strategy
const User = require('../Usermodel/usermodel')

passport.use('local',new localstrategy({
    usernameField:"email",
    passwordField:"password"
},

function(email,password,done){
User.findOne({email:email},(err,user)=>{
    if(err){ return done(err)}
    if(!user) {return done(null,false,{message:"email is not valid"})}
    if(!user.isValidpass(password)){ return done(null,false,{message:"password is not valid"}) }

    else{
        return done(null,user)
    }
})
}
))

passport.serializeUser(function(user,done){
    done(null,user._id)
})
passport.deserializeUser(function(userId,done){
    User.findOne(userId)
    .then(user=>{
        if(user){done(null,user)}

    }).catch(err=>{
        done(err)
    })
})