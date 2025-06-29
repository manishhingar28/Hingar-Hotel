import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Signin.scss';
import img2 from '../assets/images/signin.jpg'
import { toast } from 'react-toastify';
import axios from 'axios';
import { URL } from '../utils/url';
import { UserContext } from '../context/UserContext';
import {jwtDecode} from 'jwt-decode';
const Signin = () => {
  const {setuser,role,setrole}=useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res=await axios.post(`${URL}/auth/login`,{Email:email,Password:password});
      if(res.status===200){
        toast.success('Logged in Successfully');
        localStorage.setItem('token',res.data.token);
        const decodedToken = jwtDecode(res.data.token);
        setrole(decodedToken.role);
        setuser(res.data.user);
        if(decodedToken.role==='admin') navigate('/admin');
        else navigate('/');
      }
    }
    catch(err){
      toast.error(err.response.data.message)
    }
  };
  return (
    <div className="signin-container">
      <div className="signin-form">
        <div className='signin-form-left'>
          <h1 className="logo">The Hingar Hotels</h1>
          <h2>Sign in for Best Deals</h2>
          <button className="google-button">Continue with Google</button>
          <div className="divider">Or Sign in with Email</div>
          <form className='authform' onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="submit-button">Continue</button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
      <div className="background-image-Signin">
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Signin;
