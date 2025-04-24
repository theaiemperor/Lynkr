import express from "express";

const app = express();
const port = 8000;

app.get("/", (_, res) => {
  res.send("Hello from Lynker!");
});

app.listen(port, () => {
  console.log(`Lynker is listening on port ${port}`);
});
