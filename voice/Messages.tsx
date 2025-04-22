"use client";
export default function Messages({ messages }: { messages: { from: string; text: string }[] }) {
  return (
    <div className="p-2 overflow-y-auto h-48">
      {messages.map((msg, i) => (
        <div key={i} className={`${msg.from === "assistant" ? "text-blue-600" : "text-gray-800"} mb-2`}>
          <strong>{msg.from === "assistant" ? "Agnes" : "You"}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
}
