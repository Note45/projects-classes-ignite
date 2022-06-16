import { ICarsRepository } from "../../repositories/ICarsRepository";
import { CarsReposiotoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./listCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepository: ICarsRepository;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepository = new CarsReposiotoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepository);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepository.create({
      name: "Car1",
      description: "car description",
      daily_rate: 120,
      license_plate: "OVR-34632",
      fine_amount: 60,
      brand: "car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepository.create({
      name: "Car2",
      description: "car description",
      daily_rate: 120,
      license_plate: "OVR-34632",
      fine_amount: 60,
      brand: "car_brand2",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "car_brand2",
    });

    expect(cars).toEqual([car]);
  });
});
