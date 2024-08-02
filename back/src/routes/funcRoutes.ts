import { Router } from "express";
import funcController from "../controllers/funcController";

const router = Router();

router.get("/showAll", funcController.showAll);

router.post("/new", funcController.newFunc);

router.put("/update/:id", funcController.updateFunc);

router.delete("/delete/:id", funcController.deleteFunc);

export default router;