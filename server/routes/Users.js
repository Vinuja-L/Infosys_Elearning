const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const app = express();
const {sign}=require ("jsonwebtoken");

router.post("/", async (req, res) => {
    const {firstname,lastname,email,role,password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            firstname:firstname,
            lastname:lastname,
            email: email,
            password: hash,
            role: role,

        }).then(()=>{
          res.json("SUCCESS");
        })
        .catch((err) =>{
          if(err){
            res.status(400).json({error:err});
          }
        })       
    });
});
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email: email } });
  
    if (!user) {
      res.json({ error: "User does not exist" });
      return;
    }
    if (!user.password) {
      res.json({ error: "Password not set for user" });
      return;
    }
    bcrypt.compare(password, user.password).then(async(match) => {
      if (!match) {
        res.json({ error: "Wrong email and password combination" });
        return;
      }
      const accessToken =sign (
      {email:user.email,id:user.id},
        "importantsecret"
      );
      res.json(accessToken);
    });
  }); 

module.exports = router;