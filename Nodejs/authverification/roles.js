const User = require('../Usermodel/usermodel')
const bcrypt = require('bcrypt')

module.exports.checkRole =(req,res,next)=>{

     User.findOne({role:"admin"},(err,admin)=>{
        if(err){return err}
        if(admin){
            return res.json({message:"this admin is already exist"})
        }else{
            password = 'Admin@2023'
           bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt,(err,hash)=>{
                User.create({
                    firstname:"mohamed",
                    lastname:"seed",
                    email:"seed@gmail.com",
                    password:hash,
                    role:"admin"

                },
                (err,user)=>{
                    if(err) throw err
                    
                    next()
                }
                )
            })
           })
        }
     })

}