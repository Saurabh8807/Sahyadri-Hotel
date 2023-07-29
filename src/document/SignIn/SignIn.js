import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const SignIn = () => {
  const [key , setKey] = useState("")
  const [userType,setuserType] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = async (e) => {

    if(userType==="Admin" && key!=="asdfghjkl"){
      e.preventDefault();
      alert("Invalid Admin")
    }else if(userType==="Admin" && key==="asdfghjkl"){

    e.preventDefault();
    const baseUrl = "http://localhost:5000/SignInAdmin";
    try {
      const response = await axios.post(baseUrl, { key, email, password });

      // Store the token in local storage
      localStorage.setItem("token", response.data.token);

      // Registration successful, redirect the user
      const { from } = location.state || { from: { pathname: "/admin/Dashboard" } };
      navigate(from);
      alert("Admin signIn Successfully")
      window.location.reload();

      // Handle any additional success actions or notifications
      console.log(response.data);
    } catch (error) {
      // Handle the sign-in error
      console.log(error.response);
      if (error.response.status === 400) {
        window.alert("Invalid Credentials");
      } else {
        window.alert("Failed to sign in");
      }
    }
    }else{


    e.preventDefault();
    const baseUrl = "http://localhost:5000/SignIn";
    try {
      const response = await axios.post(baseUrl, { email, password });

      // Store the token in local storage
      localStorage.setItem("token", response.data.token);

      // Registration successful, redirect the user
      const { from } = location.state || { from: { pathname: "/user/home" } };
      navigate(from);

      // Handle any additional success actions or notifications
      alert("User signup successfully")
    window.location.reload();

      console.log(response.data);
    } catch (error) {
      // Handle the sign-in error
      console.log(error.response);
      if (error.response.status === 400) {
        window.alert("Invalid Credentials");
      } else {
        window.alert("Failed to sign in");
      }
    }
  };
}

  return (
    <div className="signIncontainer">
    <div className="SignIn-container">
      <h2 style={{color:"wheat"}}>SignIn</h2>
      <div class="radio-box-container">
        <div class="radio1">
          <label class="radio-box">
            <input type="radio" name="radio-box" value="User"  onChange={(e) => setuserType(e.target.value)} />
            <div class="box-content" style={{color:"black"}}>USER</div>
          </label>
        </div>
        <div class="radio1">
          <label class="radio-box">
            <input type="radio" name="radio-box" value="Admin" onChange={(e) => setuserType(e.target.value)} />
            <div class="box-content" style={{color:"black"}}>ADMIN</div>
          </label>
        </div>
      </div>

      <form method="POST" onSubmit={handleSignIn}>
      {userType === "Admin" ? (
  <div className="form-group">
    <label>Secret Key</label>
    <input
      className="form-control"
      type="password"
      name="key"
      value={key}
      onChange={(e) => setKey(e.target.value)} // Add this line
    />
  </div>
) : null}
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SignIn
        </button>
      </form>
      <h6 className="SignInH6">Or Sign Up Using</h6>
      <div className="social-media-handles">
        <span className="social-media-icon">
          <FaFacebook />
        </span>
        <span className="social-media-icon">
          <FaTwitter />
        </span>
        <span className="social-media-icon">
          <FaInstagram />
        </span>
      </div>
      <p className="signup-link">
        Don't have an account ? <br/><Link to="/signup"style={{color:"white"}}>Sign up</Link>
      </p>
    </div>
    </div>
  );
};

export default SignIn;
