import { inject } from "tsyringe";

import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

export class ListCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsReposiotry: ICarsRepository
  ) {}

  async execute({ category_id, brand, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsReposiotry.findAvailable(
      category_id,
      brand,
      name
    );

    return cars;
  }
}
