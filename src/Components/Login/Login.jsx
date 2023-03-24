import React, { useState } from "react";
import "./Login.css";
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const [emaile, setEmail] = useState(null)
    const [passe, setPass] = useState(null)
    const handleCreateBtn = () => {
        navigate('/create-account')
    }
    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }
    const handlePassInput = (e) => {
        setPass(e.target.value)
    }


    const handleLoginBtn = () => {
        const email = localStorage.getItem('email')
        const pass = localStorage.getItem('pass')
        // const getConfirmPass = localStorage.getItem('confirmPass')
        if(email === emaile && pass === passe){
            navigate('/home')
        }
    }
  return (
    <div className="login-container">
      <div className="login">
        <div className="left-login-container">
          <h1>Welcome back to Pretty Login</h1>
          <p>It's great to have you back!</p>
          <div style={{margin:'1rem 0'}}>
            <h4>Email</h4>
            <input onChange={handleEmailInput} className="email" type="email" />
          </div>
          <div style={{margin:'1rem 0'}}>
            <h4>Password</h4>
            <input onChange={handlePassInput} className="password" type="password" />
          </div>
          <div className="btns">
            <button onClick={handleLoginBtn} className="login-btn">LOGIN</button>
            <button onClick={handleCreateBtn} className="create-btn">CREATE ACCOUNT</button>
          </div>
        </div>
        <div className="right-login-container">
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
