import { Router } from "express";
import carController from "../controllers/carController";

const carRouter = Router();

carRouter.get("/showAll", carController.showAll);

carRouter.post("/new", carController.newCar);

export default carRouter;