import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICity {
    name: string
}

const bodyValidation: yup.Schema<ICity> = yup.object().shape({
    name: yup.string().required().min(3).max(150),
});


export const createValidator: RequestHandler = async (req, res, next) => {
    try {
        await bodyValidation.validate(req.body, { abortEarly: false });
        return next();
    } catch (error) {
        const err = error as yup.ValidationError;
        const errors: Record<string, string> = {};

        err.inner.forEach(err => {
            if (!err.path) return;
            errors[err.path] = err.message;
        });

        console.log("error: ", errors);
        return res.status(StatusCodes.BAD_REQUEST).json({ errors });
    }
};

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
    return res.json(req.body);
};