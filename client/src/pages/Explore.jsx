import React, { useState,useContext } from "react";
import "./styles/Explore.scss";
import img1 from "../assets/images/mumbai_e.jpg";
import img2 from "../assets/images/delhi_e.jpg";
import img3 from "../assets/images/bangalore_e.jpg";
import Typed from 'typed.js';
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import HotelCard from "../components/HotelCard.jsx";
const Explore = () => {
  const {hotels} = useContext(UserContext);
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Hotels</i>', '<i>Restaurants</i>', '<i>Resorts</i>', '<i>Lounges</i>'],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      cursorChar: '.',
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const [page, setPage] = useState(0);
  const hotelsPerPage = 8;
  const pageCount = Math.ceil(hotels?.length / hotelsPerPage);

  const getCurrentHotels = () => {
    const startIndex = page * hotelsPerPage;
    const endIndex = startIndex + hotelsPerPage;
    return hotels?.slice(startIndex, endIndex);
  };

  return (
    <div className="explore_container">
      <div className="explore_header">
        <div className="img1">
          <img src={img1} alt="Mumbai" />
          <p>Explore</p>
        </div>
        <div className="img2">
          <img src={img2} alt="Delhi" />
          <p className="center">All</p>
        </div>
        <div className="img3">
          <img src={img3} alt="Bangalore" />
          <p ref={el}></p>
        </div>
      </div>
      <div className="explore_hotels">
        {getCurrentHotels()?.map((hotel, index) => (
          <HotelCard hotel={hotel} index={index} />
        ))}
      </div>
      <div className="pagination">
        {pageCount && [...Array(pageCount).keys()].map(number => (
          <span
            key={number}
            onClick={() => setPage(number)}
            className={page === number ? "active__page" : ""}
          >
            {number + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Explore;
