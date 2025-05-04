const validator = (schema) =>[
    (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false }); 
        if (validation.error) {
            return res.status(400).json({
                success: false,
                message: "Error de validación",
                errors: validation.error.details
            });
        }
        next();
    }
]

export default validator;

