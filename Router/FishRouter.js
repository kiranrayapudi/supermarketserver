let express= require("express");
let router = express.Router();
let fishs = require("../supermarket/Fish")



router.post("/",async (req,res)=>{
    let fish = new fishs(req.body);
let result = await fish.save();
res.send(result)
});
router.get("/",async (req,res)=>{
    let result = await fishs.find()
    if (result.length > 0) {
        res.send(result)
    }
    else {
        res.send({result:"No data found"})
    }
 
 });
 router.delete("/:_id",async (req,res)=>{
  
    let query = {_id: req.params._id}
    let result = await fishs.deleteOne(query)
    res.send(result)
 });
 router.get("/:_id", async (req, res) => { 
    let query = {_id:req.params._id}
    let result = await fishs.findOne(query)
    res.send(result)
 });
 router.put ("/:_id",async (req,res)=>{
    let query = {_id:req.params._id}
    let newvalue = {$set : req.body}
    let result = await fishs.updateOne(query,newvalue)
    res.send(result)
 })


module.exports = router