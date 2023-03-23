const express = require('express');
const router = express.Router();
const Car = require('../models/car');
const verify = require('../middleware/verify');
const upload = require('../middleware/multer');

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

module.exports = router;