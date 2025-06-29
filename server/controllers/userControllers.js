import Review from "../models/Review.model.js";
import PayementModel from "../models/PayementModel.model.js";
import Calendar from "../models/Calendar.model.js";
export const createReview = async (req, res) => {
  try {
    const { User_id, Booking_id, Rating, Review_text } = req.body;
    const newReview = new Review({
      User_id,
      Booking_id,
      Rating,
      Review_text,
    });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCalendar = async (req, res) => {
    try {
        const { Availability, Room_id, date } = req.body;
        const newCalendar = new Calendar({
            Availability,
            Room_id,
            date,
        });
        await newCalendar.save();
        res.status(201).json(newCalendar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const createPayment = async (req, res) => {
    try {
        const { User_id, Booking_id, Amount, Payment_method, Payment_status } = req.body;
        const newPayment = new PayementModel({
            User_id,
            Booking_id,
            Amount,
            Payment_method,
            Payment_status,
        });
        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};