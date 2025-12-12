import { createContext, useEffect, useState } from "react";
import api from './api/Post'
const DataContext = createContext();
export const DataProvider =({children})=>{
    
  const[posts,setPosts]=useState([])
  const[search,Setsearch]=useState([])
  const[searchResult,setSearchResult]=useState([])
  const[title,setTitle]=useState('')
  const[body,setBody]=useState('')
  //fetching data from json server
  //load only once 
  useEffect(()=>{

    const fetchData=async()=>
    {
      const res=await api.get("/feedback");
      // console.log(res.data)
      setPosts(res.data)
    }

    fetchData()
   },[])
   useEffect(()=>{
    const filteredResults=posts.filter((post)=>(post.title).includes(search));
    // const filtered=posts.filter((post)=>(post.title).toLowerCase().includes(search.toLowerCase()));
    setSearchResult(filteredResults);
   },[posts,search])

   const handleDelete=(id)=>{
    const newList=posts.filter((post)=>post.id!==id);
    setPosts(newList);
   }

   const handleSubmit=async(e)=>{
    e.preventDefault();
    const id=(posts.length )? (Number(posts[posts.length -1].id) +1 ):(1);
    const datetime=new Date().toLocaleString();
    const newPost={id,title,datetime,body};
    api.post('/feedback',newPost);
    const newList=[...posts,newPost];
    setPosts(newList);
    setTitle('');
    setBody('');
   }
    const[num,setNum]=useState(100);
    return(
        <DataContext.Provider value={{num,setNum,posts,search,Setsearch,searchResult,handleDelete,title,setTitle,body,setBody,handleSubmit}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;