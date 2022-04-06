import { ICreateUserDto } from "../dtos/ICreateUserDTO";

export interface IUsersRepository {
  create(data: ICreateUserDto): Promise<void>;
}
