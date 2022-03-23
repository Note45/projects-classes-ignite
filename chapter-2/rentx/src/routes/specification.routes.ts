import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

export const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});
