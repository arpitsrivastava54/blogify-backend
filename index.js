const dotenv = require("dotenv");
dotenv.config();
require ("./connection");

const express = require ("express");
const app = express();
const cors = require("cors");
const port = 4500;
const userRouter = require("./routes/userRouter")
const blogRouter = require("./routes/blogRouter")



app.use(express.json());
app.use(cors());







app.use("/api/user",userRouter);
app.use("/api/blog",blogRouter);






app.listen(port , ()=>{console.log("server running at : ",port)});