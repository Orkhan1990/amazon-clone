import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "../../firebase";

const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();

  const signIn=(e)=>{
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email,password)
    .then(auth=>{
        navigate('/');
    })
    .catch(error=>alert(error.message));
  }

  const register=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      console.log(auth);
      if(auth){
        navigate("/");
      }

    })
    .catch((error)=>{alert(error.message);})
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          src="./images/amazon_logo.png"
          alt="Amazon"
          className="login_logo"
        />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>

        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e=>setPassword(e.target.password)}/>

          <button className="login_signIn_button" onClick={signIn}>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. PLease see our Privacy Notice,our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login_register_button" onClick={register}>Create your Amazon account</button>
      </div>
    </div>
  );
};

export default Login;
