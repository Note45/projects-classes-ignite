import { Router } from "express";

import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticated";

export const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticatedMiddleware);

specificationRoutes.post("/", createSpecificationController.handle);
