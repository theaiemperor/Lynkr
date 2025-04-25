import express from "express";
import { uploadFile } from "./controllers";
const app = express();
const port = 8000;

app.get("/", (_, res) => {
  res.send("Hello from Lynker!");
});

app.post("/upload", uploadFile);

app.listen(port, () => {
  console.log(`Lynker is listening on port ${port}`);
});
