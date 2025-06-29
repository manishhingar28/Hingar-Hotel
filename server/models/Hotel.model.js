import mongoose from 'mongoose';

const HotelSchema = mongoose.Schema({
    Hotel_name: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Photos: {
        type: [String],
        default: []
    },
    Room_types: {
        type: [
            {
                Type: {
                    type: String,
                    required: true
                },
                Price: {
                    type: Number,
                    required: true
                },
                Amenities: {
                    type: [String],
                    default: []
                },
                Availability:{
                    type: Number,
                    default: 3
                }
            }
        ],
        required: true
    }
});

const Hotel = mongoose.model('Hotel', HotelSchema);

export default Hotel;
