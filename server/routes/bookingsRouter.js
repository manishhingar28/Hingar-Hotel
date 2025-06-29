/**
 * @module 	bookingsRouter
 */

import express from 'express';
import { check } from 'express-validator';
import { getBookings, getBooking, createBooking, cancelBooking, getPaymentStatus,sucessBooking } from '../controllers/bookingsController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * Route to obtains all bookings created by the authentified user
 * 
 * @route 	{GET} /bookings
 */
router.get('/', authenticateToken, getBookings);

/**
 * Route to obtains a booking by its id
 * 
 * @route 	{GET} /bookings/:id
 */
router.get('/:id', authenticateToken, getBooking);

/**
 * Route to add booking
 * 
 * @route 	{POST} /bookings/add
 */
router.post('/add', authenticateToken, createBooking);
router.put('/:id/success',sucessBooking);
/**
 * Route to cancel booking
 * 
 * @route 	{GET} /bookings/:id/cancel
 */
router.get('/:id/cancel', authenticateToken, cancelBooking);

/**
 * Route to get payment status
 * 
 * @route 	{GET} /bookings/:id/payment-status
 */
router.get('/:id/payment-status', authenticateToken, getPaymentStatus);

export default router;
