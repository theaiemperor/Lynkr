"use client";
import { useState } from "react";

interface FileUploadSectionProps {
  onUploadSuccess: (file: File) => void;
}

export default function ({ onUploadSuccess }: FileUploadSectionProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean | null>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("pdf", selectedFile);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        onUploadSuccess(selectedFile);
      } else {
      }
    } catch (error) {
    } finally {
      setIsUploading(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">
          Upload a PDF to get started
        </h2>

        <p className="text-gray-500 mb-6">
          Upload your PDF document to ask questions about its content
        </p>

        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
          id="pdf-upload"
        />

        <label
          htmlFor="pdf-upload"
          className="bg-blue-100 text-blue-600 hover:bg-blue-200 px-6 py-3 rounded-lg font-medium cursor-pointer inline-block mb-4"
        >
          Select PDF
        </label>

        {selectedFile && (
          <div className="mt-4 text-left p-4 bg-gray-50 rounded-md">
            <p className="font-medium text-gray-700">Selected file:</p>
            <p className="text-gray-600 truncate">{selectedFile.name}</p>
            <button
              onClick={handleFileUpload}
              disabled={isUploading || false}
              className="mt-4 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg w-full"
            >
              {isUploading ? "Uploading..." : "Upload PDF"}
            </button>
          </div>
        )}
        {isUploading === null && (
          <p className="text-red-600">Failed to upload file</p>
        )}
      </div>
    </div>
  );
}
