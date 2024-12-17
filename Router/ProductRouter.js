
let express= require("express");
let router = express.Router();
let products = require("../supermarket/Products")




router.post("/",async (req,res)=>{
    let product = new products(req.body);
    let result = await product.save();
    res.send(result)
})
router.get("/",async (req,res)=>{
    let result = await products.find()
    if (result.length > 0) {
        res.send(result)
    }
    else {
        res.send({result:"No data found"})
    }
 
 })

 router.delete("/:_id",async (req,res)=>{
   
    let query = {_id: req.params._id}
    let result = await products.deleteOne(query)
    res.send(result)
 })
 router.get("/:_id", async (req, res) => { 
    let query = {_id: req.params._id}
    let result = await products.findOne(query)
    res.send(result)
 })
 router.put ("/:_id",async (req,res)=>{
    let query = {_id:req.params._id}
    let newvalue = {$set : req.body}
    let result = await products.updateOne(query,newvalue)
    res.send(result)
 });
 





module.exports = router;