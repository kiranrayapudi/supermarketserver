let express= require("express");
let router = express.Router();
let grocerys = require("../supermarket/grocerys")


router.post("/",async (req,res)=>{
    let grocery = new grocerys(req.body);
    let result = await grocery.save();
    res.send(result)
})
router.get("/",async (req,res)=>{
   let result = await grocerys.find()
   if (result.length > 0) {
       res.send(result)
   }
   else {
       res.send({result:"No data found"})
   }

})
router.delete("/:_id",async (req,res)=>{
  
   let query = {_id: req.params._id}
   let result = await grocerys.deleteOne(query)
   res.send(result)
})
router.get("/:_id", async (req, res) => { 
   let query = {_id: req.params._id}
   let result = await grocerys.findOne(query)
   res.send(result)
})
router.put ("/:_id",async (req,res)=>{
   let query = {_id:req.params._id}
   let newvalue = {$set : req.body}
   let result = await grocerys.updateOne(query,newvalue)
   res.send(result)
});


module.exports = router