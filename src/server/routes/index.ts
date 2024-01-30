import { Router } from "express";
import {  CitiesController } from "./../controllers";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (req, res) => {
    return res.status(StatusCodes.CREATED).send("Hello word");
});

router.post("/cities", CitiesController.createValidator, CitiesController.create);

export {router};