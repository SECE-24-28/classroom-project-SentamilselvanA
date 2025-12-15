const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true }
});

module.exports = mongoose.model("mycourse", courseSchema);










// const mongose=require("mongose")
// const courseSchema=new mongose.Schema(
// {
//     title:{type:String,required:true},
//     duration:{type:String,required:true}
// });
// module.exxports=mongose.model("mycourse",courseSchema)


