const cors = require('cors');

const corsOptions = {
    origin: ['http://127.0.0.1:5173', 'https://morent-dprieur.vercel.app'],
};

module.exports = cors(corsOptions);