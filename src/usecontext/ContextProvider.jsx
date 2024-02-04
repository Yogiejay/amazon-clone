import React, { useContext , useState} from 'react'
import Context from "./Context.js";
function ContextProvider({children}) {
    const [totalAmount , settotalAmount ] = useState(0);
    const [totalItems , settotalItems] = useState(0);
    const [shoppingBasketArray , setshoppingBasketArray] = useState([]);
    const [loginArray , setloginArray] = useState([["yogesh","yadav"],["geetesh","yadav"]]);
    const [username , setusername] = useState();
    const [password , setpassword] = useState();
    const [registerArray , setregisterArray] = useState([]);
  return (
    <Context.Provider value={{totalAmount,settotalAmount,totalItems,settotalItems,shoppingBasketArray , setshoppingBasketArray,loginArray,setloginArray,username , setusername, password , setpassword,registerArray,setregisterArray}}>
    {children}
    </Context.Provider>
  )
}

export default ContextProvider
