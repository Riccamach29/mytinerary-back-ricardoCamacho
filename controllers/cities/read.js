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

let cityByName = async(req,res,next)=>{
    try {
        let nameQuery = req.params.nameParams
        console.log(nameQuery);        
        let all = await City.find({name: nameQuery})

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let cityById = async (req,res,next)=>{
    try {

        let idQuery = req.params.idParams
        console.log(idQuery);
        let all = await City.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { allCities, cityByName, cityById };