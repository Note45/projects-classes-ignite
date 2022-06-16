import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

import { ensureAdminMiddleware } from "../middlewares/ensureAdmin";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticated";

export const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post(
  "/",
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  createCarController.handle
);
