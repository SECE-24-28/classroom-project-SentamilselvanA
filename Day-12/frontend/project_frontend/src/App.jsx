import { useState } from 'react'
import './App.css'
import { getCourses, addCourses,deleteCourses,updateCourses,getCoursesByid } from './api/Courseapi'
import { useEffect } from 'react'
function App() {
    const [courses,setCourses]=useState([])
    const[title,setTitle]=useState()
    const[duration,setDuration]=useState()
    const[id,setId]=useState()

    const fetchCourses = async () => {
        const response = await getCourses();
        setCourses(response.data);
      };
      const handleAddCourse = async () => {
        const response = await addCourses({ title, duration });
        setCourses([...courses, response.data]);
      };
      const handleDeleteCourse =async ()=>{
        const response=await deleteCourses(id)
        setCourses(courses.fillter((course)=>course.id!==id))
      }
      
      const handleUpdateCourse =async ()=>{
        const response=await updateCourses(id,{title,duration})
      }
      const handlegetcourse=async ()=>{
        const response=await getCoursesByid(id)
      }
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <>
      <form>
        <label>Course Title</label>
        <input type="text" placeholder='Enter Course Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <br/>
        <label>Course Duration</label>
        <input type="text" placeholder='Enter Course Duration' 
         value={duration} onChange={(e)=>setDuration(e.target.value)}/>
        <br/>
        <button type="submit" onClick={()=>handleAddCourse()}>Add Course</button>
        <br/>

        <input type="text" placeholder='Enter Course Id' value={id} onChange={(e)=>setId(e.target.value)}/>
        <br/>
        <button type='submit' onClick={()=>handlegetcourse()}>Getcourse</button>
        < button type='submit' onClick={()=>handleDeleteCourse()}>Delete</button>
        <button type='submit' onClick={()=>handleUpdateCourse()}>Update</button>
      </form>
      
        <ul>
          {
          courses.map((course) => 
          <li key={course.id}>{course.title} {course.duration}</li>)
           }
          </ul>
        
    </>
  )
}

export default App
