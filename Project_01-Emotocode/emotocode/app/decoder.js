// components/Decoder.js
import { useState } from "react";
import { textMap } from "../data/emojiMap";

export default function Decoder() {
  const [emojiInput, setEmojiInput] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const handleDecode = () => {
    const result = emojiInput
      .split("")
      .map((emoji) => textMap[emoji] || "")
      .join("");
    setDecodedText(result);
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">🔓 Decode Emotocode</h2>
      <textarea
        className="w-full border p-2 rounded mb-2"
        placeholder="Paste your emotocode here..."
        value={emojiInput}
        onChange={(e) => setEmojiInput(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleDecode}
      >
        Decode
      </button>
      {decodedText && (
        <div className="mt-3 p-2 bg-gray-100 rounded">
          <strong>Result:</strong> {decodedText}
        </div>
      )}
    </div>
  );
}
