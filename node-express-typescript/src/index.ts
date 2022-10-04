import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as path from "path";
var fs = require("fs");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
console.log(process.env.PORT);

app.get("/", (req: Request, res: Response) => {
  let words = fs.readFileSync(
    path.join(__dirname, "..", "..", "assets", "test.txt"),
    "utf8"
  );
  res.send(`Express + TypeScript Server running together. ${words}`);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
