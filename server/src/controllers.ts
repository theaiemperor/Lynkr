import multer from "multer";
import { Request, Response } from "express";

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

export function uploadFile(req: Request, res: Response) {
  const uploadMiddleware = upload.single("pdf");

  uploadMiddleware(req, res, (err: any) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    return res.status(200).json({ ...req.file });
  });
}
