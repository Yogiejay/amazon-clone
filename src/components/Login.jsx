import React, { useContext , useState} from 'react'
import Context from "../usecontext/Context";
import { Link } from 'react-router-dom';
import "./Login.css";
function Login() {
    const[isLoggedin , setisLoggedin] = useState();
    const [isChecked , setisChecked] = useState(false);
    const handleCheck = ()=>{
        return setisChecked(!isChecked);
    }

  const handleLogin = (e)=>{
    e.preventDefault();
    let flag = false;
    if (e[0] === "" || e[1] === ""){
        alert("please fill all the required fields")
    }
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
  const handlecreateAccount = ()=>{

  }
  const {username , setusername, password, setpassword , loginArray , setloginArray} = useContext(Context);
  return (
    <div className='login'>
      <span style={{fontSize:"1.4rem"}}>Sign in</span>
      <form>
        <>Username : </><input className="" type="text" /*placeholder='Username'*/ value = { username} onChange={(e)=>{setusername(e.target.value)}}/>
        <br/>
        <>Password : </><input className="" type={isChecked ? "text" : "password"} /*placeholder='Password'*/ value = {password }  onChange={(e)=>{setpassword(e.target.value)}}/>
        <br/>
        <span style={{display:"flex",justifyContent:"end" , color:"blue"}} /*onClick={}*/>Forgot password?</span>
        <br/>
        
        
        <input type="checkbox" onChange={handleCheck} /><>Show Password</>
        <br/>
        <input type="checkbox"/><>Keep me Signed in</>
        <br/>
        <br/>
        <button className="signinButton" onClick={handleLogin}>Sign in</button>

        <p>{isLoggedin}</p>
      </form>
      <p style={{marginLeft : "auto" , marginRight : "auto" , display : "block",width:"80%"}}>--------New to Amazon?---------</p>
      <Link to="/createAccount"><button className='registerButton' onClick={handlecreateAccount}>Create a New Account</button></Link>
    </div>
  )
}

export default Login