import Buyer from '../models/buyer.model.js'
import jwt from "jsonwebtoken"

export const register = async(req, res) =>  {
    const { email, password, name } = req.body;

    try {
        
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if (!emailRegex.test(email)){
            res.status(400).json({ error: "Invalid email" })
        }

        const buyer = Buyer.findOne({email});

        if(buyer) {
            res.status(400).json({ error: "Email is taken!" })
        }


    } catch (error) {
        console.log("Error in register controller", error.message)
        res.status(500).json({ error: "Internal Server Error" })
        
    }
}