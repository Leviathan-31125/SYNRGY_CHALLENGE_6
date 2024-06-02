import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const GeneralAuthorize = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        const token = bearerToken.split(" ")[1]

        const tokenPayload = jwt.verify(token, 'secret')
        
        req.user = await User.findByPk(tokenPayload.id);
        next() 
    } catch (err) {
        res.status(401).json({message: "Unauthorized: you aren't log on" })
    }
}