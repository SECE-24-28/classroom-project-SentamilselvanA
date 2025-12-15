import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const getCourses = () => API.get("/courses");
export const getCoursesByid=()=>API.get("/courses/${id}");

export const addCourses = (course) => API.post("/courses", course);

export const updateCourses = (id, course) =>
  API.put(`/courses/${id}`, course);

export const deleteCourses = (id) =>
  API.delete(`/courses/${id}`);

export default API;







// import axios from "axios";
// const API=axios.create({baseURL:"http://localhost:3500/api"})
// export const getcourses=()=>axios.get("/courses");
// export const addcourses=(course)=>axios.post("/courses", course);
// // export const addcourses={(course)=>axios.get("/courses",courses)}
// export const updatecourses=(id, course)=>
//     axios.put("courses", courseid);
// // const updatecourses=(id,course)=>axios.put("courses",courseid);
// export const deletecourses=(id)=>axios.delete("courses", id);
// export default API;