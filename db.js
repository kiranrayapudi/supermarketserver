const mongoose = require("mongoose");
const dburl = "mongodb+srv://kiran9966:0000@project1.ojuya.mongodb.net/?retryWrites=true&w=majority&appName=project1";


mongoose.connect(dburl)
.then(() => console.log("Connected to MongoDB..."))
.catch(err => console.error("Could not connect to MongoDB...", err));
