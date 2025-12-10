import React, { createContext, useState } from "react";
const Datacontext = createContext();

export const DataProvider = ({ children }) => {

  const [name, SetName] = useState("Shairam");
  const [age, SetAge] = useState(100);

  const City = () => 
  {
    return "VellaKovil";
  };

  return (
    <Datacontext.Provider value={{ name, SetName, age, SetAge, City }}>
      {children}
    </Datacontext.Provider>
  );
};

export default Datacontext;
