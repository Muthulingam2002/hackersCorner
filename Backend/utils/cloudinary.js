// require("dotenv").config();
// const cloudinary = require("cloudinary").v2;

import cloud from "cloudinary"
const cloudinary = cloud.v2
cloudinary.config({
    cloud_name: "dqalbizzj",
    api_key: "973282892442553",
    api_secret: "Ej7wPa6Bz7vaiuc3MghHYep37yo",
});

export { cloudinary } 