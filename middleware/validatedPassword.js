import bcryptjs from "bcryptjs";
import User from "../models/User.js";

export default (req, res, next) => {
        let passwordBody = req.body.password;
        let passwordDB = req.user.password;
  
        let compare = bcryptjs.compareSync(
            passwordBody,
            passwordDB
        );

        if (compare){
            return next();
        }
        return res.status(400).json({
            success: false,
            message: `Password is incorrect.`,
        });
}