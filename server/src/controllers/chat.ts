import { Request } from "express";
import { openai, vectorStore } from "../common/store";

export default async function (req: Request, res: any) {
  const userQuery = req.body.question || "";

  const retriever = vectorStore.asRetriever({
    k: 2,
  });

  const context = await retriever.invoke(userQuery);
  const content = context.map((item) => {
    return item.pageContent;
  });

  const SYSTEM_PROMPT = `
    You are an expert AI assistant. Use ONLY the context below to answer the user's query accurately and concisely.

    === CONTEXT START ===
    ${JSON.stringify(content)}
    === CONTEXT END ===

    INSTRUCTIONS:
    1. ROLE & GOAL
       - You are a helpful assistant specialized in responding based on provided context.
    2. REASONING
       - Identify relevant context passages.
       - Think step-by-step before answering.
    3. HANDLING MISSING INFO
       - If the context lacks the answer, reply: "I'm sorry, I don't have enough information to answer that."
    4. OUTPUT FORMAT
       - Summary: 1-2 sentences
       - Answer: Detailed explanation with bullet points or numbered steps.
       - Citations: Indicate context source (e.g., [From CONTEXT]).
    `;

  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userQuery },
    ],
    model: process.env.OPENAI_SDK_MODEL || "",
  });

  const result = completion.choices[0].message.content;

  const info = context.map(({ id, pageContent, metadata }) => {
    return {
      id,
      pageContent,
      source: metadata.source,
      pageNumber: metadata.loc.pageNumber,
    };
  });

  res.json({
    result,
    metadata: info,
  });
}
