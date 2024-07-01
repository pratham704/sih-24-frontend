import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import "./module/login.css";

function Login() {
  

  
  const nav = useNavigate();
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const onCaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };


  return (
    <div className={`loginContainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <div className="sign-in-form loginForm">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="text"
                name="faculty_uid"
                placeholder=" Email"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="password"
                name="faculty_password"
                placeholder="Password"
              />
            </div>
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
              onChange={onCaptchaChange}
            />
            <button className="btns"
            onClick={()=>nav('/student/dashboard')}
            
            >Sign In</button>
            <p className="social-text loginp">Sign in with social platforms</p>
            <div className="social-media">
              <a className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
              </a>
              <a className="social-icon">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="my-auto mx-auto"
                />
              </a>
            </div>
            <br />
          </div>
          <div className="sign-up-form loginForm">
            <h2 className="title">Sign up</h2>
            <div className="startbuilding">
              Start building your bio data with us and get the highest reach and
              make it happen for you. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat tenetur doloremque impedit blanditiis
              quae nemo similique illum sunt, ratione maiores! Tempora,
              dignissimos! Blanditiis atque reiciendis tempore! Voluptate
              tempore minus deleniti.
            </div>
            <button className="btns" onClick={() => nav("/student/account/register")}>
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="loginh3">New here?</h3>
            <p className="loginp">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btns transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="/img/dogLogin1.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className="loginh3">One of us?</h3>
            <p className="loginp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              onClick={handleSignInClick}
              className="btns transparent"
              id="sign-in-btns"
            >
              Sign in
            </button>
          </div>
          <img src="/img/dogLogin.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
