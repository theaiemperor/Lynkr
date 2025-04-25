import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { QdrantVectorStore } from "@langchain/qdrant";
import OpenAI from "openai";

const embeddings = new HuggingFaceInferenceEmbeddings({
  model: "sentence-transformers/all-MiniLM-L6-v2",
  apiKey: process.env.HUGGINGFACE_KEY,
});

export const vectorStore = await QdrantVectorStore.fromExistingCollection(
  embeddings,
  {
    url: process.env.QDRANT_URL,
    collectionName: "pdf-docs",
  }
);

export const openai = new OpenAI({
  baseURL: process.env.OPENAI_SDK_URL,
  apiKey: process.env.OPENAI_SDK_API,
});
