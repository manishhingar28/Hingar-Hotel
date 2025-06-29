import React, { useState ,useContext} from "react";
import "./styles/Memorable.scss";
import memorable from '../assets/images/memorable.jpg';
import img1 from '../assets/images/img1.jpeg';
import {UserContext} from '../context/UserContext';
const Memorable = () => {
  const {reviews}=useContext(UserContext);
  console.log(reviews);
  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((star, index) => (
          <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="memorable_header">
        <h2>Memorable insights</h2>
      </div>
      <div className="memorable_container">
        <div className="memorable_left">
          <p className="arrow">&lt;</p>
          <div className="memorable_reviews">
            {reviews?.map((review, index) => (
              <div key={index} className="review">
                <img src={img1} alt="" className="review-image" />
                {renderStars(review.Rating)}
                <p>{review.Review_text}</p>
              </div>
            ))}
          </div>
          <p className="arrow">&gt;</p>
        </div>
        <div className="memorable_right">
          <img src={memorable} alt="Memorable" />
        </div>
      </div>
    </>
  );
};

export default Memorable;
