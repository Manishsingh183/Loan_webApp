import React, { useState } from 'react'
import './login.css';

function Login(){

    const[register,setRegister] = useState(1);
    const[login,setLogin] = useState(0);

    function handleRegisterPress(){
        setRegister(1);
        setLogin(0);
    }
    function handleLoginPress(){
        setRegister(0);
        setLogin(1);
    }

    function handleLoginSubmit(){

    }
    function handleRegisterSubmit(){
        
    }


    const [user,setUser] =  useState({username:"",password:""});

    function handleChange(event){
        const {name,value} = event.target;
        setUser(prevValue=>{
            return{
                ...prevValue,
                [name]:[value]
            }
        })
    }
    
    return <div id='login-center'>
       <div id='login-box'>
           <div id='choose-login-option' className='sep'>
               <div><button id="login-buttons" onClick={handleRegisterPress}>Register</button></div>
               <div><button id="login-buttons" onClick={handleLoginPress}>Login</button></div>
           </div>
           <div className='hor-sep'>
               <label>Username</label>
               <input id="login-input-buttons" type="text" name='username' value={user.username} onChange={handleChange}></input>
           </div>
           <div className='hor-sep'>
               <label>Password</label>
               <input id="login-input-buttons" type="text" name='password' value={user.password} onChange={handleChange}></input>
           </div>
           <div className='submit-sep'>
               {login ? <button type='submit' id='submit-login' onClick={handleLoginSubmit}>Login</button> : null}
               {register ? <button type='submit' id='submit-register' onClick={handleRegisterSubmit}>Register</button>: null}
           </div>

       </div>
    </div>


}
export default Login;