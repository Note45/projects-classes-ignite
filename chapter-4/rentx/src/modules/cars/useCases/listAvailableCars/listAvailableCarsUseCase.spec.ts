import { ICarsRepository } from "../../repositories/ICarsRepository";
import { CarsReposiotoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./listAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepository: ICarsRepository;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepository = new CarsReposiotoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepository);
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

    const cars = await listAvailableCarsUseCase.execute({});

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

    const cars = await listAvailableCarsUseCase.execute({
      brand: "car_brand2",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepository.create({
      name: "Car3",
      description: "car description 3",
      daily_rate: 120,
      license_plate: "OVR-34632",
      fine_amount: 60,
      brand: "car_brand3",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepository.create({
      name: "Car4",
      description: "car description4",
      daily_rate: 120,
      license_plate: "OVR-34632",
      fine_amount: 60,
      brand: "car_brand4",
      category_id: "category_id4",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: car.category_id,
    });

    expect(cars).toEqual([car]);
  });
});
