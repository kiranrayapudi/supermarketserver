let express= require("express");
let router = express.Router();
let Meat = require("../supermarket/Products")



router.post("/",async (req,res)=>{
    let meat = new Meat(req.body);
let result = await meat.save();
res.send(result)
});
router.get("/",async (req,res)=>{
    let result = await Meat.find()
    if (result.length > 0) {
        res.send(result)
    }
    else {
        res.send({result:"No data found"})
    }
 
 });
 router.delete("/:_id",async (req,res)=>{
  
    let query = {_id: req.params._id}
    let result = await Meat.deleteOne(query)
    res.send(result)
 });
 router.get("/:_id", async (req, res) => { 
    let query = {_id:req.params._id}
    let result = await Meat.findOne(query)
    res.send(result)
 });
 router.put ("/:_id",async (req,res)=>{
    let query = {_id:req.params._id}
    let newvalue = {$set : req.body}
    let result = await Meat.updateOne(query,newvalue)
    res.send(result)
 })


module.exports = router