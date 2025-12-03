import { connect } from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectMongoose = async() => {
    try {
        const conn = await connect(MONGO_URI);
        console.log(`Connected to MongoDB ${conn.connection.host}`);
    } catch (error) {
        console.log(`Failed to connect to MongoDB ${error.message}`);
    }
}

export default connectMongoose;