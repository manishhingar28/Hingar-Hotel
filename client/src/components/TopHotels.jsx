import React, { useContext } from 'react'
import './styles/TopHotels.scss'
import HotelCard from './HotelCard';
import { UserContext } from '../context/UserContext';
const TopHotels = () => {
    const {hotels}=useContext(UserContext);
    const tophotels=hotels?.filter(hotel=>hotel?.top_hotel==="True");
    return (
        <>
            <div className='tophotels'>
                <div className='tophotels-heading'>
                    <h1>Our Top Hotels</h1>
                </div>
                <div className='explore_hotels'>
                    {tophotels?.map((hotel, index) => {
                        return (
                           <HotelCard hotel={hotel} key={index} index={index}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TopHotels
