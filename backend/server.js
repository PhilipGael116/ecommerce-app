import express from "express"
import dotenv from "dotenv"
import connectMongoose from "./db.js";

dotenv.config()

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.listen(PORT, () => {
    connectMongoose();
    console.log(`Server is running on port ${PORT}`);
})

