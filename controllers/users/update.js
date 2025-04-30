import User from "../../models/User.js";
import mongoose from "mongoose";

let update = async (req, res, next) => {
    try {
        let userInfo = req.body;   
        
        // Verificar si el ID es válido
        if (!mongoose.Types.ObjectId.isValid(userInfo._id)) {
            return next({ status: 400, message: "El ID proporcionado no es válido" });
        }
        
        // Prepara el objeto con los campos a actualizar
        let fieldsToUpdate = {};
        if (userInfo.name !== undefined) fieldsToUpdate.name = userInfo.name;
        if (userInfo.email !== undefined) fieldsToUpdate.email = userInfo.email;
        if (userInfo.password !== undefined) fieldsToUpdate.password = userInfo.password;
        if (userInfo.photo !== undefined) fieldsToUpdate.photo = userInfo.photo;
        if (userInfo.country !== undefined) fieldsToUpdate.country = userInfo.country;
        
        // Verifica que haya al menos un campo para actualizar
        if (Object.keys(fieldsToUpdate).length === 0) {
            return next({ status: 400, message: "No se proporcionaron campos para actualizar" });  
        }
        
        // Realiza la actualización y obtiene el documento actualizado        
        let updatedUser = await User.findByIdAndUpdate(
            userInfo._id,
            { $set: fieldsToUpdate },
            { new: true }
        );

        // Verificar si se encontró y actualizó el documento
        if (!updatedUser) {
            return next({ status: 404, message: `No se encontró usuario con el ID "${userInfo._id}"` });
        }

        return res.status(200).json({
            success: true,
            message: "Usuario actualizado correctamente",
            details: updatedUser
        });

    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        return next(error); // Delegar el error al middleware de manejo de errores
    }
};

export default update;
      