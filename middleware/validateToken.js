import { response } from "express";

const validateToken = async (req, res, next) => {
    try{
        return res.status(200).json({
            success: true,
            response: {
                email: req.user.email,
                id: req.user._id,
                name: req.user.name,
                photo: req.user.photo,
                country: req.user.country,
            }
        });
    }catch (error) {
        next(error);
    }
}

export default validateToken