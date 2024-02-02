import React, { useContext , useState} from 'react'
import Context from "../usecontext/Context";
import "./Login.css";
function Login() {
    const[isLoggedin , setisLoggedin] = useState();
  const handleLogin = (e)=>{
    e.preventDefault();
    let flag = false;
      loginArray.forEach(element => {
        if(element[0] === username & element[1] === password){
          setisLoggedin("User Exist and Signed In");
          flag = true;
        }
      });
      if(!flag){
        setisLoggedin("Username and Password does not match");
      }
  }
  const {username , setusername, password, setpassword , loginArray , setloginArray} = useContext(Context);
  return (
    <div className='login'>
      <span>Sign in</span>
      <span>Forgot password?</span>
      <form>
        <>Username : </><input className="" type="text" /*placeholder='Username'*/ value = { username} onChange={(e)=>{setusername(e.target.value)}}/>
        <br/>
        <>Password : </><input className="" type="text" /*placeholder='Password'*/ value = { password} onChange={(e)=>{setpassword(e.target.value)}}/>
        <br/>
        <button onClick={handleLogin}>Sign in</button>

        <p>{isLoggedin}</p>
      </form>
    </div>
  )
}

export default Login