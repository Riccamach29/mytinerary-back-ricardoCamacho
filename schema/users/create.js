import joi from 'joi-oid'

const schema = joi.object({
    name: joi.string().min(3).max(30).alphanum().required().messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 3 characters long',
        'string.max': 'Name must be at most 30 characters long',
        'string.alphanum': 'Name must only contain alphanumeric characters', 
    }),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } } ),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),

    
}
    
)
