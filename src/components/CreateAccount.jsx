import React, { useState , useContext } from 'react';
import "./CreateAccount.css"; 
import Context from "../usecontext/Context";

function CreateAccount() {
    const [firstname , setFirestname] = useState("");
    const [lastname , setLastname] = useState("");
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [repassword , setRepassword] = useState("");
    const {registerArray , setregisterArray} = useContext(Context);
    const handleSubmit = (e)=>{
        e.preventDefault();
        // const newUser = {firstname:firstname , lastname:lastname,username:username,password:password}
        setregisterArray([...registerArray , {"firstname":firstname , "lastname":lastname,"username":username,"password":password}]);
        setFirestname("");
        setLastname("");
        setUsername("");
        setPassword("");
        setRepassword("");
    }
  return (
    <div className='createAccount'>
      <form className='accountForm'>
        <p>Please Register</p>
        <div className='formGroup'>
          <label>First Name :</label>
          <input type='text' placeholder='Enter your First Name' value={firstname} onChange={(e)=>{setFirestname(e.target.value)}} />
        </div>

        <div className='formGroup'>
          <label>Last Name :</label>
          <input type='text' placeholder='Enter your Last Name' value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/>
        </div>

        <div className='formGroup'>
          <label>UserName :</label>
          <input type='text' placeholder='Enter UserName' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>

        <div className='formGroup'>
          <label>Password :</label>
          <input type='password' placeholder='Create a password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>

        <div className='formGroup'>
          <label>Retype Password :</label>
          <input type='password' placeholder='Re-enter the password' value={repassword} onChange={(e)=>{setRepassword(e.target.value)}}/>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        {registerArray.forEach(element => {
            return (<div>{element.firstname}</div>)
        })
        }
      </form>
    </div>
  );
}

export default CreateAccount;
