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

router.patch('/api/cars/:id/toggleFavorite', verify, async (req, res) => {
    console.log('Toggling favorite');
    console.log(req.params.id);
    const userId = req.user._id;
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        const userIndex = car.favorites.indexOf(userId);
        if (userIndex === -1) {
            car.favorites.push(userId);
        } else {
            car.favorites.splice(userIndex, 1);
        }

        await car.save();

        res.status(200).json({ isFavorited: userIndex === -1, car });
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

const getStartAndEndOfDay = (date) => {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return { startOfDay, endOfDay };
}


router.get('/api/availablecars', async (req, res) => {
    try {
        const cars = await Car.find();
        const availableCars = [];
        const currentDate = new Date();
        const { startOfDay, endOfDay } = getStartAndEndOfDay(currentDate);

        for (const car of cars) {
            const existingRentals = await Rental.find({
                car: car._id,
                $or: [
                    {
                        pickupDate: { $lte: endOfDay },
                        dropOffDate: { $gte: startOfDay },
                    },
                ],
            });

            if (existingRentals.length === 0) {
                availableCars.push(car);
            }
        }

        res.status(200).json(availableCars);
    } catch (error) {
        res.status(400).json({ message: 'Error getting available cars', error });
        console.log('Error getting available cars');
    }
});

router.get('/api/searchcars', async (req, res) => {
    const searchQuery = req.query.q;

    try {
        const cars = await Car.find({
            title: { $regex: new RegExp(searchQuery, 'i') }
        });
        res.status(200).json(cars);
    } catch (error) {
        res.status(400).json({ message: 'Error searching for cars', error });
        console.log('Error searching for cars');
    }
});

router.get('/api/cars/:id/isFavorited', verify, async (req, res, next) => {
    const userId = req.user._id;
    const carId = req.params.id;
    try {
        const car = await Car.findById(carId);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        const isFavorited = car.favorites.includes(userId);
        res.status(200).json({ isFavorited });
    } catch (error) {
        res.status(400).json({ message: 'Error checking favorite status', error });
        console.log('Error checking favorite status', error);
    }
});

router.get('/api/popularcars', async (req, res) => {
    try {
        const cars = await Car.find()
        console.log(cars);
        cars.sort((a, b) => b.favorites.length - a.favorites.length);
        res.status(200).json(cars);
    } catch (error) {
        res.status(400).json({ message: 'Error getting popular cars', error });
        console.log('Error getting popular cars', error);
    }
});


module.exports = router;