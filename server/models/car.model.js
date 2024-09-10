import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  top_speed: {
    type: Number,
    required: true
  },
  acceleration: {
    type: Number,
    required: true
  },
  handling: {
    type: Number,
    required: true
  },
  nitro: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

const Car = mongoose.model('Car', carSchema);

export default Car;