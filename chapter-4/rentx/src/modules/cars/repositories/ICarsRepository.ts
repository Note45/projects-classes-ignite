import { ICreateCarsDTO } from "../dtos/ICreateCarsDTO";

export interface ICarsRepository {
  create(data: ICreateCarsDTO): Promise<void>;
}
