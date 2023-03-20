require('dotenv').config();

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mongoose = require('mongoose');

const connectDB = require('./config/database');

connectDB();

const app = express();

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

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
});

const Car = mongoose.model('Car', carSchema);

app.use(cors({
    origin: 'http://127.0.0.1:5173',
})
);
app.use(express.json());


const users = [
    {
        id: '1',
        username: 'Derek',
        password: '1234',
    },
    {
        id: '2',
        username: 'John',
        password: '4321',
    }
]

let refreshTokens = [];

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json('Token is not valid');
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json('Access Denied on verify');
    }
}

app.post('/api/refresh', (req, res) => {
    // take the refresh token from the user
    const refreshToken = req.body.token;

    // send error if no token or token is invalid
    console.log(refreshToken);
    if (!refreshToken) return res.status(401).json('Access Denied');
    console.log(refreshTokens);
    if (!refreshTokens.includes(refreshToken)) return res.status(403).json('Refresh token is not valid');
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return err;
        refreshTokens = refreshTokens.filter(token => token !== refreshToken);
        const newAccessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        const newRefreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

        refreshTokens.push(newRefreshToken);

        res.status(200).json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
    });
    // if token is valid, create a new access token, refresh token, and send to the user
});

app.post('/api/login', async (req, res) => {
    console.log('test login');
    const { username, password } = req.body;

    // Check if user already exists in the database
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        // Check if the provided password matches the hashed password in the database
        const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

        if (isPasswordMatch) {
            // Generate access token
            const accessToken = jwt.sign(existingUser.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
            const refreshToken = jwt.sign(existingUser.toJSON(), process.env.REFRESH_TOKEN_SECRET);
            refreshTokens.push(refreshToken);
            console.log(refreshTokens);

            res.json({ accessToken: accessToken, refreshToken: refreshToken, user: existingUser });
        } else {
            res.status(400).json('username or password incorrect');
            console.log('username or password incorrect');
        }
    } else {
        // User not found, notify the user
        res.status(400).json('username or password incorrect');
        console.log('username or password incorrect');
    }
});

app.post('/api/logout', verify, (req, res) => {
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter(token => token !== refreshToken);
    res.status(200).json('Logged out');
});

app.post('/api/addcar', async (req, res) => {
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

app.delete('/api/users/:id', verify, (req, res) => {
    if (req.user.id === req.params.id) {
        res.status(200).json('User has been deleted');
    } else {
        res.status(403).json('You can delete only your account');
    }
});

app.post('/api/signup', async (req, res) => {
    const { username, password } = req.body;

    // Check if the username already exists in the database
    const existingUser = await User.findOne({ username });
    console.log(existingUser);
    if (existingUser) {
        res.status(400).json('Username already exists');
    } else {
        // Hash the password before saving the new user
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user with the hashed password
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        // Generate access and refresh tokens
        const accessToken = jwt.sign(newUser.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign(newUser.toJSON(), process.env.REFRESH_TOKEN_SECRET);
        refreshTokens.push(refreshToken);

        res.json({ accessToken: accessToken, refreshToken: refreshToken, user: newUser });
    }
});

app.listen(3000)