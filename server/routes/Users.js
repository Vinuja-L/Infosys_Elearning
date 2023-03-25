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
            password: hash,
            role: role,
            
        });
        res.json("SUCCESS");
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
  
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "Wrong email and password combination" });
        return;
      }
  
      res.json("You logged in");
    });
  });
  
module.exports = router;