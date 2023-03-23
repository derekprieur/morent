const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true,
    },
    renter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    pickupDate: {
        type: Date,
        required: true,
    },
    dropOffDate: {
        type: Date,
        required: true,
    },
    pickupTime: {
        type: String,
        required: true,
    },
    dropOffTime: {
        type: String,
        required: true,
    },
});

const Rental = mongoose.model('Rental', RentalSchema);
module.exports = Rental;
