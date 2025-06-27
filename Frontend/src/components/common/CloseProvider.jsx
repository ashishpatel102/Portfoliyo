import { createContext, useState } from "react";

// 1. Context banaya
const CloseContext = createContext();


// 2. Provider component banaya
export const CloseProvider = ({ children }) => {
  const [state, setState] = useState(0); // You can change initial value as needed

  return (
    <CloseContext.Provider value={[state, setState ]}>
      {children}
    </CloseContext.Provider>
  );
};


export default CloseContext;
