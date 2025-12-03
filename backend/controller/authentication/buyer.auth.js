import Buyer from '../models/buyer.model.js'
import jwt from "jsonwebtoken"

export const createAccount = async(req, res) =>  {
    const { email, password } = req.body;

    //const emailRegex
}