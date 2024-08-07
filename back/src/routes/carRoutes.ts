import { Router } from "express";
import veiculoController from "../controllers/carController";

const carRouter = Router();

carRouter.get("/showAll", veiculoController.showAll);

carRouter.post("/new", veiculoController.newCar);

carRouter.put("/update/:id", veiculoController.updateCar);

carRouter.delete("/delete/:id", veiculoController.deleteCar);

export default carRouter;