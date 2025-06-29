# Hotel Booking Platform

## Overview
Welcome to the Hotel Booking Platform! This web application allows users to register and log in to their accounts, explore top hotels, and view detailed information about each hotel. Users can add reviews, book hotels via Razorpay, and manage their bookings and profile details.

## Features
- **User Authentication:** Register and log in to your account.
- **Top Hotels:** View a curated list of top hotels on the main page.
- **Explore Hotels:** Browse all available hotels on the explore page.
- **Hotel Details:** View detailed information and photos of each hotel.
- **Reviews:** Add and read reviews for each hotel.
- **Booking:** Book hotels using Razorpay for secure payments.
- **Profile Management:** View your bookings and update your profile details.

## Setup Instructions

### Prerequisites
- Node.js (v14.x or higher)
- MongoDB (local or cloud instance)
- Razorpay account for payment integration

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/hotel-booking-platform.git
   cd hotel-booking-platform```

2. **Install dependencies**
    ```npm install
    cd client
    npm install
    cd ..```

3. **Environment Variables**
   Create a .env file in the root directory with the following variables:
        ```MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret_key
        RAZORPAY_KEY_ID=your_razorpay_key_id
        RAZORPAY_KEY_SECRET=your_razorpay_key_secret```

4. **Start the server**

     ```nodemon server.js```

5. **Start the client**
     ```cd client
     npm run dev```