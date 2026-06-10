
const mongoose =
require("mongoose");

const journalSchema =
new mongoose.Schema({

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
  },

  title:{
    type:String,
    required:true,
  },

  emotion:{
    type:String,
    required:true,
  },

  content:{
    type:String,
    required:true,
  },

  tags:[String],

},{
  timestamps:true,
});

module.exports =
mongoose.model(

  "Journal",

  journalSchema

);

