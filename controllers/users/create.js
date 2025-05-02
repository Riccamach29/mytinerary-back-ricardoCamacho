import User from "../../models/User.js";

let createOne = async (req, res, next) => {
    try {
        let userInfo = req.body;        
        let createUser = await User.create(userInfo);
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            response: createUser
        });
        
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "Email already exists",
                error: "A user with this email is already registered"
            })
        }
        // Si es otro tipo de error, pásalo al manejador de errores
        next(error)
    }
};

let createMany = async (req, res, next) => {
    try {
        let userInfo = req.body;       
        let createdUsers = await User.insertMany(userInfo);
        return res.status(201).json({
            response: createdUsers
        });
        
    } catch (error) {
        next(error);
    }
};

export { createOne, createMany }; 