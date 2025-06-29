import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Signup.scss'; // Ensure this CSS file exists
import img2 from '../assets/images/signin.jpg'
import axios from 'axios' 
import {URL} from '../utils/url'
import { toast } from 'react-toastify';

const Signup = () => {
  const [confirmPassword,setConfirmPassword]=useState('')
  const [user,setuser]=useState({
    userName:'',
    Email:'',
    Password:'',
    Contact_no:'',
    Is_verified:false
  })
  const navigate = useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
      if(confirmPassword!==user.Password){
        toast.error('Password and Confirm Password should be same')
        return;
      }
        const res=await axios.post(`${URL}/auth/signup`,user);
        if(res.status===201){
          toast.success(res.data.message)
          navigate('/signin')
        }
      }catch(err){
        toast.error(err.response.data.message)
      }
  };
  const handleChange=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
  }
  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className='signup-form-left'>
          <h1 className="logo">The Hingar Hotels</h1>
          <h2>Sign up for Best Deals</h2>
          <button className="google-button">Continue with Google</button>
          <div className="divider">Or Sign up with Email</div>
          <form className='authform' onSubmit={handleSubmit}>
            <input
              type="text"
              name='userName'
              placeholder="Enter User Name"
              value={user.userName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name='Email'
              placeholder="Enter your Email"
              value={user.Email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name='Password'
              placeholder="Set your Password"
              value={user.Password}
              onChange={handleChange}
              required
            />
            <input
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}  
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <input
              type="text"
              name='Contact_no'
              placeholder="Enter your Contact Number"
              value={user.Contact_no}
              onChange={handleChange}
              required
              />
            <button type="submit" className="submit-button">Signup</button>
          </form>
          <p>Have an account? <Link to="/signin">Sign In</Link></p>
        </div>
      </div>
      <div className="background-image-Signin">
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Signup;
