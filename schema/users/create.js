import joi from 'joi-oid'

const schema = joi.object({
    name: joi.string()
    .min(3)
    .max(30)
    .pattern(/^[a-zA-Z\s]+$/)
    .required()
    .messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 3 characters long',
        'string.max': 'Name must be at most 30 characters long',
        'string.pattern.base': 'Name must only contain letters and spaces'
    }),
    email: joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .min(5)
    .max(50)
    .messages({
        'string.empty': 'Email is required',
        'string.email': 'Please provide a valid email',
        'string.min': 'Email must be at least 5 characters long',
        'string.max': 'Email must be less than 50 characters',
        'string.domain': 'Email must be from a valid domain'
    }),
    password: joi.string()
    .min(8)
    .max(30)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .required()
    .messages({
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 8 characters long',
        'string.max': 'Password must be less than 30 characters',
        'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
    }),
    photo: joi.string()
        .uri()
        .pattern(/\.(jpg|jpeg|png|gif|webp)$/i)
        .messages({
            'string.uri': 'Photo must be a valid URL',
            'string.pattern.base': 'URL must end with a valid image extension (.jpg, .jpeg, .png, .gif, .webp)',
            'string.empty': 'Photo URL is required'
        })
        .required(),
    country: joi.string()
        .min(3)
        .max(50)
        .pattern(/^[a-zA-Z\s]+$/)
        .required()
        .messages({
            'string.empty': 'Country is required',
            'string.min': 'Country name must be at least 3 characters long',
            'string.max': 'Country name must be at most 50 characters long',
            'string.pattern.base': 'Country name must only contain letters and spaces'
        })

})
