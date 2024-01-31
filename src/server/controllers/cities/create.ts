/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface ICity {
    name: string
}

interface IFilter {
    filter?: string;
    limit?: number;
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<ICity>(yup.object().shape({
        name: yup.string().required().min(3).max(150),
    }))
}));

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
    return res.json(req.body);
};