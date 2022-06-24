import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/listAvailableCarsController";

import { ensureAdminMiddleware } from "../middlewares/ensureAdmin";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticated";

export const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post(
  "/",
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  createCarController.handle
);

carsRoutes.get("/available", listAvailableCarsController.handle);
