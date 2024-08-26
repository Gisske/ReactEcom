import React from 'react'
import './CSS/LoginSignUp.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='รหัสนักศึกษา' />
          <input type="email" placeholder='อีเมลนักศึกษา' />
          <input type="password" placeholder='รหัสผ่าน' />
        </div>
        <button>ลงชื่อเข้าใช้</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
