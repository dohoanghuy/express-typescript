import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Express + TypeScript Server"));

app.get("/add", (req: Request, res: Response) => {
  res.send("add result");
});

app.get("subtract", (req: Request, res: Response) => {
  res.send("subtract result");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
