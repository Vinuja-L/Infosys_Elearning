const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const app = express();

// Add middleware to parse incoming JSON payloads
app.use(express.json());

router.post("/", async (req, res) => {
    console.log(req.body); 
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

router.post('/login',async(req,res) =>{})
module.exports = router;