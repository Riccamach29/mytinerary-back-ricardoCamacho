import Itinerary from "../../models/Itinerary.js";
import "../../models/City.js";

let allItineraries = async (req, res, next) => {
    try {
        let all = await Itinerary.find().populate("city", "").exec();
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

let itineraryByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.nameParams;
        let itinerary = await Itinerary.find({ name: nameQuery }).populate("city", "").exec();

        if (!itinerary || itinerary.length === 0) {
            const error = new Error('Itinerario no encontrado');
            error.status = 404;
            return next(error);
        }

        return res.status(200).json({
            response: itinerary
        });
    }
    catch (error) {
        next(error)
    }
}

let itineraryById = async (req, res, next) => {
    try {
        let idQuery = req.params.idParams;
        let itinerary = await Itinerary.findById(idQuery).populate("city", "").exec();

        if (!itinerary) {
            const error = new Error('Itinerario no encontrado');
            error.status = 404;
            return next(error);
        }

        return res.status(200).json({
            response: itinerary
        });
    } catch (error) {
        next(error)
    }
}

export { allItineraries, itineraryByName, itineraryById }