/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface IParamsProps {
    id?: number;
}

export const getValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    }))
}));

export const get = async (req: Request<IParamsProps>, res: Response) => {
    console.log("getting city by id");
    console.log(req.params);

    return res.json("Not implemented");
};