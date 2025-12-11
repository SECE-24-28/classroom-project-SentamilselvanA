// import { DataProvider } from "./DataContext";
// import One from "./One";
// import Three from "./Three";
// import Two from "./Two";
import "./App.css";
import Gallary from "./Gallary";
import About from "./About";
import Home from "./Home"; 
import Postpage from "./Postpage";

import { Route, Routes, Link } from "react-router-dom"; 
import Newpost from "./Newpost";
import Post from "./Post";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallary">Gallary</Link>
        </li>
        <li>
          <Link to="/postpage">Postpage</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/postpage" element={<Postpage />} >
                 <Route path="/postpage/newpost" element={<Newpost/>}/>  
                 <Route path="/postpage/:id" element={<Post/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;


// import { useState } from 'react'
// import './App.css'
// import AddStudent from './AddStudent'
// import SearchStudent from './SearchStudent'
// import Body from './Body'

// function App()
// {
//     const [stuList,setStuList]=useState([
//       {id:1,sname:"Jack",fee:true},
//       {id:2,sname:"Smith",fee:false},
//       {id:3,sname:"Victor",fee:true}
//     ])

//     const handleDelete=(id)=>
//     {
//       const newList=stuList.filter((stu)=>stu.id!==id)
//       setStuList(newList)
//     }
//     const handleChange=(id)=>
//     {
//       const newList=stuList.map((stu)=>(stu.id===id)?({...stu,fee:!stu.fee}):(stu))
//       setStuList(newList)
//     }
//    const addItem=(item)=>
//    {
//     const sz=stuList.length-1;
//      const nid=(stuList.length)?(stuList[sz].id+1):(1)
//      const newObj={id:nid,sname:item,fee:false}
//      const newList=[...stuList,newObj]
//      setStuList(newList)
//    }
//    const handleSubmit=(e)=>
//    {
//     e.preventDefault()
//     addItem(newstu)
//     setNewStu('')
//    }
//     const [newstu,setNewStu]=useState('')
//     const [search,setSearch]=useState('')
//   return (
//     <>
//        <h1>Students List</h1>
//        <AddStudent  newstu={newstu}
//                     setNewStu={setNewStu}
//                     handleSubmit={handleSubmit}
//        />
//        <SearchStudent search={search}
//                       setSearch={setSearch}
//        />

//        <Body stuList={stuList.filter((list)=>(list.sname).includes(search))}
//              handleChange={handleChange}
//              handleDelete={handleDelete}
//        />
//     </>
//   )
// }

// export default App


