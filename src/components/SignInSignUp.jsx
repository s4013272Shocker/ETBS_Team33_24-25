import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import '../components/SignInSignUp.css'
import BotanicaGarden from '../assets/BotanicaGarden.png';
import googleLogo from '../assets/google.jpg';


const SignInSignUp = () => {

  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
      setIsSignUp(prevValue => !prevValue);
  };

  return (
      <div className="sign-in-sign-up-container">
          <div className="left-panel">
              <img src={BotanicaGarden}
                   alt="Event Ticket Mockup"
                   className="ticket-image"
                   />
          </div>
          <div className="right-panel">
              <h1 className="login-header">Login</h1>
              {isSignUp ? <SignUp /> : <SignIn />}
              <a href="/" className="forgot-password">Forgot Password?</a>

              <div className="google-login">
                  <img src={googleLogo} alt="Google Logo" />
                  <span>Continue with Google</span>
              </div>

              <button onClick={toggleSignUp} className="toggle-button">
                  {isSignUp
                      ? 'Already have an account? Login'
                      : 'Don\'t have an account? Sign Up'
                  }
              </button>
          </div>
      </div>
  );
};

export default SignInSignUp;
