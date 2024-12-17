let express= require("express");
let router = express.Router();
let eggs = require("../supermarket/Eggs")



router.post("/",async (req,res)=>{
    let egg = new eggs(req.body);
let result = await egg.save();
res.send(result)
});
router.get("/",async (req,res)=>{
    let result = await eggs.find()
    if (result.length > 0) {
        res.send(result)
    }
    else {
        res.send({result:"No data found"})
    }
 
 });
 router.delete("/:_id",async (req,res)=>{
  
    let query = {_id: req.params._id}
    let result = await eggs.deleteOne(query)
    res.send(result)
 });
 router.get("/:_id", async (req, res) => { 
    let query = {_id:req.params._id}
    let result = await eggs.findOne(query)
    res.send(result)
 });
 router.put ("/:_id",async (req,res)=>{
    let query = {_id:req.params._id}
    let newvalue = {$set : req.body}
    let result = await eggs.updateOne(query,newvalue)
    res.send(result)
 })


module.exports = router