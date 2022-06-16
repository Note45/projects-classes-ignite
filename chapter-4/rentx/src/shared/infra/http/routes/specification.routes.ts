import { Router } from "express";

import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAdminMiddleware } from "../middlewares/ensureAdmin";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticated";

export const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post(
  "/",
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  createSpecificationController.handle
);
