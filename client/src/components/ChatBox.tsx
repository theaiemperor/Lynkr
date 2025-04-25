interface Props {
  file: string;
  slug: string;
}
export default function ({ file }: Props) {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <div className="bg-gray-50 p-8 rounded-xl shadow-md w-full text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">
          Chatting with {file}
        </h2>
      </div>
    </div>
  );
}
