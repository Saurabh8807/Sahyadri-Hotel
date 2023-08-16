import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    cpassword: '',
  });
  const [admin , setAdmin] = useState({
    key:'',
    name: '',
    phone: '',
    email: '',
    password: '',
    cpassword: '',
  })
  const [userType,setuserType] = useState("")
  const handleInputs = (e) => {
    if (userType !== "Admin") {
      setUser({ ...user, [e.target.name]: e.target.value });
    } else {
      setAdmin({ ...admin, [e.target.name]: e.target.value });
    }
  };
  
  const handleSignUp = async (e) => {
    if(userType==="Admin" && admin.key!=="asdfghjkl"){
      e.preventDefault();
      alert("Invalid Admin")
    } else if(userType==="Admin" && admin.key==="asdfghjkl"){
      e.preventDefault();

      // Perform registration logic with user data
      const { key, name, phone, email, password, cpassword } = admin;
      console.log(admin)
      const baseUrl1 = "https://sahyadri-backend.onrender.com/SignUpAdmin";
      
      try {
        // e.preventDefault();
        const response = await axios.post(baseUrl1, { key, name, phone, email, password, cpassword });
  
        // Registration successful, navigate to the login route
        navigate('/SignIn');
  
        // Handle any additional success actions or notifications
        console.log(response.data); 
        alert(response.data) // You can customize this based on your needs
      } catch (error) {
        // Handle the registration error
        console.log(error);
      }
    } else {
      e.preventDefault();

      // Perform registration logic with user data
      const { name, phone, email, password, cpassword } = user;
      const baseUrl = "https://sahyadri-backend.onrender.com/SignUp";

      try {
        const response = await axios.post(baseUrl, { name, phone, email, password, cpassword });

        // Registration successful, navigate to the login route
        navigate('/SignIn');

        // Handle any additional success actions or notifications
        console.log(response.data); // You can customize this based on your needs
      } catch (error) {
        // Handle the registration error
        console.log(error);
      }
    }
  };

  return (
    <div className='signIncontainer'>    
      <div className="SignUp-container">
      <h2 style={{color:"wheat"}}>SignUp</h2>
      <div className="radio-box-container">
        <div className="radio1">
          <label className="radio-box">
            <input type="radio" name="radio-box" value="User" onChange={(e) => setuserType(e.target.value)} />
            <div className="box-content" style={{color:"black"}}>USER</div>
          </label>
        </div>
        <div className="radio1">
          <label className="radio-box">
            <input type="radio" name="radio-box" value="Admin" onChange={(e) => setuserType(e.target.value)} />
            <div className="box-content" style={{color:"black"}}>ADMIN</div>
          </label>
        </div>
      </div>

      <form method="POST" onSubmit={handleSignUp}>
      {userType === "Admin" ? (
  <div className="form-group">
    <label>Secret Key</label>
    <input
      className="form-control"
      type="password"
      name="key"
      value={admin.key}
      onChange={(e) => handleInputs(e)} // Add this line
    />
  </div>
) : null}


        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={userType==="Admin"?admin.name:user.name}
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div className="form-group">
          <label>Phone No:</label>
          <input
            className="form-control"
            type="phone"
            name="phone"
            value={userType==="Admin"?admin.phone:user.phone}
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={userType==="Admin"?admin.email:user.email}
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={userType==="Admin"?admin.password:user.password}
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            className="form-control"
            type="password"
            name="cpassword"
            value={userType==="Admin"?admin.cpassword:user.cpassword}
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <button  type="submit" id="btnSignUp" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
    </div>

  );
};

export default SignUp;
