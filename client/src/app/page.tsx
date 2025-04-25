"use client";
import ChatBox from "@/components/ChatBox";
import UploadBtn from "@/components/UploadBtn";
import { useState } from "react";

export default function PDFChatApp() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  if (uploadedFile === null) {
    return (
      <div className="my-5">
        <UploadBtn onUploadSuccess={setUploadedFile} />
      </div>
    );
  }

  return (
    <div className="flex flex-col  ">
      <main className="flex-1 overflow-auto p-6 flex flex-col">
        <ChatBox file={uploadedFile.name} slug={uploadedFile.name} />
      </main>
    </div>
  );
}
