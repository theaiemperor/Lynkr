"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  file: string;
  slug: string;
}

interface ChatMessage {
  id: number;
  sender: "user" | "ai";
  text: string;
  metadata?: Metadata[];
}

interface Metadata {
  id: string;
  pageContent: string;
  source: string;
  pageNumber: number;
}

export default function ChatUI({ file, slug }: Props) {
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    setChatLog((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: input, slug }),
        }
      );

      if (!response.ok) throw new Error("Fetch failed");

      const data = await response.json();

      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: data.result || "⚠️ Sorry, no result found.",
        metadata: data.metadata || [],
      };

      setChatLog((prev) => [...prev, aiMessage]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: Date.now() + 2,
        sender: "ai",
        text: "🚫 Network error or server issue. Please try again.",
      };
      setChatLog((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog, isLoading]);

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full">
      <div className="bg-gray-50 p-6 rounded-2xl shadow-lg w-full max-w-5xl h-[85vh] flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🤖 Chat with <span className="text-blue-600">{file}</span>
        </h2>

        {/* 🗨️ Chat Window */}
        <div className="flex-1 overflow-y-auto space-y-5 mb-4 px-2">
          {chatLog.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-xl relative ${
                msg.sender === "user"
                  ? "bg-blue-100 max-w-[70%] w-[30%] self-end mr-4 mt-4"
                  : "bg-green-100 self-start w-full text-left"
              }`}
            >
              <p className="text-sm">{msg.text}</p>

              {msg.sender === "ai" &&
                msg.metadata &&
                msg.metadata.length > 0 && (
                  <details className="mt-3 text-xs text-gray-600 bg-white border border-gray-200 rounded-md p-2 shadow-sm">
                    <summary className="cursor-pointer font-medium text-blue-500">
                      📚 View Sources
                    </summary>
                    <ul className="mt-2 space-y-2 list-disc pl-5">
                      {msg.metadata.map((meta) => (
                        <li key={meta.id}>
                          <p className="mb-1">
                            <strong>Page:</strong> {meta.pageNumber}
                          </p>
                          <p className="text-gray-700 italic text-xs">
                            {meta.pageContent}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
            </motion.div>
          ))}

          {/* 🤖 AI is thinking... */}
          {isLoading && (
            <div className="self-start w-full flex items-center gap-2 text-sm px-4 py-2 bg-yellow-50 border border-yellow-300 text-yellow-800 rounded-xl animate-pulse">
              <span className="text-xl">🤔</span>
              <span className="flex gap-1 items-center">
                AI is thinking
                <span className="animate-bounce delay-100">.</span>
                <span className="animate-bounce delay-200">.</span>
                <span className="animate-bounce delay-300">.</span>
              </span>
            </div>
          )}
          <div ref={bottomRef}></div>
        </div>

        {/* 🔍 Ask Question */}
        <form onSubmit={handleSubmit} className="flex items-center pt-4 gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg transition disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
