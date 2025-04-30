import User from "../../models/User";

let createOne = async (req, res, next) => {
    try {
        let userInfo = req.body;

        // Validación de campos requeridos
        const { name, email, password, photo, country } = userInfo;
        if (!name || !email || !password || !photo || !country ) {
            const error = new Error("Faltan campos obligatorios");
            error.status = 400;
            return next(error);
        }
        let createUser = await User.create(userInfo);
        return res.status(201).json({
            response: createUser
        });
        
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let userInfo = req.body;

        // Validación de campos requeridos para múltiples usuarios
        userInfo.forEach(user => {
            const { name, email, password, photo, country } = user;
            if (!name || !email || !password || !photo || !country) {
                const error = new Error("Faltan campos obligatorios en alguno de los usuarios");
                error.status = 400;
                return next(error);
            }
        })
        let createdUsers = await User.insertMany(userInfo);
        return res.status(201).json({
            response: createdUsers
        });
        
    } catch (error) {
        next(error);
    }
};

export { createOne, createMany }; 