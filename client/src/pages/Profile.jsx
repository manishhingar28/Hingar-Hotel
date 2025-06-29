import React, { useState, useContext, useEffect } from 'react';
import './styles/Profile.scss';
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { URL } from '../utils/url';

const Profile = () => {
    const { user, hotels } = useContext(UserContext);
    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        contact: '',
        address: ''
    });
    const token = localStorage.getItem('token');
    const [bookings, setBookings] = useState([]);
     useEffect(()=>{
        if(!token){
            window.location.href='/';
        }
     },[token]);
    useEffect(() => {
        if (user) {
            setUserDetails({
                username: user.userName,
                email: user.Email,
                contact: user.Contact_no,
                address: user.Address,
            });
            fetchBookings();
        }
    }, [user]);

    const fetchBookings = async () => {
        try {
            const res = await axios.get(`${URL}/bookings`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (res.status === 200) {
                setBookings(res.data);
            }
        } catch (err) {
            toast.error('Failed to fetch bookings');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleUpdate = async () => {
        try {
            const res = await axios.put(`${URL}/auth`, userDetails, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (res.status === 200) {
                toast.success(res.data.message);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } catch (err) {
            toast.error('Failed to update profile');
        }
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className="profile">
            <div className="profile-section">
                <h2>User Details</h2>
                <div className="profile-details">
                    <label>
                        Username:
                        <input type="text" name="username" value={userDetails.username} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={userDetails.email} onChange={handleChange} />
                    </label>
                    <label>
                        Contact No:
                        <input type="text" name="contact" value={userDetails.contact} onChange={handleChange} />
                    </label>
                    <label>
                        Address:
                        <textarea name="address" value={userDetails.address} onChange={handleChange}></textarea>
                    </label>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            </div>
            <div className="bookings-section">
                <h2>My Bookings</h2>
                {
                    bookings.length==0 && <h2>No Bookings done</h2>
                }
                {
                    bookings.length>0 &&
                <table>
                    <thead>
                        <tr>
                            <th>Hotel Name</th>
                            <th>Room Type</th>
                            <th>Check In Date</th>
                            <th>Booking Status</th>
                            <th className='mini'>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => {
                            const hotel = hotels.find(hotel => booking.Hotel_id === hotel._id);
                            return (
                                <tr key={index}>
                                    <td>{hotel ? hotel.Hotel_name : 'Unknown Hotel'}</td>
                                    <td>{booking.Room_type}</td>
                                    <td>{formatDate(booking.Check_in_date)}</td>
                                    <td className={`status ${booking.Booking_status.toLowerCase()}`}>
                                        {booking.Booking_status}
                                    </td>
                                    <td className={`status mini`}>
                                        {booking.Payment_status}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                }
            </div>
        </div>
    );
};

export default Profile;
