import User from "../models/User.js";

export default async (req, res, next) => {
  try {
      let mail = req.body.email;
      let account = await User.findOne({ email: mail });
      if (account) {
        return res.status(409).json({
          success: false,
          message: `User with email ${mail} already exists.`,
        });
      }
      next();
    } catch (error) {
    next(error);
  }
};
