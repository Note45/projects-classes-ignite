import { Response, Request, NextFunction } from "express";

import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";

export const ensureAdminMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);

  if (!user.isAdmin) {
    throw new AppError("User isn't admin!", 401);
  }

  next();
};
