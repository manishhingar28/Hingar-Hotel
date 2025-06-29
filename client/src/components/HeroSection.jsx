import React,{useState,useContext} from 'react';
import Typed from 'typed.js';
import { toast } from 'react-toastify';
import './styles/HeroSection.scss';
import { URL } from '../utils/url';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
const HeroSection = () => {
  const navigate=useNavigate();
  const {setSearchHotels}=useContext(UserContext);
  const [destination, setDestination] = useState('');
  const video = 'https://gateway.pinata.cloud/ipfs/QmQs9Na5A4C5kBXtUowAP6bdpsLTXSyru885f3cKdovKBn';
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Hotels</i>', '<i>Restaurants</i>', '<i>Resorts</i>', '<i>Lounges</i>'],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!destination) {
      toast.error('Please enter a destination');
      return;
    }
    try{
      const res=await axios.get(`${URL}/hotel/search?location=${destination}`);
      if(res.status===200){
        setSearchHotels(res.data);
        navigate('/search');
      }
    }
    catch(err){
       toast.error(err.response.data.message);
    }
  }
  return (
    <section className="hero-section">
      <video  muted autoPlay loop id="background-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>
          <span className='hero-content-heading'>Welcome </span> to <br /> The Hingar Hotels 
          <span ref={el} className='changing-text' />
        </h1>
      </div>
      <div className="search-bar">
        <form className='form' onSubmit={handleSubmit}>
            <input type="text" name="destination" placeholder="Where do you want to go?" onChange={(e)=>{setDestination(e.target.value)}} />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
