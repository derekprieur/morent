require('dotenv').config();

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
        // generate access token
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
        refreshTokens.push(refreshToken);
        console.log(refreshTokens);
        res.json({ accessToken: accessToken, refreshToken: refreshToken });
    } else {
        res.status(400).json('username or password incorrect');
    }
});

app.post('/api/logout', verify, (req, res) => {
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter(token => token !== refreshToken);
    res.status(200).json('Logged out');
});


app.delete('/api/users/:id', verify, (req, res) => {
    if (req.user.id === req.params.id) {
        res.status(200).json('User has been deleted');
    } else {
        res.status(403).json('You can delete only your account');
    }
});

app.listen(3000)