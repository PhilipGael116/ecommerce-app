import {model, Schema} from "mongoose";

const buyerSchema = new Schema ({
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
    status: {
        type: String,
        default: 'buyer'
    },
}, {timestamps: true})

export default model("Buyer", buyerSchema);