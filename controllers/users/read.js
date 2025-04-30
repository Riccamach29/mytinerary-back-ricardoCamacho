import User from "../../models/User.js";

let allUser = async(req,res,next)=>{
    try {
        let {name, country, role} = req.query
        let query = {}
        if (name) { query.name = {$regex: name, $options: 'ix' } }
        if (country) { query.country = {$regex: country, $options: 'ix' } }
        if (role) { query.role = role }
        
        let all = await User.find(query).exec()

        return res.status(200).json({
            success: true,
            response: all, 
            message: all.length === 0 ? "No se encontraron usuarios con los criterios especificados" : "Usuarios encontrados"
        })

    } catch (error) {
        next(error)
    }
}

let userByEmail = async (req, res, next) => {
    try {
        let emailQuery = req.params.emailParams;
        let user = await User.findOne({ email: emailQuery }).exec();

        if (!user) {
            return res.status(404).json({
                success: false, 
                message: `Usuario con email ${emailQuery} no encontrado`,
                response: null
            });
        }
            return res.status(200).json({
            success: true,
            response: user,
            message: "Usuario encontrado"
        });
    }
    catch (error) {
        next(error)
    }
}

let userById = async (req, res, next) => {
    try {
        let idQuery = req.params.idParams;

        let user = await User.findById(idQuery).exec();
        if (!user) {
            return res.status(404).json({
                success: false, 
                message: `Usuario con ID ${idQuery} no encontrado`,
                response: null 
            });
        }

        return res.status(200).json({
            success: true, 
            response: user,
            message: "Usuario encontrado" 
        });
    } catch (error) {
        next(error)
    }
}

let userByCountry = async (req, res, next) => {
    try {
        let countryQuery = req.params.country; 
        let user = await User.find({ country: countryQuery }).exec();

        return res.status(200).json({
            success: true, 
            response: user, 
            message: user.length === 0 ? `No se encontraron usuarios en ${countryQuery}` : `Usuarios encontrados en ${countryQuery}` // Mensaje más específico
        });
    } catch (error) {
        next(error)
    }
}

export { allUser, userByEmail, userById, userByCountry };