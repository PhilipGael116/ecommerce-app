import { Schema, model } from "mongoose";

const sellerSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: String,
    phone: String,
    role: String,
    status: {
        type: String,
        default: 'seller'
    },
    
}, {timestamps: true})