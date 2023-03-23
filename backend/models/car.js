const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    title: String,
    brand: String,
    rentPrice: Number,
    capacity: Number,
    type: String,
    location: String,
    pickupLocation: String,
    dropOffLocation: String,
    availabilityFrom: Date,
    availabilityTo: Date,
    images: [String],
    isFavorite: { type: Boolean, default: false },
    owner: String,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;