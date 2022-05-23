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
    await createCarUseCase.execute({
      name: "test name",
      description: "test description",
      daily_rate: 100,
      license_plate: "OVR-3467",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
  });
});
