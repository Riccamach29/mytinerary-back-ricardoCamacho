import Itinerary from "../../models/Itinerary.js";

let createOne = async (req, res, next) => {
    try {
        let itineraryInfo = req.body;

        // Validación de campos requeridos
        const { name, photo, user, userPhoto, price, duration, hashtags, city } = itineraryInfo;
        if (!name || !photo || !user || !userPhoto || !price || !duration || !hashtags || !city) {
            const error = new Error("Faltan campos obligatorios");
            error.status = 400;
            return next(error);
        }
        let createItinerary = await Itinerary.create(itineraryInfo);
        return res.status(201).json({
            response: createItinerary
        });
        
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let itineraryInfo = req.body;

        // Validación de campos requeridos para múltiples itinerarios
        itineraryInfo.forEach(itinerary => {
            const { name, photo, user, userPhoto, price, duration, hashtags, city } = itinerary;
            if (!name || !photo || !user || !userPhoto || !price || !duration || !hashtags || !city) {
                const error = new Error("Faltan campos obligatorios en alguno de los itinerarios");
                error.status = 400;
                return next(error);
            }
        })
        let createdItineraries = await Itinerary.insertMany(itineraryInfo);
        return res.status(201).json({
            response: createdItineraries
        });
        
    } catch (error) {
        next(error);
    }
};

export { createOne, createMany };

