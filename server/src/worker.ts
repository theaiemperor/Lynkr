import { Worker } from "bullmq";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { QdrantVectorStore } from "@langchain/qdrant";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";

new Worker(
  "file-upload",
  async ({ data }) => {
    try {
      const loader = new PDFLoader(data.path);
      const docs = await loader.load();

      const embeddings = new HuggingFaceInferenceEmbeddings({
        model: "sentence-transformers/all-MiniLM-L6-v2",
        apiKey: process.env.HUGGINGFACE_KEY,
      });

      const vectorStore = await QdrantVectorStore.fromExistingCollection(
        embeddings,
        {
          url: process.env.QDRANT_URL,
          collectionName: "pdf-docs",
        }
      );

      await vectorStore.addDocuments(docs);
    } catch (_) {}
  },
  { concurrency: 100, connection: { host: "localhost", port: 6379 } }
);
