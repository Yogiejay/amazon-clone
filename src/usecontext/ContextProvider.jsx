import React, { useContext , useState} from 'react'
import Context from "./Context.js";
function ContextProvider({children}) {
    const [totalAmount , settotalAmount ] = useState(0);
    const [totalItems , settotalItems] = useState(0);
  return (
    <Context.Provider value={{totalAmount,settotalAmount,totalItems,settotalItems}}>
    {children}
    </Context.Provider>
  )
}

export default ContextProvider
