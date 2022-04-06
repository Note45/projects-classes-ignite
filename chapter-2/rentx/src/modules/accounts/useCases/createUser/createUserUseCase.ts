import { inject, injectable } from "tsyringe";

import { ICreateUserDto } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    driver_license,
    email,
    name,
    password,
    username,
  }: ICreateUserDto): Promise<void> {
    await this.usersRepository.create({
      driver_license,
      email,
      name,
      password,
      username,
    });
  }
}
