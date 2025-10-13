import Joi from "joi";

const userScheme = Joi.object({
    name: Joi.string().min(3).required(),
    userName: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    discord: Joi.string().min(4).required()
});

const eventScheme = Joi.object({
    eventName: Joi.string().min(3).required(),
    organizer: Joi.string().min(2).required(),
    organizerEmail: Joi.string().email().required(),
    organizerDiscord: Joi.string().min(4).required(),
    eventDate:  Joi.alternatives().try(Joi.date().raw().min("2000/01/01").max("2030/12/31").messages({"date.format": "Event date must be in DD/MM/YYYY",
        "date.min": "Event date cannot be before 2000/01/01", "date.max": "Event date cannot be after 2030/12/31", "any.required": "Event date is required"
    })).required()
});

const commentScheme = Joi.object({
    commentor: Joi.string().min(3).required(),
    eventName: Joi.string().min(3).required(),
    comment: Joi.string().required(),
});

export const validateUser = (req, res, next) => {
    const { error } = userScheme.validate(req.body);
    if(error) return res.status(400).json({
        status: 400,
        message: error.details[0].message
    });
    next();
};


export const validateEvent = (req, res, next) => {
    const { error } = eventScheme.validate(req.body);
    if(error) return res.status(400).json({
        status: 400,
        message: error.details[0].message
    });
    next();
};

export const validateComment = (req, res, next) => {
    const { error } = commentScheme.validate(req.body);
    if(error) return res.status(400).json({
        status: 400,
        message: error.details[0].message
    });
    next();
};