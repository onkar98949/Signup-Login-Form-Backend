const express = require("express");
const router = express.Router();
const gymMember = require('../model');
const bcrypt = require('bcryptjs')
const { body, validationResult } = require('express-validator');


router.get('/',(req,res) => {
    res.render("frontpage");
})

router.get('/home',(req,res) =>{
    res.render('Home');
});

router.get('/Signup',(req,res) =>{
    res.render('Signup');
});

router.get('/login',(req,res) =>{
    res.render('login');
});

router.post('/Signup' ,[
     body('email').isEmail().withMessage('Invalid email address')
    ] , async(req,res) => {
        const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors});
          }

      try {
        const hashedPassword =  bcrypt.hashSync(req.body.password);

         const newMember = new gymMember({
             name : req.body.name,
             email : req.body.email,
             gender : req.body.gender,
             password : hashedPassword

         })


         //const hashedPassword =  bcrypt.hashSync(password);
        // password: hashedPassword;
         const member= await newMember.save();
         console.log(member) ;
         res.render("home");
      } catch (error) {
         res.status(400).send(error);
      }
});


router.post('/login',async(req,res) =>{
    try {
        const email1 = req.body.email;
        const password1 = req.body.password;

        let foundUser = await gymMember.findOne({email: email1});
        const passwordcorrect = bcrypt.compareSync(password1,foundUser.password);
        if(passwordcorrect){
            res.render('home');
        }
        else{
            res.status(200).json({message :" Invalid login Details"})
        }
    } catch (err) {
        res.status(400).send(" Invalid Email")
    }
    
})

module.exports = router;