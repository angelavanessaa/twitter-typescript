import { NextFunction, Request, Response } from "express";

const validateSchema = (schema, property) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[property]);
    const valid = error == null;
    if (valid) next();
    else {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');
      res.status(422).json({ error: message, status: 422 });
    }
  };
};

export default validateSchema;
