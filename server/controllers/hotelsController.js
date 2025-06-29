/**
 * @module 	roomsController
 */

import Hotel from "../models/Hotel.model.js";

/**
 * Add room data to database.
 * 
 * @name 	createRoom
 * @param 	{Request} req - Express request object
 * @param 	{Response} res - Express response object
 * @return	{Object} - Json object of created room
 */
export const createRoom = async (req, res) => {
	try {
		const newRoom = await Room.create(req.body);
		res.status(201).json(newRoom);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

/**
 * Remove room from database
 * 
 * @name	deleteRoom
 * @param 	{Request} req - Express request object
 * @param 	{Response} res - Express response object
 * @return	{Object} - Json object of message
 */
export const deleteRoom = async (req, res) => {
	try {
		const roomId = req.params.id;
		const deleteRoom = await Room.findByIdAndDelete(roomId);

		if (!deleteRoom) {
			return res.status(404).json({ message: 'Room not found' });
		}

		res.status(200).json({ message: 'Room deleted successfully' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

/**
 * Get room
 * 
 * @name	getRoom
 * @param 	{Request} req - Express request object
 * @param 	{Response} res - Express response object
 * @return 	{Object} - Json object of the room
 */
export const getHotel = async (req, res) => {
	try {
		const hotel = await Hotel.findById(req.params.id);

		if (!hotel) {
			return res.status(404).json({ message: 'Hotel not found' });
		}
		res.status(200).json(hotel);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

/**
 * Get all rooms from database
 * 
 * @name	getRooms
 * @param 	{Request} req - Express request object
 * @param 	{Response} res - Express response object
 * @return	{Object} -Json object of all rooms
 */
export const getHotels = async (req, res) => {
	try {
		const hotels = await Hotel.find({});
		res.status(200).json(hotels);
	} catch (err) {
		res.status(500).json({ message: "Internal Server Error" });
	}
}

export const searchHotels =async(req,res)=>{
	try{
		const location = new RegExp(req.query.location, 'i');
		const hotels = await Hotel.find({Location: location});
		res.status(200).json(hotels);
	}
	catch(err){
		res.status(500).json({message:"Internal Server Error"});
	}
}

export const updateavailability=async(req,res)=>{
	try{
		const {Room_Type,newAvailablity}=req.body;
		const hotel = await Hotel.findById(req.params.id);
		if (!hotel) {
			return res.status(404).json({ message: 'Hotel not found' });
		}
		const room=hotel?.Room_types.find(room=>room.Type===Room_Type);
		if(!room){
			return res.status(404).json({ message: 'Room not found' });
		}
		room.Availability=newAvailablity;
		await hotel.save();
		res.status(200).json({message:"Room availability updated successfully"});
	}
	catch(err){
		res.status(500).json({message:"Internal Server Error"});
	}
}

export const updateHotel = async (req, res) => {
	try {
	  const { id } = req.params;
	  const updatedData = req.body;
	  const hotel = await Hotel.findById(id);
	  if (!hotel) {
		return res.status(404).json({ message: 'Hotel not found' });
	  }
	  for (const key in updatedData) {
		if (updatedData.hasOwnProperty(key)) {
		  hotel[key] = updatedData[key];
		}
	  }
	  await hotel.save();
	  res.status(200).json({ message: 'Hotel details updated successfully', hotel });
	} catch (err) {
	  res.status(500).json({ message: 'Internal Server Error', error: err.message });
	}
  };