const express = require("express");
const router = express.Router();
const Transcation = require("../models/transcationSchema")
const passport = require("passport")

router.post("/transcation",  passport.authenticate("jwt", { session: false }),async (req,res)=>{
    const {amount,description,date} = req.body;

const s = new Transcation({
    amount,
    description,date
})

await s.save()
res.json({mesage:"sucess"})



})
router.get("/getranscation", passport.authenticate("jwt", { session: false }),async (req,res)=>{
const f = await Transcation.find({}).sort({createdAt:-1});
res.json({data:f})
})

router.delete('/transcation/:id', passport.authenticate("jwt", { session: false }),async(req,res)=>{
    await Transcation.findOneAndDelete({_id:req.params.id});
    res.json({message:"sucess"});
})
router.patch('/transcation/:id', passport.authenticate("jwt", { session: false }),async(req,res)=>{
    await Transcation.updateOne({_id:req.params.id},{$set:req.body});
    res.json({message:"sucess"});
})

module.exports = router

