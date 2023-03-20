import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateAccount.css'

const CreateAccount = () => {
    const navigate = useNavigate()
    const handleDoneBtn = () => {
        navigate('/')
    }
    const handleEmailInput = (e) => {
        localStorage.setItem('email',e.target.value)
    }
    const handlePassInput = (e) => {
        localStorage.setItem('pass', e.target.value)
    }
  return (
    <div className="login-container">
      <div className="login">
        <div className="left-login-container">
          <h1>Welcome back to Pretty Sign Up</h1>
          <p>It's great to have you back!</p>
          <div style={{margin:'1rem 0'}}>
            <h4>Email</h4>
            <input onChange={handleEmailInput} className="email" type="email" />
          </div>
          <div style={{margin:'1rem 0'}}>
            <h4>Password</h4>
            <input onChange={handlePassInput} className="password" type="password" />
          </div>
          <div style={{margin:'1rem 0'}}>
            <h4>Confirm Password</h4>
            <input className="password" type="password" />
          </div>
          <div className="btns">
            <button onClick={handleDoneBtn} className="login-btn">Done</button>
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
  )
}

export default CreateAccount