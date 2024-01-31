/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface IParamsProps {
    id?: number;
}
interface IBodyProps {
    name: string;
}

export const updateValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3).max(150),
    }))
}));

export const update = async (req: Request<IParamsProps, {}, IBodyProps>, res: Response) => {
    console.log("updating city");
    console.log(req.params);
    console.log(req.body);

    return res.json("Not implemented");
};