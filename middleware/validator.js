
const validator = (schema, part = 'body') => { 
    return (req, res, next) => {
        const dataToValidate = req[part];
        const { error, value } = schema.validate(dataToValidate, { abortEarly: false });

        if (error) {
            return res.status(400).json({
                success: false,
                message: "Error de validación",
                errors: error.details.map(error => ({
                    field: error.path[0],
                    message: error.message
                }))
            });
        }
        req[part] = value;
        next();
    };
};

export default validator