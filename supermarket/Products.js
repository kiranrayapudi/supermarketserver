const mongoose = require("mongoose")

const productschema= new mongoose.Schema({
    company :String,
    category:String,
    product:String,
    image: String,
    normalprice:Number,
    price:Number,
    description:String,
    offer:Number,
    kg:String,
    id: String
})
module.exports = mongoose.model("products",productschema)