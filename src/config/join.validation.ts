import * as Joi from 'joi';

export const JoiValidationSchema: Joi.ObjectSchema = Joi.object({
  MONGO_DB: Joi.required(),
  PORT: Joi.number().default(3000),
  DEFAULT_LIMIT: Joi.number().default(10),
});
