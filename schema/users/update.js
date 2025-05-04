import joi from 'joi-oid' 

const updateUserBodySchema = joi.object({
    name: joi.string().min(1).max(30).pattern(/^[a-zA-Z\s]+$/).optional().messages({
        'string.min': 'Name must be at least 1 character long for update', 
        'string.max': 'Name must be at most 30 characters long',
        'string.pattern.base': 'Name must only contain letters and spaces'
    }),
    photo: joi.string().uri().pattern(/\.(jpg|jpeg|png|gif|webp)$/i).optional().messages({
         'string.uri': 'Photo must be a valid URL for update',
         'string.pattern.base': 'URL must end with a valid image extension (.jpg, .jpeg, .png, .gif, .webp) for update',
    }),
    country: joi.string().min(1).max(50).pattern(/^[a-zA-Z\s]+$/).optional().messages({
        'string.min': 'Country name must be at least 1 character long for update',
        'string.max': 'Country name must be at most 50 characters long',
        'string.pattern.base': 'Country name must only contain letters and spaces',
    })

}).min(1).messages({ 
    'object.min': 'Se debe proporcionar al menos un campo válido para actualizar (nombre, email, foto o país).',
});



export default updateUserBodySchema