const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Replace these with your own API credentials
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Morent', // The name of the folder in Cloudinary
        allowedFormats: ['jpg', 'png', 'jpeg'],
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // The file
    },
});

module.exports = {
    cloudinary,
    storage,
}