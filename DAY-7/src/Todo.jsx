// import { useState } from 'react'
import Footer from "./Footer";

function Todo({ list, handleCheck, handleDelete }) {
  return (
    <>
      <h1>Students List</h1>
      <hr />
      <input type="text" placeholder="Enter task" />
      <ul>
        {list.map((ls) => {
          return (
            <li key={ls.id}>
              <input
                type="checkbox"
                checked={ls.fee}
                onChange={() => handleCheck(ls.id)}
              />
              <label>{ls.sname}</label>
              <button onClick={() => handleDelete(ls.id)}>Delete</button>
            </li>
          );
        })}
      </ul>

      <br />
      <br />

      <Footer len={list.len} />
    </>
  );
}

export default Todo;
