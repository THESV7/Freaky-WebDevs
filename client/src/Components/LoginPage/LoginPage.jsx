import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  return (
    <section className="custom-container forms">
      <div className="custom-form login">
        <div className="custom-form-content">
          <header className="login">Login</header>
          <form action="#">
            <div className="field input-field login">
              <input type="email" placeholder="Email" className="input login" />
            </div>
            <div className="field input-field login">
              <input
                type="password"
                placeholder="Password"
                className="password login"
              />
            </div>
            <div className="form-link login">
              <Link className="forgot-pass login">
                Forgot password?
              </Link>
            </div>
            <div className="field button-field login">
              <button className="login">Login</button>
            </div>
          </form>
          <div className="form-link login">
            <span>
              Don't have an account?{' '}
              <Link to="/signup" className="link signup-link login">
                Signup
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
