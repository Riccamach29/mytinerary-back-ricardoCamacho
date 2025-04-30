import User from "../../models/User.js";

let update = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;

        let updatedUser = await User.findByIdAndUpdate(
            userId,           // ID desde los parámetros de la URL
            { $set: updateData }, // Datos validados desde el cuerpo
            { new: true, runValidators: true } // Opciones: devolver actualizado y ejecutar validadores
        );

     
        if (!updatedUser) {
             const error = new Error(`No se encontró usuario con el ID "${userId}"`);
             error.status = 404;
             return next(error);
        }

        return res.status(200).json({
            success: true,
            message: "Usuario actualizado correctamente",
            response: updatedUser 
        });

    } catch (error) {
       
        console.error("Error al actualizar usuario:", error);
        next(error);
    }
};

export default update;