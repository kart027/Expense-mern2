const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const passport = require("passport")


router.post("/register",async(req,res)=>{
    const { email, password, firstName, lastName } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(406).json({ message: "User already exists." });
    return;
  }

  // hash the password
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hashedPassword = await bcrypt.hashSync(password, salt);

  const user = await User({
    email,
    password: hashedPassword,
    firstName,
    lastName
   
  });
  await user.save();
  res.status(201).json({ message: "user is created" });
});

router.post("/login",async(req,res)=>{
    const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(406).json({ message: "credentials not found" });
    return;
  }

  const matched = await bcrypt.compare(password, user.password);
  if (!matched) {
    res.status(406).json({ message: "credentials not found" });
    return;
  }

  // create jwt token
  const payload = {
    username: email,
    _id: user._id,
  };
  const token = jwt.sign(payload, "some secret");
  res.json({ message: "succesfully logged in.", token, user });
})

router.get("/getuser",passport.authenticate("jwt", { session: false }),async (req,res)=>{

  res.json({user:req.user})

})

module.exports = router;
