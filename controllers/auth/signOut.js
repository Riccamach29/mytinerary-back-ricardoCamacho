import User from '../../models/User.js';

const signOut = async (req, res, next) => {
    try {
        const userId = req.user._id;
        await User.findOneAndUpdate(
            { _id: userId }, 
            { online: false },
            { new: true } // Devuelve el documento actualizado
        );
        return res.status(200).json({
            success: true,
            message: "Signed out successfully (online status updated)"
        });

    } catch (error) {
        console.error("Error during sign out:", error);
        next(error);
    }
};

export default signOut;