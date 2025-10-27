import React ,{useState,useRef}from 'react'
import {user} from "../data/user.data"

const Login = () => {

    const username=useRef('');
    const password=useRef('');
    const handleForm=(e)=>{
        e.preventDefault();
        console.log(username.current.value)
        console.log(password.current.value)
        localStorage.setItem("username",username.current.value)
        // if(username===user.username && password===user.password){
        //     alert("login successfull")
        // }else{
        //     alert("invalid credentials")
        // }

    }
  return (
    <div>
        <form onSubmit={handleForm}>
            <h2>Login herer</h2>
            <input type="text"  name="username" id="username" ref={username}/>
            <input type="password"  name="password" id="password" ref={password}/>
            <input type="submit" name="" id="" />
        </form>
    </div>
  )
}

export default Login