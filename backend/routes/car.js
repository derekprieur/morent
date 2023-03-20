const express = require('express');
const router = express.Router();
const Car = require('../models/car');
const verify = require('../middleware/verify');

router.post('/api/addcar', async (req, res) => {
    console.log('req.body: ', req.body);
    const carData = req.body;
    try {
        const newCar = new Car(carData);
        await newCar.save();
        res.status(201).json(newCar);
        console.log('Car added');
    } catch (error) {
        res.status(400).json({ message: 'Error adding car', error });
        console.log('Error adding car');
    }
});

router.get('/api/cars', async (req, res) => {
    try {
        const cars = await Car.find();
        console.log('cars: ', cars)
        res.status(200).json(cars);
    } catch (error) {
        res.status(400).json({ message: 'Error getting cars', error });
        console.log('Error getting cars');
    }
});

module.exports = router;