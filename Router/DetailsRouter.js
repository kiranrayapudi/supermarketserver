let express= require("express");
let router = express.Router();
let details = require("../supermarket/Details")

router.get("/",async (req,res)=>{
    let result = await details.find()
    if (result.length > 0) {
        res.send(result)
    }
    else {
        res.send({result:"No data found"})
    }
 
 });;

 module.exports = router;