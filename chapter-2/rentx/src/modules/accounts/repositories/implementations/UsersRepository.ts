import { getRepository, Repository } from "typeorm";

import { ICreateUserDto } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    driver_license,
    email,
    name,
    password,
    username,
  }: ICreateUserDto): Promise<void> {
    const user = this.repository.create({
      driver_license,
      email,
      name,
      password,
      username,
    });

    await this.repository.save(user);
  }
}
