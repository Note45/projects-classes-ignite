import { v4 as uuidv4 } from "uuid";

export class Specification {
  id?: string;
  description: string;
  name: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
