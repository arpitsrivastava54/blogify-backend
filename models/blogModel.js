const mongoose = require ("mongoose");

const blogSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    imagePath:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
   username:{
    type:String,
    required:true
   }

})

module.exports = mongoose.model("blogs",blogSchema);