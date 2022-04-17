import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';
const  App=()=> {
const[email,setEmail]=useState()
  const [password,setPassword]=useState()
  const loginhandle=(e)=>{
    console.log("changed")
    setEmail(e.target.value)
  }
  const passwordhandle=(e)=>{
    setPassword(e.target.value)
  }


  return (
    <div >
      <form >
          <h1> LOGIN FORM </h1>
          <h3>
        <label>
          EMAIL :
        </label>
       
          <input type="text" placeholder = 'e-mail'
          value ={email}
          name='email'
          onChange={loginhandle}></input>
         <br/>
         <br/>
          <label> PASSWORD : </label>
       
          <input type="password" placeholder='password'
          value ={password}
          name ='password'
          onChange={passwordhandle}></input>
        <br/>
        <br/>
        <select>
            <option value="telugu">telugu</option>
            <option value="hindi">hindi</option>
            <option value="korean">korean</option>
           </select> <label>select a lanuage </label>
        <br/>
        <br/>
         <input type="checkbox" /><label> remember me</label>
       <br/>
       <br/>
          <button> SUBMIT </button>
          <br/>
          <br/>
          </h3>
          
         
        </form>
    </div>
  );
}

export default App;
