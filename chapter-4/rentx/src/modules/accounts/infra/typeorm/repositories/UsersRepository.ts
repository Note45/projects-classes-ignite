import { getRepository, Repository } from "typeorm";

import { ICreateUserDto } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

import { User } from "../entities/User";

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
    avatar,
    id,
  }: ICreateUserDto): Promise<void> {
    const user = this.repository.create({
      driver_license,
      email,
      name,
      password,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }
}
