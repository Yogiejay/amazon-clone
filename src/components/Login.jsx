import React, { useContext, useState } from 'react'
import Context from "../usecontext/Context";
import { Link , useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import "./Login.css";
import { signInWithEmailAndPassword } from 'firebase/auth';
function Login() {
  const { username, setusername, /*password, setpassword , loginArray , setloginArray , */registerArray, /*setregisterArray*/ } = useContext(Context);
  const [isLoggedin, setisLoggedin] = useState();
  const [isChecked, setisChecked] = useState(false);
  const [userName, setuserName] = useState("");
  const [passWord, setpassWord] = useState("");
  const navigate = useNavigate();
  // console.log(registerArray);
  const handleCheck = () => {
    return setisChecked(!isChecked);
  }
//  Below code is done using firebase modue 
  // const handleLogin = async (e) =>{
  //   e.preventDefault();
  //   await signInWithEmailAndPassword(auth , userName , passWord)
  //   .then((user)=>{
  //     navigate("/home");
  //   })
  //   .catch((error)=>{
  //     const ErrorMessage = error.message;
  //     const ErrorCode = error.code;
  //     alert (`${ErrorCode} : this is the error ${ErrorMessage}`);
  //   })
  // }


  const handleLogin = (e) => {
    e.preventDefault();
    let flag = false;
    // if (e[0] === "" || e[1] === ""){
    //     alert("please fill all the required fields")
    // }
    // loginArray.forEach(element => {
    //   if(element[0] === username & element[1] === password){
    //     setisLoggedin("User Exist and Signed In");

    //     flag = true;
    //   }
    // });
    registerArray.forEach((element) => {
      if (element.username === userName && element.password === passWord) {
        setisLoggedin("User Exist and Signed In");
        setusername(userName);
        flag = true;

      }
    });
    if (!flag) {
      setisLoggedin("Username and Password does not match");
    }
    setuserName("");
    setpassWord("");
  }
  const handlecreateAccount = ()=>{

  }

  return (
    <div className='login'>
      <span style={{ fontSize: "1.4rem" }}>Sign in</span>
      <form>
        <>Username : </><input className="" type="text" /*placeholder='Username'*/ value={userName} onChange={(e) => { setuserName(e.target.value) }} />
        <br />
        <>Password : </><input className="" type={isChecked ? "text" : "password"} /*placeholder='Password'*/ value={passWord} onChange={(e) => { setpassWord(e.target.value) }} />
        <br />
        <Link to="/Forgotpassword" ><span style={{ display: "flex", justifyContent: "end", color: "blue" }} /*onClick={}*/>Forgot password?</span></Link>
        <br />


        <input type="checkbox" onChange={handleCheck} /><>Show Password</>
        <br />
        <input type="checkbox" /><>Keep me Signed in</>
        <br />
        <br />
        <button className="signinButton" onClick={handleLogin}>Sign in</button>

        <p>{isLoggedin}</p>
      </form>
      <p style={{ marginLeft: "auto", marginRight: "auto", display: "block", width: "80%" }}>--------New to Amazon?---------</p>
      <Link to="/createAccount"><button className='registerButton' /*onClick={handlecreateAccount}*/>Create a New Account</button></Link>
    </div>
  )
}

export default Login