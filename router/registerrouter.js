const bcrypt = require("bcrypt");
const express = require("express");
const User = require ('../models/usermodel')
const router = express.Router();

router.use(express.urlencoded())
router.use(express.json())


//signing up route
router.post("/register", async (req, res) => {
    const body = req.body;
    console.log(req.body)
    

    if (!( body.membername && body.password && body.email)) {
      return res.status(400).send({ error: "Data not formatted properly" });
    }

     // creating a new mongoose doc from user data
     const user = new User({
        membername: req.body.membername,
        password: req.body.password,
        email: req.body.email
    })
     // generate salt to hash password
     const salt = await bcrypt.genSalt(10);
     // now we set user password to hashed password
     user.password = await bcrypt.hash(user.password, salt);
    user.save()
    .then((result) => {
    res.send(result)
    })
    .catch((err) =>{
    console.log(err);
    })
   });

    module.exports = router;