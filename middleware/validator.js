const validator = (schema) =>[
    (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false }); // abortEarly: false para que devuelva todos los errores de validación, en lugar de solo el primero
        if (validation.error) {
            return res.status(400).json({
                success: false,
                message: validation.error
            });
        }
        next();
    }
]

export default validator;