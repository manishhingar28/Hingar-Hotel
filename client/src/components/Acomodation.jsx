import React from "react";
import accomodation_1 from "../assets/images/accomodation_1.jpg";
import accomodation_2 from "../assets/images/accomodation_2.jpg";
import accomodation_3 from "../assets/images/accomodation_3.jpg";
import './styles/Acomodation.scss'

const Acomodation = () => {
  return (
    <>
    <div className="acomodation_header">
        <h1>𝙰𝚌𝚌𝚘𝚖𝚘𝚍𝚊𝚝𝚒𝚘𝚗𝚜</h1>
    </div>
    <div className="acomodation_container">

       <div className="acomodation_firstC">
              <div className="img1">
                <img src={accomodation_1} alt="" />
              </div>
              <div className="text1">
                 <p>Deluxe Rooms</p>
                 <p>2 Adults | 1 Child Below 8</p>
              </div>
       </div>
       <div className="acomodation_secondC">
       <div className="text2">
                 <p>Deluxe Rooms</p>
                 <p>2 Adults | 1 Child Below 8</p>
              </div>
              <div className="img2">
                <img src={accomodation_2} alt="" />
              </div>
              
       </div>
       <div className="acomodation_thirdC">
              <div className="img3">
                <img src={accomodation_3} alt="" />
              </div>
              <div className="text3">
                 <p>Deluxe Rooms</p>
                 <p>2 Adults | 1 Child Below 8</p>
              </div>
       </div>
    </div>
    </>
  );
};

export default Acomodation;

