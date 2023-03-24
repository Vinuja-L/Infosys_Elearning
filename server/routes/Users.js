const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const app = express();

router.post("/", async (req, res) => {
   
    const {firstname,lastname,email,role,password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            firstname:firstname,
            lastname:lastname,
            email: email,
            role: role,
            password: hash,
        });
        res.json("SUCCESS");
    });
});

router.post('/login',async(req,res) =>{
    const {email,password} =req.body;

    const user =await Users.findOne({where:{email:email}});

    if(!user) res.json({error:"User Does not exist"});
    
    bcrypt.compare(password,user.password).then ((match) =>{
        if(!match) res.json({error:"Wrong username and password combination"});

        res.json("You logged in");
    });

});
module.exports = router;