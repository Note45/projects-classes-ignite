import { ICreateUserDto } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: ICreateUserDto): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}
