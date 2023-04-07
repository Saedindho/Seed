const User = require('../Usermodel/usermodel')
const tokenVerify = require('../authverification/authorizeToken')
require('../passport/passport')
const bcrypto = require('bcrypt')
const  express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
//const fs = require('fs')
var fs = require('fs');
const uuid  = require('uuid').v4
const multer = require('multer')
const path = require('path')
//About Us page
const aboutschema = require('../Usermodel/aboutUs')

//known files
const imagepath = require('../Usermodel/adminpost')
const smmrypath = require('../Usermodel/summery')

const router = express.Router()


router.post('/register',(req,res,next)=>{

    bcrypto.genSalt(10,(err,salt)=>{
        bcrypto.hash(req.body.password,salt,(err,hash)=>{

        
   
const user = new User()
    user.firstname = req.body.firstname
    user.lastname = req.body.lastname
    user.email = req.body.email
    user.password = hash

    user.save((err,user)=>{
        if(!err){
            return res.status(200).json({message:"this user is saved successfully"})
        }else{
            next(err)
            return res.status(201).json({err:"this user is not saved",err})
        }
    })
})

})
})

router.post('/login',(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err)
            return res.status(212).json({message:"error is occured",err})
        else if(user)
      return res.status(200).json({"token":user.generateJwt()})
        else
            return res.status(221).json({info,message:"in correct credential"})
        
    })(req,res,next)
})

const mystorage = multer.diskStorage({
    destination :(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename :(req,file,cb)=>{
    const ext = path.extname(file.originalname)
    const id = uuid()
    filePath =`images/${id}${ext}`
    cb(null,filePath)

    }
})
const imgstorage = multer({storage:mystorage})

router.post('/upload',imgstorage.single('file'),(req,res)=>{

const imgpost = new imagepath()
imgpost.title = req.body.title
imgpost.description = req.body.description
imgpost.filePath = req.file.filename

imgpost.save((err,doc)=>{
    if(!err){
        return res.status(200).json({message:"file is saved successfully",doc})
    }else{
        return res.status(210).json({message:"this file is not saved successfully"})
    }
})

})

/*
const smrrystorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        
    const ext =path.extname(file.originalname)
    const id = uuid()
      filePath =`summery/${id}${ext}`
      cb(null,filePath)
    }
})
const mysmrystorage = multer({storage:smrrystorage})
*/
router.post('/sumery',(req,res)=>{

    const smrypost = new smmrypath()

    smrypost.title = req.body.title
    smrypost.description= req.body.description
    //smrypost.filePath = req.file.filename

    smrypost.save((err,doc)=>{
  if(!err){
    return res.status(200).json({message:"this file is saved successfully",doc})
  }else{
    return res.status(210).json({message:"error is occured"})
  }
    })

})

// About us page

router.post('/about',(req,res)=>{
   const Abschema = new aboutschema()
   
   Abschema.title = req.body.title
   Abschema.aboutme = req.body.aboutme,
   Abschema.email = req.body.email,
   Abschema.phone = req.body.phone,
   Abschema.facebook = req.body.facebook,
   Abschema.twitter = req.body.twitter

   Abschema.save((err,about)=>{
    if(!err){
        return res.status(200).json({message:"this about us saved successfully",about})
    }else{
        return err
    }
   })

})

router.get('/imges',(req,res,next)=>{
    imagepath.find()
    .then((doc)=>{
       return res.status(200).json({status:"ok",doc})
    }).catch((err)=>{
       return next(err)
    })
})


router.get('/content',(req,res,next)=>{
    smmrypath.find()
    .then((doc)=>{
       return res.status(200).json({status:"ok",doc})
    }).catch((err)=>{
       return next(err)
    })
})

router.get('/aboutus',(req,res,next)=>{
    aboutschema.find()
    .then(about=>{
        return res.status(200).json({status:"ok",about})
    }).catch(err=>{
        return next(err)
    })
})

//delete items

router.delete('/deleteimg/:id',(req,res)=>{
    imagepath.findByIdAndRemove(req.params.id,(err,deleted)=>{
        if(err){return res.status(221).json({message:"this item not deleted",err})
    
    }else{
        fs.unlink('uploads/'+deleted.filePath,(err)=>{
            if(!err){
                return res.status(200).json({message:"this file is deleted successfully",deleted})
            }else{
                return err
            }
        })
    }
    })
})

router.delete('/deletecn/:id',(req,res)=>{
    smmrypath.findByIdAndRemove(req.params.id,(err,deleted)=>{
        if(!err){
            return res.status(200).json({message:"this file is deleted successfully",deleted})
        }else{
            return err
        }
    })
})
router.delete('/deleteabout/:id',(req,res)=>{
   aboutschema.findByIdAndRemove(req.params.id,(err,deleted)=>{
        if(!err){
            return res.status(200).json({message:"this file is deleted successfully",deleted})
        }else{
            return err
        }
    })
})
module.exports = router