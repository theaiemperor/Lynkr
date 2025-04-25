import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { Worker } from "bullmq";
import { vectorStore } from "./common/store";

new Worker(
  "file-upload",
  async ({ data }) => {
    try {
      const loader = new PDFLoader(data.path);
      const docs = await loader.load();
      await vectorStore.addDocuments(docs);
    } catch (_) {}
  },
  { concurrency: 100, connection: { host: "localhost", port: 6379 } }
);
