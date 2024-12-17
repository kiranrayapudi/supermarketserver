let express= require("express");
let router = express.Router();
let contactdetails= require("../supermarket/Contactdetails")

router.post("/",async (req,res)=>{
    let contact = new contactdetails(req.body);
    let result = await contact.save();
    res.send(result)
})

router.get("/",async (req,res)=>{
   let result = await contactdetails.find()
   
       res.send(result)
 
})
router.delete("/:_id",async (req,res)=>{
  
   let query = {_id: req.params._id}
   let result = await contactdetails.deleteOne(query)
   res.send(result)
})



module.exports = router