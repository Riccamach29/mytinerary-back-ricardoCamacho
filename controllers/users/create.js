import User from "../../models/User.js";

let Register = async (req, res, next) => {
    try {
        let userInfo = req.body;        
        let createUser = await User.create(userInfo);
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            response: createUser
        });
        
    } catch (error) {
        next(error)
        }
    }




export default Register; 