import { Router } from "express";

import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

export const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticatedMiddleware);

specificationRoutes.post("/", createSpecificationController.handle);
