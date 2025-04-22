"use client";
import { useState } from "react";

export default function Controls({ onSend }: { onSend: (text: string) => void }) {
  const [input, setInput] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSend(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="p-2 border-t">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message..."
        className="w-full px-2 py-1 border rounded"
      />
    </form>
  );
}
