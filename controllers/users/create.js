import User from "../../models/User";

let createOne = async (req, res, next) => {
    try {
        let userInfo = req.body;        
        let createUser = await User.create(userInfo);
        return res.status(201).json({
            response: createUser
        });
        
    } catch (error) {
        next(error);
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