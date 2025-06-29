import React, { useState, useContext, useEffect } from 'react';
import './styles/Admin.scss';
import { ImCross } from "react-icons/im";
import { UserContext } from '../context/UserContext';
import { URL } from '../utils/url';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
  const navigate=useNavigate();
  const { hotels, setHotels,role } = useContext(UserContext);
  const [editingHotel, setEditingHotel] = useState(false);
  const [formValues, setFormValues] = useState({});
  useEffect(()=>{
    if(role!=='admin'){
      navigate('/');
    }
  },[role])
  const handleEdit = (hotel) => {
    setEditingHotel(true);
    setFormValues(hotel);
  };

  const handleChange = (e, roomIndex = null, field = null) => {
    if (roomIndex !== null && field) {
      const updatedRoomTypes = formValues.Room_types.map((room, index) =>
        index === roomIndex ? { ...room, [field]: e.target.value } : room
      );
      setFormValues({ ...formValues, Room_types: updatedRoomTypes });
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
  };

  const handleAddRoom = () => {
    setFormValues({
      ...formValues,
      Room_types: [...formValues.Room_types, { Type: '', Price: '', Availability: '', Amenities: [] }]
    });
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
      try{
       const res=await axios.put(`${URL}/hotel/update/${formValues._id}`,{updatedData:formValues});
       if(res.status===200){
         toast.success(res.data.message)
         setHotels([...hotels.filter(hotel=>hotel._id!==formValues._id),formValues]);
         setEditingHotel(!editingHotel);
       }
      }
      catch(err){
        toast.error(err.response.data.message);
      }
  };

  return (
    <>
      {editingHotel && (
        <form className='update-form' onSubmit={handleFormSubmit}>
          <div className="cross">
            <ImCross onClick={() => setEditingHotel(!editingHotel)} />
          </div>
          <h2>Update Hotel Details</h2>
          <div className='form-group'>
            <label>Hotel Name</label>
            <input
              type='text'
              name='Hotel_name'
              value={formValues.Hotel_name}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea
              name='Description'
              value={formValues.Description}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Location</label>
            <input
              type='text'
              name='Location'
              value={formValues.Location}
              onChange={handleChange}
            />
          </div>
          <div className='room-group'>
            <h3>Room Types</h3>
            {formValues.Room_types.map((room, index) => (
              <div key={index} className='room-info'>
              <div className='room-info-col'>
               <label>
                  <strong>Type-{index + 1}</strong>
               </label>
                <input
                  type='text'
                  placeholder='Type'
                  value={room.Type}
                  onChange={(e) => handleChange(e, index, 'Type')}
                />
              </div>
              <div className='room-info-col'>
                <label><strong>Price</strong></label>
                <input
                  type='number'
                  placeholder='Price'
                  value={room.Price}
                  onChange={(e) => handleChange(e, index, 'Price')}
                />
                </div>
                <div className='room-info-col'>
                <label><strong>Availability</strong></label>
                <input
                  type='number'
                  placeholder='Availability'
                  value={room.Availability}
                  onChange={(e) => handleChange(e, index, 'Availability')}
                />
                </div>
                <div className='room-info-col'>
                <label><strong>Amenities</strong></label>
                <input
                  type='text'
                  placeholder='Amenities'
                  value={room.Amenities.join(', ')}
                  onChange={(e) => handleChange(e, index, 'Amenities')}
                />
              </div>
              </div>
            ))}
            <button className='add-room-button' onClick={handleAddRoom}>+ Add Room</button>
          </div>
          <button className='update-button' type='submit'>Update Hotel</button>
        </form>
      )}


      <div className={editingHotel?'admin-panel blur':'admin-panel'}>
        <h1>Admin Panel</h1>
        {hotels?.map((hotel) => (
          <div key={hotel.Hotel_name} className='hotel-card'>
            <h2>{hotel.Hotel_name}</h2>
            <p>{hotel.Description}</p>
            <h3>Room Types</h3>
            {hotel.Room_types.map((room) => (
              <div key={room.Type} className='room-type'>
                <div className='room-info'>
                  <span><strong>Type:</strong> {room.Type}</span>
                  <span><strong>Price:</strong> ${room.Price}</span>
                  <span><strong>Amenities:</strong> {room.Amenities.join(', ')}</span>
                </div>
                <div className='availability'>
                  <input
                    type="number"
                    value={room.Availability}
                    onChange={(e) => handleAvailabilityChange(hotel.Hotel_name, room.Type, parseInt(e.target.value, 10))}
                  />
                </div>
              </div>
            ))}
            <button className='update-button' onClick={() => handleEdit(hotel)}>Update Details</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Admin;
