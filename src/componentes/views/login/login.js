// LoginModal.js
import React, { useState } from 'react';
import './LoginModal.css';

const LoginForm = ({ onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleClose = () => {
    // Llama a la función onClose para cerrar el modal
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className='modal-container'>
      <div className="container">
        <div className="login-container">
          <input
            id="item-1"
            type="radio"
            name="item"
            className="sign-in"
            checked={isSignIn}
            onChange={handleToggle}
          />
          <label htmlFor="item-1" className="item">
            Sign In
          </label>
          <input
            id="item-2"
            type="radio"
            name="item"
            className="sign-up"
            checked={!isSignIn}
            onChange={handleToggle}
          />
          <label htmlFor="item-2" className="item">
            Sign Up
          </label>
          <div className="login-form">
            {isSignIn ? (
              <div className="sign-in-htm">
                <div className="group">
                  <input placeholder="Username" id="user" type="text" className="input" ></input>
                </div>
                <div className="group">
                  <input
                    placeholder="Password"
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group">
                  <input type="submit" className="button" value="Sign In" />
                </div>
                <div className="hr"></div>
                <div className="footer">
                  <a href="#forgot">Forgot Password?</a>
                </div>
              </div>
            ) : (
              <div className="sign-up-htm">
                <div className="group">
                  <input placeholder="Username" id="user" type="text" className="input" />
                </div>
                <div className="group">
                  <input placeholder="Email address" id="pass" type="text" className="input" />
                </div>
                <div className="group">
                  <input
                    placeholder="Password"
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group">
                  <input
                    placeholder="Repeat password"
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group">
                  <input type="submit" className="button" value="Sign Up" />
                </div>
                <div className="hr"></div>
                <div className="footer">
                  <label htmlFor="item-1">Already have an account?</label>
                </div>
              </div>
            )}
            <div className="group">
              <button className="button" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
