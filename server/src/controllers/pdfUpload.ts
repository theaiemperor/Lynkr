import multer from "multer";
import { Request } from "express";
import { Queue } from "bullmq";

// Setting up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${unique}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Creating Queue for processing pdfs
const queue = new Queue("file-upload", {
  connection: {
    host: "localhost",
    port: 6379,
  },
});

export default function (req: Request, res: any) {
  const uploadMiddleware = upload.single("pdf");

  uploadMiddleware(req, res, (err: any) => {
    queue.add("upload", req.file);
  });

  return res.status(200).send("File uploaded successfully");
}
