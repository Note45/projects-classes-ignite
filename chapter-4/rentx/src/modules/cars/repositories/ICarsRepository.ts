import { ICreateCarsDTO } from "../dtos/ICreateCarsDTO";
import { Car } from "../infra/typeorm/entities/Car";

export interface ICarsRepository {
  create(data: ICreateCarsDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable(
    category_id?: string,
    brand?: string,
    name?: string
  ): Promise<Car[]>;
  findById(id: string): Promise<Car>;
}
