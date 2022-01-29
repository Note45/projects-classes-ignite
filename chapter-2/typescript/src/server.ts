import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.json({ message: "Hello World TypeScript" });
});

app.listen(3333);
