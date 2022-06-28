import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecifcationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/listAvailableCarsController";

import { ensureAdminMiddleware } from "../middlewares/ensureAdmin";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticated";

export const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecifcationController = new CreateCarSpecifcationController();

carsRoutes.post(
  "/",
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  createCarController.handle
);

carsRoutes.post(
  "/specifications/:id",
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  createCarSpecifcationController.handle
);

carsRoutes.get("/available", listAvailableCarsController.handle);
