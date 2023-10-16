import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  return (
    <div className='parent'>
      <div className='child'>
        <div className='child2'>
          <center>
            <p>
              <b>Login</b>
            </p>
          </center>
          <br />

          <span className='label'>
            <b>Email address</b>
          </span>
          <center>
            <input className='input' type='text' placeholder='Enter email' />
            <br />
            <span className='span'>
              we will never share your email with anyone else
            </span>
          </center>
          <span className='label'>
            <b>Password</b>
          </span>
          <center>
            <input className='input' type='password' placeholder='Password' />
            <br />
            <input className='bu' type='button' value='Log in' />
            <br />
            <br />
            <span className='login'>
              Don't have an account? <Link to='/RegistrationPage'>Register here</Link>
            </span>
          </center>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
