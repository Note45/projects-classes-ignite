import { PrimaryColumn, Column, CreateDateColumn, Entity } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity({ name: "specifications" })
export class Specification {
  @PrimaryColumn()
  id?: string;

  @Column()
  description: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
