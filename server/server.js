import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './db/db.js';
import authRouter from './routes/authRouter.js';
import hotelRouter from './routes/hotelRouter.js'
import bookingsRouter from './routes/bookingsRouter.js';
import userRouter from './routes/userRoutes.js';
import paymentRouter from './routes/paymentRouter.js'
import reviewRoter from './routes/reviewRouter.js'
import morgan from 'morgan';
dotenv.config(); 

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); 
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Welcome to Hotel Booking API');
})
// Routes
app.use('/api/auth', authRouter);
app.use('/api/hotel', hotelRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/user', userRouter);
app.use('/api/payment',paymentRouter);
app.use('/api/review',reviewRoter);

const PORT = process.env.PORT || 5000;

connect();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
