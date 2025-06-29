import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import './styles/ReviewCard.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { URL } from '../utils/url';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

const ReviewCard = ({ setisReview }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [reviewDetails, setReviewDetails] = useState({
        rating: 0,
        message: '',
    });
    const token = localStorage.getItem('token');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviewDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleRating = (rating) => {
        setReviewDetails((prevDetails) => ({
            ...prevDetails,
            rating,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!token || token === null || token === undefined) {
                toast.error('Please sign in first');
                setTimeout(() => {
                    navigate('/signin');
                }, 1500);
                return;
            }
            const res = await axios.post(`${URL}/review`, {
                Hotel_id: id,
                Rating: reviewDetails.rating,
                Review_text: reviewDetails.message
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.status === 201) {
                toast.success(res.data.message);
                setisReview(false);
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                toast.error(err.response.data.message);
            } else {
                toast.error('An error occurred while submitting your review.');
            }
            setisReview(false);
        }
    };

    return (
        <div className="review-card">
            <div className="review-card-header">
                <h2>Submit Your Review</h2>
                <ImCross onClick={() => setisReview(false)} className="close-icon" />
            </div>
            <form onSubmit={handleSubmit} className="review-form">
                <label>
                    Rating:
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FontAwesomeIcon
                                key={star}
                                icon={faStar}
                                className={star <= reviewDetails.rating ? 'star filled' : 'star'}
                                onClick={() => handleRating(star)}
                            />
                        ))}
                    </div>
                </label>
                <label>
                    Review:
                    <textarea
                        name="message"
                        value={reviewDetails.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <button type="submit" className="submit-button">
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default ReviewCard;
