import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: { email: string; name: string };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    console.log("1");
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect!");
    }
    console.log("2");

    const passwordMatch = await compare(password, user.password);

    console.log("3");

    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }

    console.log("4");

    const token = sign(
      {
        subject: user.id,
        expiresIn: "1d",
      },
      "698dc19d489c4e4db73e28a713eab07b"
    );

    return { user: { name: user.name, email: user.email }, token };
  }
}
