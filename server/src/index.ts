import express from "express";
import pdfUpload from "./controllers/pdfUpload";
import chat from "./controllers/chat";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/api", (_, res) => {
  res.send("Hello from Lynker Api!");
});

app.post("/api/upload", pdfUpload);
app.post("/api/chat", chat);

app.listen(port, () => {
  console.log(`Lynker is listening on port ${port}`);
});
