import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { CarsReposiotoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: ICarsRepository;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepository = new CarsReposiotoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "test name",
      description: "test description",
      daily_rate: 100,
      license_plate: "OVR-3467",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "test name 1",
        description: "test description",
        daily_rate: 100,
        license_plate: "OVR-3467",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });

      await createCarUseCase.execute({
        name: "test name 2",
        description: "test description",
        daily_rate: 100,
        license_plate: "OVR-3467",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "test name 1",
      description: "test description",
      daily_rate: 100,
      license_plate: "OVR-3467",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(car.available).toBe(true);
  });
});
