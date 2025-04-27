"use client";
import ChatBox from "@/components/ChatBox";
import UploadBtn from "@/components/UploadBtn";
import { useState } from "react";

export default function PDFChatApp() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  if (uploadedFile === null) {
    return (
      <div className=" flex justify-center items-center">
        <UploadBtn onUploadSuccess={setUploadedFile} />
      </div>
    );
  }

  return (
    <main className=" overflow-auto p-6 flex flex-col">
      <ChatBox file={uploadedFile.name} slug={uploadedFile.name} />
    </main>
  );
}
