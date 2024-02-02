import React, { useContext } from 'react'
import Context from "../usecontext/Context";
function Login() {

  const handleLogin = ()=>{
      loginArray.forEach(element => {
        if(element[0] === username & element[1] === password){
          <>User Exist and Signed In</>
        }
      });
  }
  const {username , setusername, password, setpassword , loginArray , setloginArray} = useContext(Context);
  return (
    <div className='login'>
      <form>
        <input type="text" placeholder='Username' value = { username} onChange={(e)=>{setusername(e.target.value)}}/>
        <input type="text" placeholder='Password' value = { password} onChange={(e)=>{setpassword(e.target.value)}}/>
        <button onClick={handleLogin}>Sign in</button>
      </form>
    </div>
  )
}

export default Login