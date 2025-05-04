import User from '../models/User.js';

export default async (req, res, next) => {
   try {
    let mail = req.body.email;
    let account = await User.findOne({ email: mail });
    if (account) {
        req.user ={
            id: account._id,
            name: account.name,
            email: account.email,
            password: account.password,
            photo: account.photo,
            country: account.country,
            role: account.role,
        }
        
        return next();
    }
    return res.status(400).json({
        success: false,
        message: `User with email ${mail} does not exists.`,
    });
   } catch (error) {
         next(error);
   }
}