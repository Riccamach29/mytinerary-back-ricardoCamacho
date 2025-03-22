import City from "../../models/City.js";

let allCities = async (req, res, next) => {
    try {
        let all = await City.find();
        return res.status(200).json({
            response: all
        });
    } catch (error) {
       next(error)
    }
}

let cityByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.nameParams;
        let city = await City.find({ name: nameQuery });

        if (!city || city.length === 0) {
            const error = new Error('Ciudad no encontrada');
            error.status = 404;
            return next(error);
        }

        return res.status(200).json({
            response: city
        });
    } catch (error) {
        next(error)
    }
}

let cityById = async (req, res, next) => {
    try {
        let idQuery = req.params.idParams;
        let city = await City.findById(idQuery);

        if (!city) {
            const error = new Error('Ciudad no encontrada');
            error.status = 404;
            return next(error);
        }

        return res.status(200).json({
            response: city
        });
    } catch (error) {
        next(error)
    }
}

export { allCities, cityByName, cityById };
