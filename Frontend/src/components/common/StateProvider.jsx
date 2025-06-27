import { createContext, useState } from "react";

// 1. Context banaya
const StateContext = createContext();


// 2. Provider component banaya
export const StateProvider = ({ children }) => {
  const [state, setState] = useState(1); 
  const [video, setVideo] = useState(0); 

  return (
    <StateContext.Provider value={[state, setState ,video, setVideo]}>
      {children}
    </StateContext.Provider>
  );
};


export default StateContext;
