const express = require('express');
// const cors = require('cors');
const app = express();
const PORT = 4000;

// app.use(cors());
app.use(express.json());

let courses=require('./data/db.json');

app.get("/api/courses",(_,res)=>{
    res.json(courses);
});

app.get("/api/courses/:id",(req,res)=>{
    const id = Number(req.params.id);
    const course = courses.find(c => c.id === id);
    if(!course){
        return res.status(404).json({message: "Course not found"});
    }
    res.json(course);
}
)

app.post("/api/courses",(req,res)=>{
    const {cname,duration}=req.body;
     const newCourse={
        id:courses.length? courses[courses.length-1].id + 1 : 1,
        cname,
        duration
     }
     courses.push(newCourse);
     res.status(201).json(courses);
});

app.put("/api/courses/:id",(req,res)=>{
    const id=Number(req.params.id);
    const {cname,duration}=req.body;
    let course=courses.find(c=>c.id===id);
    if(!course){
        return res.status(404).json({message:"Course not found"});
    }
    course.cname=cname;
    course.duration=duration;
    res.json(course);
});

app.delete("/api/courses/:id",(req,res)=>{
    const id=Number(req.params.id);
   courses=courses.filter(c=>c.id!==id);
    res.json(courses);
//    res.json({message:"Course deleted successfully"});
});


app.get("/",(_,res)=>{
    res.json("Welcome to the Course API");
});
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});