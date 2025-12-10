import React, { useState } from "react";
import Footer from "./Footer";
import './Own_todo.css'

const Own_todo = ({ item, handleCheck, handleDelete, handleAdd }) => {
  const [text, setText] = useState("");

  return (
    <div className="mc">
      <div>
        <input
          type="text"
          value={text}
          placeholder="Enter item"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            handleAdd(text);
            setText("");
          }}
        >
          Add Item
        </button>
      </div>
      
        <ul>
        {item.map((it) => {
          return (
            <li key={it.id} className="lc">
              <input
                type="checkbox"
                checked={it.fee}
                onChange={() => handleCheck(it.id)}
              />
              <label>{it.iname}</label>
              <button onClick={() => handleDelete(it.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      

      <Footer len={item.length} />
    </div>
  );
};

export default Own_todo;









// import React, { useState } from "react";
// import Footer from "./Footer";

// const Own_todo = ({ item, handleCheck, handleDelete, handleAdd }) => {
//   const [text, setText] = useState("");
//   return (
//     <div className="min-h-xl: min-w-3xl max-w-4xl m-auto p-4 ">
//       <div className="flex flex-wrap pb-2">
//         <input
//           type="text"
//           value={text}
//           placeholder="Enter item"
//           className="min-w-2xs  cursor-pointer border-2"
//           onChange={(e) => setText(e.target.value)}
//         />
//         <button
//           className="bg-blue-500 text-green-400 m-2 p-2 rounded-lg bg-black-400"
//           onClick={() => {
//             handleAdd(text);
//             setText("");
//           }}
//         >
//           Add Item
//         </button>
//       </div>
//       <ul className="flex justify-between flex-col">
//         {item.map((it) => {
//           return (
//             <li
//               key={it.id}
//               className="m-2 p-2 border-2 border-black-100 rounded-lg flex justify-between min-w-3xl scroll-mb-2 "          
//             >
//               <input
//                 type="checkbox"
//                 className="cursor-pointer"
//                 checked={it.fee}
//                 onChange={() => handleCheck(it.id)}
//               >
                
//               </input>
//               <label>{it.iname}</label>
//               <button onClick={() => handleDelete(it.id)}>Delete</button>
//             </li>
//           );
//         })}
//       </ul>
//       <Footer len={item.length} />
//     </div>
//   );
// };

// export default Own_todo;
