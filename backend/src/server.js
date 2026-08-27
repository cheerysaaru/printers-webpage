import "dotenv/config";
import cors from "cors";
import express from "express";
import multer from "multer";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const upload = multer({ dest: process.env.UPLOAD_DIR || "uploads/" });
const port = Number(process.env.PORT || 4000);

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.get("/api/jobs", async (_request, response) => {
  const jobs = await prisma.printJob.findMany({ orderBy: { createdAt: "desc" } });
  response.json(jobs);
});

app.post("/api/jobs", upload.single("file"), async (request, response) => {
  if (!request.file) {
    response.status(400).json({ error: "A print file is required." });
    return;
  }

  const copies = Math.max(1, Number(request.body.copies || 1));
  const job = await prisma.printJob.create({
    data: { filename: request.file.originalname, copies }
  });
  response.status(201).json(job);
});

app.listen(port, () => {
  console.log(`SL Printer API listening on http://localhost:${port}`);
});
