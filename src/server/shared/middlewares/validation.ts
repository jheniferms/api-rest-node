import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

export const body = "body";
type TProperty = "body" | "header" | "params" | "query";
type TGetSchema = <T>(schema: yup.Schema<T>) => yup.Schema<T>
type TAllSchemas = Record<TProperty, yup.AnySchema>;
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;


export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas(schema => schema);
    const errResult: Array<Record<string, string>> = [];

    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(req[key as TProperty], { abortEarly: false });
        } catch (error) {
            const err = error as yup.ValidationError;
            const errors: Record<string, string> = {};

            err.inner.forEach(err => {
                if (!err.path) return;
                errors[err.path] = err.message;
            });

            console.log("error: ", errors);
            errResult.push(errors);
        }
    });

    if (Object.entries(errResult).length == 0) {
        return next();
    } else {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: errResult });

    }

};
