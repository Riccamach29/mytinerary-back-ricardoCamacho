import Itinerary from "../../models/Itinerary.js";
import mongoose from "mongoose";

let remove = async (req, res, next) => {
    try {
        let { id } = req.params;

        // Verificar si el ID es válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next({ status: 400, message: "El ID proporcionado no es válido" });
        }

        // Intentar eliminar el itinerario
        let deletedItinerary = await Itinerary.findByIdAndDelete(id);

        // Verificar si se encontró y eliminó el documento
        if (!deletedItinerary) {
            return next({ status: 404, message: `No se encontró itinerario con el ID "${id}"` });
        }

        return res.status(200).json({
            success: true,
            message: "Itinerario eliminado correctamente",
            details: deletedItinerary
        });

    } catch (error) {
        console.error("Error al eliminar itinerario:", error);
        return next(error); // Delegar el error al middleware de manejo de errores
    }
};

export default remove;
