import Review from "../models/Review.model.js";
import User from "../models/User.model.js";

export const addReview = async (req, res) => {
    try {
        const { Hotel_id, Rating, Review_text } = req.body;
        const user=await User.findById(req.user.id);
        const review = new Review({
        User_id: req.user.id,
        UserName:user.userName,
        Hotel_id,
        Rating,
        Review_text,
        });
        await review.save();
        res.status(201).json({ message: "Review added successfully" });
    } catch (err) {
        res.status(500).send({message: "Server error"});
    }
}

export const getReview = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}