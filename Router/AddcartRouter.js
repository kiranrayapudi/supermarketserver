
let express= require("express");
let router = express.Router();
let cart = require("../supermarket/Addcart")



router.post("/",async (req,res)=>{
    let add = new cart(req.body);
    let result = await add.save();
    res.send(result)
})
router.get("/",async (req,res)=>{
    let result = await cart.find()
    if (result.length > 0) {
        res.send(result)
    }
    else {
        res.send({result:"No data found"})
    }
 
 })

 router.delete("/:_id",async (req,res)=>{
   
    let query = {_id: req.params._id}
    let result = await cart.deleteOne(query)
    res.send(result)
 })
 router.get("/:_id", async (req, res) => { 
    let query = {_id: req.params._id}
    let result = await cart.findOne(query)
    res.send(result)
 })
 router.put ("/:_id",async (req,res)=>{
    let query = {_id:req.params._id}
    let newvalue = {$set : req.body}
    let result = await cart.updateOne(query,newvalue)
    res.send(result)
 });
 




module.exports = router;