import { Router } from "express";
import veiculoController from "../controllers/carController";

const carRouter = Router();

carRouter.get("/showAll", veiculoController.showAll);

carRouter.post("/new", veiculoController.newCar);

export default carRouter;