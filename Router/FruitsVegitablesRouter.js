let express= require("express");
let router = express.Router();
let fruitsvegitables = require("../supermarket/FruitsVegitables")
let details = require("../supermarket/Details")


router.post("/", async (req, res) => {
   
        let fruitsvegitable = new fruitsvegitables(req.body);
        let result = await fruitsvegitable.save();
        res.send(result);
});
router.get("/",async (req,res)=>{
    let result = await fruitsvegitables.find()
    if (result.length > 0) {
        res.send(result)
    }
    else {
        res.send({result:"No data found"})
    }
 
 });
 router.delete("/:_id",async (req,res)=>{
  
    let query = {_id: req.params._id}
    let result = await fruitsvegitables.deleteOne(query)
    res.send(result)
 });
 router.get("/:_id", async (req, res) => { 
    let query = {_id:req.params._id}
    let result = await fruitsvegitables.findOne(query)
    res.send(result)
 });
 router.put ("/:_id",async (req,res)=>{
    let query = {_id:req.params._id}
    let newvalue = {$set : req.body}
    let result = await fruitsvegitables.updateOne(query,newvalue)
    res.send(result)
 });

module.exports = router