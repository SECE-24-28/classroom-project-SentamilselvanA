import { useState } from "react";
import Own_todo from "./Own_todo";
import Header from "./Header"
import Searchitem from "./Searchitem";

function Props() { 
  const [item,setItem] =useState([
        {id:1,iname:"Mobile",fee:true},
        {id:2,iname:"Watch",fee:false},
        {id:3,iname:"Charger",fee:true}
      ]);
      const [search, setSearch] = useState("");

      
      const handleDelete=(id)=>
      {
      const newItem=item.filter((ls)=>ls.id!=id)
      setItem(newItem)
      }
      const handleCheck=(id)=>
      {
         const newItem=item.map((ls)=>(ls.id===id)?({...ls,fee:!ls.fee}):(ls))
         setItem(newItem)
      }
      const handleAdd=(iname)=>
      {
        const newItem=[...item,{id:item.length+1,iname:iname,fee:false}]
        setItem(newItem)
      }
      const handleSearch = (text) => 
        {
           setSearch(text);
        }
    const filteredItems = item.filter((it)=>
      {
      return  it.iname.toLowerCase().includes(search.toLowerCase())
       }  );
      

      
      
      
      
      // const handleSearch=(se)=>
      // {
      //   const newItem=item.filter((it)=>
      //   {
      //     return it.iname.toLowerCase().includes(se.toLowerCase())
      //   })
      //   setItem(newItem)
      // }
  return (
    <div>
    <Header title={"Grocery List"}/> 
    <Searchitem handleSearch={handleSearch}/>
    <Own_todo  item={filteredItems} 
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                handleAdd={handleAdd}
                />  
                 
    </div>
  );
}
export default Props;






// import Todo from './Todo.JSX'
// import Header from './Header.jsx'
// import { useState } from 'react';
// function App() 
// {
//  const [list,setList] =useState([
//         {id:1,sname:"Vinoth",fee:true},
//         {id:2,sname:"Shiva",fee:false},
//         {id:3,sname:"Harish",fee:true}
//       ]);

//       const handleDelete=(id)=>
//       {
//       const newList=list.filter((ls)=>ls.id!=id)
//       setList(newList)
//       }
//       const handleCheck=(id)=>
//       {
//          const newList=list.map((ls)=>(ls.id===id)?({...ls,fee:!ls.fee}):(ls))
//          setList(newList)
//       }

//   return (
//     <>
//     <Header title={"Student List"}
//     dep={"CSE"} year={2025}></Header>
//       <h1>TODO APP</h1>
//       <hr />
      
//       <Todo list={list} 
//       handleCheck={handleCheck}
//       handleDelete={handleDelete}
//       />  
//      </>    
        
//   )
//  }
// export default App













