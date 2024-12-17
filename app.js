require('./db');
let express= require("express");
const proRouter = require("./Router/ProductRouter")
const addRouter = require("./Router/AddcartRouter")
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
 
app.use("/Products",proRouter)
app.use ("/cart",addRouter)
app.listen(4000,()=>console.log("api connected"))