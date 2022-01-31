import express from "express";
import { CreateCourse } from "./route";

const app = express();

app.get("/", CreateCourse);

app.listen(3333);
