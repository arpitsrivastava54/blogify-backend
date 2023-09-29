const User = require("../models/userModel");

const getAlluserData = async (req, res) => {
  const users = await User.find({});

  if(users.length === 0) return res.status(400).send({msg:"no user present"});
  res.status(200).json({users});
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await new User({username,email,password});
    await user.save();
    res.status(200).json("OK");
  } catch (error) {
    res.status(406).json({msg:"registration failed..",error});
  }
};


const loginUser = async(req,res)=>{
  const {email,password} = req.body;
  const user = await User.findOne({email:email});

  if(!user) return res.status(404).json("user name or password is incorrect");

  if(user.password === password){
    res.status(200).json({username:user.username,userId:user._id});
  }else{
    res.status(500).json("password not matched..")
  }
}



module.exports = {
  getAlluserData,
  registerUser,
  loginUser,
};
