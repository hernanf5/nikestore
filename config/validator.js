const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'name / the Name must contain more than 2 characters',
            'string.max':'name/ the Name must contain 20 characters maximum'
        }),
        lastName: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'lastName / the Last name must contain more than 2 characters',
            'string.max':'lastName/ the Last name must contain 20 characters maximum'
        }),
        email: joi.string().email({ minDomainSegments: 2}).required().messages({
            'string.email':'Wrong email format'
        }),
        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(6).max(30).messages({
            'string.min':'The Password mast contain minimum 8 characters y contain Uppercase, Lowercase and a number',
            'string.pattern':'The Password must be alphanumerichal and contain an Uppercase'
        }),
        photo: joi.string().required(),

        country: joi.string().required(),

        from:joi.string()

    })

    const validation = schema.validate(req.body.userData, {abortEarly:false})
    console.log(req.body.userData)
    if (validation.error) {
        return res.json({success: false, from:'validator', message: validation.error.details, test: validation})
    }
    next()


}

module.exports = validator