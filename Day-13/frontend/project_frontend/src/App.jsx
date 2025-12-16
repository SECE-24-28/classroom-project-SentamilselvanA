import { useState } from 'react'
import './App.css'
import { getCourses, addCourses,deleteCourses,updateCourses,getCoursesByid } from './api/Courseapi'
import { useEffect } from 'react'
function App() {
    const [courses,setCourses]=useState([])
    const[title,setTitle]=useState()
    const[duration,setDuration]=useState()
    const[id,setId]=useState()
    const[editid,setEditid]=useState()

    const fetchCourses = async () => {
        const response = await getCourses();
        setCourses(response.data);
      };
      const handleAddCourse = async () => {
        const response = await addCourses({ title, duration });
        setCourses([...courses, response.data]);
      };
      // const handleDeleteCourse =async ()=>{
      //   const response=await deleteCourses(id)
      //   setCourses(courses.fillter((course)=>course.id!==id))
      // }
      
      // const handleUpdateCourse =async ()=>{
      //   const response=await updateCourses(id,{title,duration})
      // }
      const handledelete=async(id)=>{
        await deleteCourses(id)
        fetchCourses();
        alert("deleted");
      }
      const handlegetcourse=async ()=>{
        const response=await getCoursesByid(id)
      }
      const handleEdit=(course)=>{
               setTitle(course.title)
               setDuration(course.duration)
               setEditid(course._id)
      }

      const update=async()=>{
        await updateCourses(editid,{title,duration})
        setTitle("")
        setDuration("")
        setEditid("")
        await fetchCourses();
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
        
        <button type='button' onClick={()=>update()}>Update</button>
      </form>
      
        <ul>
          {
          courses.map((course) => 
          <li key={course._id}>{course.title} {course.duration}
          < button onClick={()=>handledelete(course._id)}>Delete</button>
          < button  onClick={()=>handleEdit(course)}>Click</button></li>
          
        )
           }
          </ul>
        
    </>
  )
}

export default App
