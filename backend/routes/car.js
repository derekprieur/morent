const express = require('express');

const Car = require('../models/car');
const Rental = require('../models/rental');
const verify = require('../middleware/verify');
const upload = require('../middleware/multer');

const router = express.Router();

router.post('/api/addcar', verify, upload.array('files'), async (req, res) => {
    console.log('Adding car');
    const carData = req.body;
    console.log(carData);

    const images = req.files.map((file) => file.path);

    carData.images = images;

    try {
        const newCar = new Car(carData);
        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        res.status(400).json({ message: 'Error adding car', error });
        console.log('Error adding car', error);
    }
});

router.get('/api/cars', async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(400).json({ message: 'Error getting cars', error });
        console.log('Error getting cars');
    }
});

router.patch('/api/cars/:id/toggleFavorite', async (req, res) => {
    console.log('Toggling favorite');
    console.log(req.params.id);
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        car.isFavorited = !car.isFavorited;
        await car.save();

        res.status(200).json(car);
    } catch (error) {
        res.status(400).json({ message: 'Error toggling favorite', error });
        console.log('Error toggling favorite');
    }
});

router.patch('/api/rentcar', verify, async (req, res) => {
    const { carId, pickupDate, dropOffDate, pickupTime, dropOffTime } = req.body;
    const renterId = req.user._id;
    console.log(carId, 'carId');

    try {
        const car = await Car.findById(carId);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        const existingRentals = await Rental.find({
            car: carId,
            $or: [
                {
                    pickupDate: { $lte: pickupDate },
                    dropOffDate: { $gte: pickupDate },
                },
                {
                    pickupDate: { $lte: dropOffDate },
                    dropOffDate: { $gte: dropOffDate },
                },
            ],
        });

        if (existingRentals.length > 0) {
            return res.status(400).json({ message: 'Car is already rented during the requested period' });
        }

        const newRental = new Rental({
            car: carId,
            renter: renterId,
            pickupDate,
            dropOffDate,
            pickupTime,
            dropOffTime,
        });

        await newRental.save();

        res.status(200).json({ message: 'Car rented successfully', rental: newRental });
    } catch (error) {
        res.status(400).json({ message: 'Error renting car', error });
        console.log('Error renting car', error);
    }
});

module.exports = router;