let express= require("express");
let router = express.Router();
let carts = require("../supermarket/Cart")



router.get("/",async (req,res)=>{
    let result = await carts.find()
    
        res.send(result)
  
  })
  router.delete("/:_id",async (req,res)=>{
  
    let query = {_id: req.params._id}
    let result = await carts.deleteOne(query)
    res.send(result)
 })
 router.get("/:_id", async (req, res) => { 
    let query = {_id: req.params._id}
    let result = await carts.findOne(query)
    res.send(result)
 })
 router.put ("/:_id",async (req,res)=>{
    let query = {_id:req.params._id}
    let newvalue = {$set : req.body}
    let result = await carts.updateOne(query,newvalue)
    res.send(result)
 });
 
 
  


module.exports = router