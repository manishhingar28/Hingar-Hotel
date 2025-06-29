import Razorpay from "razorpay";
import crypto from "crypto";


const verifyPayment= async(req,res)=>{
    try {
        const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto.createHmac("sha256", process.env.Razorpay_keySecret).update(sign.toString()).digest("hex");
        if(razorpay_signature===expectedSign){
           return res.status(200).json({message:"Payment verified Successfull"});
        }else{
        return res.status(400).json({message:"Payment verification failed"});
    }
    } catch (error) {
        console.log(error);
    }
}

const addBooking = async(req,res)=>{
    try{
        const { price} = req.body; 
        if (!price || isNaN(price)) {
          return res.status(400).json({ message: "Invalid rent price" });
        }
    const razorpay = new Razorpay({
        key_id:process.env.Razorpay_keyID,
        key_secret:process.env.Razorpay_keySecret,
    }); 
    const orderOptions = {
        amount: price * 100, // Amount in paise
        currency: "INR",
        receipt: crypto.randomBytes(10).toString('hex'),
      };
    razorpay.orders.create(orderOptions, (error, order) => {
        if (error) {
            console.error("Error creating order:", error);
            return res.status(500).send({ message: "Something went wrong" });
        }
        const orderDetails={
            razorpayOrderId:order.id
        }
        return res.status(200).json({data:order
        ,orderDetails});
    });
}catch(error){
    console.error(error);
    res.status(500).send({ error: error.message || "Internal Server Error" });
}
}

export {addBooking,verifyPayment};