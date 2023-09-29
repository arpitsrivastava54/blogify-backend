const Blog = require("../models/blogModel");

const createNewBlog = async (req, res) => {
  const { title, desc,imagePath ,username } = req.body;
  const userId = req.params.id;

  try {
    const newBlog = await new Blog({
      userId,
      title,
      desc,
      imagePath,
      username
    });
    await newBlog.save();
    res.status(200).json(newBlog);
  } catch (error) {
    res.status(404).json({ error, msg: "blog create nahi hua hai" });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {}
};

const getBlogById = async (req, res) => {
  const blogid = req.params.id;
  try {
    const blog = await Blog.find({ _id: blogid });
    res.status(200).json(blog);
  } catch (error) {}
};

const getAllUsersBlogByUserId = async (req, res) => {
  const userId = req.params.userid;

  try {
    const allBlogs = await Blog.find({ userId });
    res.status(200).json(allBlogs);
  } catch (error) {
    res.status(404).json("error aa gayi", error);
  }
};

const updateBlog = async (req, res) => {
  const blogid = req.params.blogid;
  const { title, desc,imagePath } = req.body;

  try {
    const updateBlog = await Blog.findByIdAndUpdate(
      { _id: blogid },
      {
        $set: {
          title,
          desc,
          imagePath,
        },
      }
    );
    res.status(200).json("blog update succesfully.")
  } catch (error) {
    res.status(404).json({msg:"blog updation failed",error});
  }
};


const deleteBlog = async(req,res) =>{
  const blogid = req.params.blogid;;
  try {
    await Blog.findByIdAndDelete({_id:blogid})
    res.status(200).json("blog delete succesfully")
  } catch (error) {
     res.status(404).json({msg:"blog deletion failed ",error}) 
  } 
}




module.exports = {
  createNewBlog,
  getAllBlogs,
  getBlogById,
  getAllUsersBlogByUserId,
  updateBlog,
  deleteBlog,
};
