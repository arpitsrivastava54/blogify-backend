const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connection successfull from database");
  } catch (error) {
    console.log("error aa gayi ==>",error);
  }
};

connection();
