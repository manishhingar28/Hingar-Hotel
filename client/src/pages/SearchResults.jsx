import React, { useState, useContext } from "react";
import "./styles/Explore.scss";
import img1 from "../assets/images/mumbai_e.jpg";
import img2 from "../assets/images/delhi_e.jpg";
import img3 from "../assets/images/bangalore_e.jpg";
import { UserContext } from "../context/UserContext";
import HotelCard from "../components/HotelCard.jsx";
import { Link } from "react-router-dom";
const SearchResults = () => {
  const { searchHotels } = useContext(UserContext);
  const hotels = searchHotels;
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
          <p>All</p>
        </div>
        <div className="img2">
          <img src={img2} alt="Delhi" />
          <p className="center">Search</p>
        </div>
        <div className="img3">
          <img src={img3} alt="Bangalore" />
          <p> Results</p>
        </div>
      </div>
      {hotels?.length === 0 && <>
        <h2 className="no-search">No hotels found</h2>
        <Link to='/'><button className="no-search-btn">Go back</button></Link>
      </>}
      {hotels?.length > 0 && <>
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
      </>
      }
    </div>
  );
};

export default SearchResults;
