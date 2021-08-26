import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
function Login() {
    // let loggedIn=false;

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    let [loggedIn,setLoggedIn]=useState(false);
    

    loggedIn=true;
    const token = localStorage.getItem("token");
    if(token===null){
        // setLoggedIn(false);
        loggedIn=false;
    }
    
    const submitForm = (evt) => {
        evt.preventDefault();
        console.log(username,password);
        if(username==="A"  && password==="B"){
            localStorage.setItem("token","fdblsdjfbgslkdfg");
            setLoggedIn(true);
        }
    }
    
    console.log(loggedIn);

    if(loggedIn){
        return <Redirect to="/Admin"></Redirect>
    }
    else{
      return (
        <div>
          <h1>Welcome to Login Page</h1>
          <form onSubmit={submitForm}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="password"
              name="username"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
}

export default Login
