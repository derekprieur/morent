const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const verify = require('../middleware/verify');

let refreshTokens = [];

router.post('/api/refresh', (req, res) => {
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

router.post('/api/login', async (req, res) => {
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

router.post('/api/logout', verify, (req, res) => {
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter(token => token !== refreshToken);
    res.status(200).json('Logged out');
});

router.delete('/api/users/:id', verify, (req, res) => {
    if (req.user.id === req.params.id) {
        res.status(200).json('User has been deleted');
    } else {
        res.status(403).json('You can delete only your account');
    }
});

router.post('/api/signup', async (req, res) => {
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

module.exports = router;