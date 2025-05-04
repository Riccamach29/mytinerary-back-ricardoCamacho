import joi from 'joi';

const schemaSignIn = joi.object({
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
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]{8,}$/)
        .required()
        .messages({
            'string.empty': 'Password is required',
            'string.min': 'Password must be at least 8 characters long',
            'string.max': 'Password must be less than 30 characters',
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
        })
}).messages({
    'object.unknown': '{#label} is not allowed'
});

export default schemaSignIn;