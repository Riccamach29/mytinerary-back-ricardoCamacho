import User from "../../models/User.js";


let update = async (req, res, next) => {
    try {
        
        const userId = req.params.id;
        const updateData = req.body;

        // Nota sobre accountExist: El middleware accountExist debe correr *antes* de este controlador
        // en la cadena de rutas, y debe manejar la lógica de verificar si el email (si está presente
        // en updateData) ya existe para OTRO usuario.

      
        let updatedUser = await User.findByIdAndUpdate(
            userId,           
            { $set: updateData }, 
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            const error = new Error(`User not found with ID  "${userId}"`); 
            error.status = 404; 
            return next(error); 
        }

        
        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            response: updatedUser 
        });

    } catch (error) {
        console.error("Error to update user:", error);
        next(error);
    }
};

export default update;