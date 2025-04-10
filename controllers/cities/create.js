import City from "../../models/City.js";

let createOne = async (req, res, next) => {
    try {
        let cityInfo = req.body;

        // Validación de campos requeridos
        const { name, photo, country, continent, description, currency, language, timezone, landmarks } = cityInfo;
        if (!name || !photo || !country || !continent || !description || !currency || !language || !timezone || !landmarks) {
            const error = new Error("Faltan campos obligatorios");
            error.status = 400;
            return next(error);
        }
        let createCity = await City.create(cityInfo);
        return res.status(201).json({
            response: createCity
        });
        
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let cityInfo = req.body;
        
        // Validación de campos requeridos para múltiples ciudades
        cityInfo.forEach(city => {
            const { name, photo, country, continent, description, currency, language, timezone, landmarks } = city;
            if (!name || !photo || !country || !continent || !description || !currency || !language || !timezone || !landmarks) {
                const error = new Error("Faltan campos obligatorios en alguna de las ciudades");
                error.status = 400;
                return next(error);
            }
        });

        let createdCities = await City.insertMany(cityInfo);
        return res.status(201).json({
            response: createdCities
        });
        
    } catch (error) {
        next(error);
    }
};

export { createOne, createMany };
