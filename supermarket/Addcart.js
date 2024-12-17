const mongoose = require("mongoose");

const addcartschema = new mongoose.Schema({
  id: String,
  productId: String,
  product: Object,
  quantity: Number,
  
});
module.exports = mongoose.model("cart", addcartschema);
