import { createContext, useState } from "react";

const CloseContext = createContext();

function CloseProvider({ children }) {
  const [close, setClose] = useState(true);
  return (
    <CloseContext.Provider value={{ close, setClose }}>
      {children}
    </CloseContext.Provider>
  );
}

export { CloseContext, CloseProvider };
