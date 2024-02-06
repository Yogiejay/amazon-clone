import React, { useContext, useState } from 'react'
import Context from "../usecontext/Context";
import "./Forgotpassword.css";
function Forgotpassword() {
    const {/*username , setusername, password , setpassword,*/registerArray,setregisterArray} = useContext(Context);
    const [Username , setUsername ]  = useState("");
    const [Password , setPassword] = useState("");
    const [Repassword , setRepassword] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        let flag = false;
        const UpdateRegisterArray = registerArray.map((element)=>{
                if(element.username === Username){
                    element.password =  Password;
                    flag = true;
                    alert(`password has been update for username : ${Username}`);
                    // return 
                }
                return element
        });
        if (!flag){
            alert("pleae provide valid username")
        }
        setregisterArray( UpdateRegisterArray);
    };


  return (
    <div className='forgotpassword'>
        <form className='forgotpasswordForm'>
        <div className="forgotpass__heading">
            Forgot Password
        </div>
        <div className="formGroup">
            <label>Username : </label>
            <input type="text" value={Username} onChange={(e)=>{setUsername(e.target.value)}}/></div>
        <div className="formGroup">
            <label>Password : </label>
            <input type="text" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/></div>
        <div className="formGroup">
            <label>Retype Password : </label>
            <input type="text" value={Repassword} onChange={(e)=>{setRepassword(e.target.value)}}/>
    </div>
    <button type="submit" style={{backgroundColor:"orange"}}  onClick={handleSubmit}>Update Password</button>
    </form>
    </div>
  )
}

export default Forgotpassword