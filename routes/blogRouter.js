const express = require("express");
const router = express.Router();
const {createNewBlog, getAllBlogs,getBlogById,getAllUsersBlogByUserId,updateBlog,deleteBlog} = require("../controllers/blogControllers");





router.get("/allblogs",getAllBlogs);
router.get("/:id",getBlogById)
router.post("/createblog/:id",createNewBlog);
router.post("/updateblog/:blogid",updateBlog);
router.get("/allusersblogs/:userid",getAllUsersBlogByUserId)
router.delete("/deleteblog/:blogid",deleteBlog)
module.exports = router;
