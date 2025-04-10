import Itinerary from "../../models/Itinerary.js";
import mongoose from "mongoose";

let update = async (req, res, next) => {
    try {
        let itineraryInfo = req.body;   
        
        // Verificar si el ID es válido
        if (!mongoose.Types.ObjectId.isValid(itineraryInfo._id)) {
            return next({ status: 400, message: "El ID proporcionado no es válido" });
        }
        
        // Prepara el objeto con los campos a actualizar
        let fieldsToUpdate = {};
        if (itineraryInfo.name !== undefined) fieldsToUpdate.name = itineraryInfo.name;
        if (itineraryInfo.photo !== undefined) fieldsToUpdate.photo = itineraryInfo.photo;
        if (itineraryInfo.user !== undefined) fieldsToUpdate.user = itineraryInfo.user;
        if (itineraryInfo.userPhoto !== undefined) fieldsToUpdate.userPhoto = itineraryInfo.userPhoto;
        if (itineraryInfo.price !== undefined) fieldsToUpdate.price = itineraryInfo.price;
        if (itineraryInfo.duration !== undefined) fieldsToUpdate.duration = itineraryInfo.duration;
        if (itineraryInfo.hashtags !== undefined) fieldsToUpdate.hashtags = itineraryInfo.hashtags;
        if (itineraryInfo.city !== undefined) fieldsToUpdate.city = itineraryInfo.city;
        
        // Verifica que haya al menos un campo para actualizar
        if (Object.keys(fieldsToUpdate).length === 0) {
            return next({ status: 400, message: "No se proporcionaron campos para actualizar" });  
        }
        
        // Realiza la actualización y obtiene el documento actualizado
        let updatedItinerary = await Itinerary.findByIdAndUpdate(
            itineraryInfo._id,
            { $set: fieldsToUpdate },
            { new: true }
        );
        
        // Verifica si se encontró y actualizó el documento
        if (!updatedItinerary) {
            return next({ status: 404, message: `No se encontró itinerario con el ID "${_id}"` });
        }

        return res.status(200).json({
            success: true,
            message: "Itinerario actualizado correctamente",
            details: updatedItinerary
        });
        
    } catch (error) {
        console.error("Error al actualizar itinerario:", error);
        return next(error);
    }
};

export default update;
