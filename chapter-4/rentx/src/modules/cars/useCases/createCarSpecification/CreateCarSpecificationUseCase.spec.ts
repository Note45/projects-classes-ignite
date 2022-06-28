import { AppError } from "@shared/errors/AppError";

import { ICarsRepository } from "../../repositories/ICarsRepository";
import { CarsReposiotoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "../../repositories/in-memory/SpecificationRepositoryInMemory";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsReposiotoryInMemory: ICarsRepository;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;

describe("Create Car Specification", () => {
  beforeEach(() => {
    carsReposiotoryInMemory = new CarsReposiotoryInMemory();
    specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsReposiotoryInMemory,
      specificationRepositoryInMemory
    );
  });

  it("should not be able to add a new specification to a nonexistent car", async () => {
    expect(async () => {
      await createCarSpecificationUseCase.execute({
        car_id: "nonexistent-car-id",
        specifications_id: ["test-specification-id"],
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to add a new specification to the car", async () => {
    const car = await carsReposiotoryInMemory.create({
      name: "test name",
      description: "test description",
      daily_rate: 100,
      license_plate: "OVR-3467",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    const specification = await specificationRepositoryInMemory.create({
      name: "test",
      description: "test",
    });

    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id: [specification.id],
    });

    expect(specificationsCars).toHaveProperty("specifications");
    expect(specificationsCars.specifications.length).toBe(1);
  });
});
