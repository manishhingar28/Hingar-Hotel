import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  User_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Booking_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  Payment_method: {
    type: String,
    required: true,
    enum: ['Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer', 'UPI'], 
  },
  Payment_status: {
    type: String,
    required: true,
    enum: ['Pending', 'Completed', 'Failed', 'Cancelled'], 
  },
  Transaction_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const PayementModel = mongoose.model('Payment', paymentSchema);
export default PayementModel;
