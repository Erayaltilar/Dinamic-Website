const bcrypt = require("bcrypt");
const express = require("express");
const User = require ('../models/usermodel')
const router = express.Router();


   // login route
  router.post("/login", async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ membername: body.membername });
    if (user) {
      // check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {
        res.status(200).json({ message: "Valid password" });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
  });

  module.exports = router;