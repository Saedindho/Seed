const jwt = require('jsonwebtoken')

module.exports.verifyToken = function(req,res,next){
    var token

    if('authorization' in req.headers)
    token = req.headers.authorization.split(' ')[1]
    if(!token){
        return res.status(201).send({auth:false,message:"no token found"})
    }else{
        jwt.verify(token,""+process.env.SECRET,(err,user)=>{
            
            if(err){
                return res.status(202).send({auth:false,message:"verify token is field"})
            }else{
                req._id = user._id
            }
        })
        next()
    }
}