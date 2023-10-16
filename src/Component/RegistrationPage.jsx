import React from 'react';
import './Login.css';

import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  return (
    <div>
      
      <div className='parent'>
        <div className='child'>
          <div className='child2'>
            <center>
              <p>
                <b>Register</b>
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
              <input
                className='input'
                type='password'
                placeholder='Password'
              />
              <br />
            </center>
            <span className='label'>
              <b>Confirm Password</b>
            </span>
            <center>
              <input
                className='input'
                type='password'
                placeholder='Confirm Password'
              />
              <br />
              <input className='bu' type='button' value='Register' />
              <br />
              <br />
              <span className='login'>
                Already have an account? <Link to='/LoginPage'>Log in</Link>
              </span>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
