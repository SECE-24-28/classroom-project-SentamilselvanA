const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mycourse")
  .then(() => {
    console.log("DB connected ");
  })
  .catch((err) => {
    console.log(err);
  });
const  mycourse=require("./model/coursemodel")
//get the enire data from mycourses
app.get("/api/courses", async(req, res) => {
    try{
 const courses=await mycourse.find()
    res.json(courses)
}
catch(err){
    res.status(500).json({message:err.message})
}
});
//for insert the course details into mycourses
app.post("/api/courses", async(req, res) => {
    try{
        const {title,duration}=req.body
        const newcourse=new mycourse({title,duration})
        await newcourse.save()
        res.status(201).json(newcourse)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
});
//get the particular id information from mycourses
app.get("/api/courses/:id",async(req,res)=>{
    try{
        const course=await mycourse.findById(req.parms.id);
        return res.json(course)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
//update the id deatails
app.put("/api/courses/:id",async(req,res)=>{
        try{
            const {title,duration}=req.body
            const uc=await mycourse.findByIdAndUpdate(req.params.id,{title,duration},{new:true})
            return res.json(uc)
        }
        catch(err){
            res.status(500).json({message:err.message})
        }
    }
)
//delete the information from the particular id 
app.delete("/api/courses/:id",async(req, res)=>{
    try{
        await mycourse.findByIdAndDelete(req.params.id)
        res.json({message:"course deleted"})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})









app.listen(port, () => 
{
  console.log(`Server running on http://localhost:${port}`);
});









// const express=require("express")
// const course=require("cors")
// const mongose=require("mongoose")
// const app=express()
// const port=4000

// app.use(cors())
// app.use(express.join())

// mongose.course("mongodb://localhost:2707/mycourse").then(()=>{
//     console.log("db connected")
// }).catch((err)=>{
//     return console.log(err)
// })
