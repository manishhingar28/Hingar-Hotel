import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "./styles/HotelDetails.scss";
import hotelImg2 from "../assets/images/hotel_img2.jpg";
import img1 from "../assets/images/hotel_smaller3.jpg";
import img2 from "../assets/images/aboutus_1.jpg";
import img3 from "../assets/images/aboutus_3.jpg";
import img4 from "../assets/images/hotel_smaller1.jpg";
import rowImg1 from "../assets/images/hotel_smaller1.jpg";
import rowImg2 from "../assets/images/aboutus_3.jpg";
import rowImg3 from "../assets/images/hotel_smaller3.jpg";
import rowImg4 from "../assets/images/aboutus_1.jpg";

import { ImCross } from "react-icons/im";
import { UserContext } from "../context/UserContext";
import { useParams,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../utils/url";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
const HotelDetails = () => {
  const navigate=useNavigate();
  const { hotels ,reviews} = useContext(UserContext);
  const { id } = useParams();
  const token=localStorage.getItem('token');
  const hotel = hotels?.find(hotel => hotel?._id === id);
  const hotelreviews=reviews?.filter(review=>review?.Hotel_id===id);
  const [isbook, setisBook] = useState(false);
  const [isreview,setisReview]=useState(false);
  const defaultroom = hotel?.Room_types[0]?.Type;
  const defaultprice=hotel?.Room_types[0]?.Price;
  const [guestDetails, setGuestDetails] = useState({
    roomType: defaultroom,
    adults: '1',
    children: '0',
    checkin: '',
    checkout: '',
    price:defaultprice
  });
  useEffect(()=>{
    setGuestDetails((prevDetails) => ({
      ...prevDetails,
      roomType: defaultroom,
      price: defaultprice,
    }));
  },[defaultprice,defaultroom]);
  useEffect(() => {
    const selectedRoom = hotel?.Room_types.find(
      (room) => room.Type === guestDetails.roomType
    );
    if (selectedRoom) {
      setGuestDetails((prevDetails) => ({
        ...prevDetails,
        price: selectedRoom.Price,
      }));
    }
  }, [guestDetails.roomType]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuestDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };
 const emptyForm=()=>{
  setGuestDetails({
    roomType: defaultroom,
    adults: '1',
    children: '0',
    checkin: '',
    checkout: '',
    price:defaultprice
  })
 }
  const loadRazorpayScript = async () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {};
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadRazorpayScript();
  }, []);

  const handleProceed = async (price,id,hotelId) => {
    try {
      const response = await axios.post(`${URL}/payment/addBooking`, {
        price,
      });
      initPayment(response.data,id,hotelId);
    } catch (error) {
      toast.error(error.response.data.message);
      emptyForm();
      setisBook(!isbook);
    }
  };
  const initPayment = (data,id,hotelId) => {
    const options = {
      key: "rzp_test_S7O9aeETo3NXrl",
      amount: data.amount,
      currency: data.currency,
      order_id: data.orderDetails.razorpayOrderId,
      handler: async (response) => {
        try {
          const verifyUrl = `${URL}/payment/verify`;
          const verifyData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };
          try {
            const res = await axios.post(verifyUrl, verifyData);
            if (res.status === 200) {
                try{
                  const room=hotel?.Room_types.find(room=>room.Type===guestDetails.roomType);
                  const res=await axios.put(`${URL}/hotel/availability/${hotelId}`,{Room_Type:guestDetails.roomType,newAvailablity:room.Availability-1});
                  if(res.status===200){
                    try{
                      const res = await axios.put(`${URL}/bookings/${id}/success`);
                      if (res.status === 200) {
                        toast.success(res.data.message);
                        emptyForm();
                        setisBook(!isbook);
                      }
                    }
                    catch(err){
                      toast.error(err.response.data.message);
                      emptyForm();
                      setisBook(!isbook);
                    }
                  }
                }
                catch(err){
                  toast.error(err.response.data.message);
                  emptyForm();
                  setisBook(!isbook);
                }
            }
          } catch (err) {
            toast.error(err.response.data.message);
            emptyForm();
            setisBook(!isbook);
          }
        } catch (err) {
          toast.error(err.response.data.message);
          emptyForm();
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  const calculateNights = (checkin, checkout) => {
    const oneDay = 24 * 60 * 60 * 1000; 
    const firstDate = new Date(checkin);
    const secondDate = new Date(checkout);

    const nights = Math.round(
      Math.abs((firstDate - secondDate) / oneDay)+1
    );
    return nights;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       if(!guestDetails.checkin||!guestDetails.checkout){
        toast.error('Please fill all the fields');
        return;
       }
      if (guestDetails.checkin > guestDetails.checkout) {
        toast.error('Check-in must be before check-out');
        return;
      }
      if(!token||token===null||token===undefined){
        toast.error('Please signin first');
        setTimeout(()=>{
          navigate('/signin');
        },1500)
        return;
      } 
      const room=hotel?.Room_types.find(room=>room.Type===guestDetails.roomType);
      if(room.Availability<=0){
        toast.error('Sorry! Room is not available for the selected dates')
        return;
      }
      const guest=Number(guestDetails.adults) + Number(guestDetails.children);
      const res = await axios.post(`${URL}/bookings/add`, { Hotel_id: id, Check_in_date: guestDetails.checkin, Check_out_date: guestDetails.checkout, Room_type: guestDetails.roomType, guestSize: guest }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (res.status === 201) {
        const nights=calculateNights(guestDetails.checkin,guestDetails.checkout);
        const price=Number(guestDetails.price)*nights;
        handleProceed(price,res.data.id,id);
      }
    }
    catch (err) {
      toast.error(err.response.data.message);
      emptyForm();
      setisBook(!isbook);
    }
  }
  return (
    <>
    {isreview &&
      <ReviewCard setisReview={setisReview} />
    }
      {isbook &&
        <div className="booking_form">
          <div className="cross">
            <ImCross onClick={() => setisBook(!isbook)} />
          </div>
          <div className="header">
            <h2>Experience the Luxury </h2>
            <h4>Book your stay today!</h4>
          </div>
          <div className="inputForm">
            <form onSubmit={handleSubmit}>
              <label>
                Room Type:
                <select name="roomType" value={guestDetails.roomType} onChange={handleChange}>
                  {hotel?.Room_types?.map((room, index) => {
                    return (
                      <option value={`${room?.Type}`}>{`${room.Type}`} for  &#8377;{`${room.Price}`}</option>
                    )
                  })}
                </select>
              </label>
              <label>
                Adults:
                <select name="adults" value={guestDetails.adults} onChange={handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </label>
              <label>
                Children (below 8):
                <select name="children" value={guestDetails.children} onChange={handleChange}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </label>
              <label>
                Check-in Date:
                <input type="date" name="checkin" value={guestDetails.checkin} onChange={handleChange} />
              </label>
              <label>
                Check-out Date:
                <input type="date" name="checkout" value={guestDetails.checkout} onChange={handleChange} />
              </label>
              <div className="btn">
                <button type='submit'>Proceed</button>
              </div>
            </form>
          </div>
        </div>
      }


      <div className={isbook||isreview ? 'hotel_main blur' : 'hotel_main'}>
        <div className="hotel_Upper">
          <div className="left_1">
            <img src={hotel?.Photos[0]} alt="Hotel Image 1" />
            <button className="book-button" onClick={() => setisBook(!isbook)}>
              Book Now
            </button>
          </div>
          <div className="right_1">
            <img src={hotelImg2} alt="Hotel Image 2" />
          </div>
        </div>
        <div className="hotel_Lower">
          <div className="left_2">
            <img src={img1} alt="Image 1" />
            <img src={img2} alt="Image 2" />
            <img src={img3} alt="Image 3" />
            <img src={img4} alt="Image 4" />
          </div>
          <div className="right_2">
            <div className="top">
              <div className="hotel_details">
                <div className="left_half">
                  <div className="texts">
                    <h1>{hotel?.Hotel_name}</h1>
                    <p>
                      {hotel?.Description}
                    </p>
                    <button className="left_half_book_button" onClick={() => setisBook(!isbook)}>
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="right_half">
                  <div className="lower_part_right_half">
                    <img src={hotel?.Photos[1]} alt="Room 1" />
                  </div>
                </div>
              </div>
              <div className="hotel_images">
                <div className="upper_contain">
                  <img src={hotel?.Photos[2]} alt="Room 2" />
                  {/* <p>Deluxe Room</p> */}
                </div>
                <div className="lower_contain">
                  <img src={hotel?.Photos[3]} alt="Room 3" />
                  {/* <p>Family Suite</p> */}
                </div>
              </div>
            </div>
            {hotelreviews?.length > 0 &&
              <div className="bottom">
                {hotelreviews?.map((review, index) => (
                  <div key={index} className="review">
                    <div className="msg-icons">
                      <FontAwesomeIcon
                        icon={faCommentDots}
                        className="feedback-icon"
                      />
                    </div>
                    <p>{review.Review_text}</p>
                    <strong>{review.UserName}</strong>
                    <div className="star-icons">
                      {[...Array(review.Rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
        <div className="image-row">
          <img src={rowImg1} alt="Row Image 1" />
          <img src={rowImg2} alt="Row Image 2" />
          <img src={rowImg3} alt="Row Image 3" />
          <img src={rowImg4} alt="Row Image 4" />
        </div>
        <div className="addreview">
          <button onClick={()=>setisReview(!isreview)}>Add Your valuable Review</button>
        </div>
      </div>
    </>
  );
};

export default HotelDetails;
