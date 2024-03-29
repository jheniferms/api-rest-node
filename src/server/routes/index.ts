import { Router } from "express";
import {  CitiesController } from "./../controllers";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (req, res) => {
    return res.status(StatusCodes.CREATED).send("Hello word");
});

router.post("/cities", CitiesController.createValidation, CitiesController.create);
router.get("/cities", CitiesController.getAllValidation, CitiesController.getAll);
router.get("/cities/:id", CitiesController.getValidation, CitiesController.get);
router.put("/cities/:id", CitiesController.updateValidation, CitiesController.update);
router.delete("/cities/:id", CitiesController.deleteValidation, CitiesController.deleteById);

export {router};