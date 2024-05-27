const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const route = require("./routes/userRoute.js");

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGOURL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Database is connected successfully.");
    app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}`);
    });
}).catch((error) => console.log(error));

app.use("/api/user", route);
