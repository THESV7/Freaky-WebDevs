import React from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {


  return (
    <section className="custom-container signUp-container forms">
      <div className="custom-form login">
        <div className="custom-form-content">
          <header className="login">Sign Up</header>
          <form action="#">
            <div className="field input-field login">
              <input type="text"
                placeholder="Username"
                className="input login"
                required />
            </div>
            <div className="field input-field login">
              <input type="email"
                placeholder="Email"
                className="input login"/>
            </div>
            <div className="field input-field login">
              <input
                type="password"
                placeholder="Password"
                className="password login"
                required
              />
            </div>
            <div className="field input-field login">
              <input
                type="password"
                placeholder="Confirm Password"
                className="password login"
                required
              />
            </div>
            <div className="field button-field login">
              <button className="login" >Sign Up</button>
            </div>
          </form>
          <div className="form-link login">
            <span>
              Don't have an account?{' '}
              <Link to="/login" className="link signup-link login">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp