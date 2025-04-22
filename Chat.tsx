"use client";
import { useEffect, useState } from "react";
import { getHumeAccessToken } from "@/utils/voice/getHumeAccessToken";
import { handleVoiceIntent } from "@/utils/voice/intentRouter";
import Controls from "./Controls";
import Messages from "./Messages";

export default function Chat() {
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);

  useEffect(() => {
    (async () => {
      const token = await getHumeAccessToken();
      // Initialize Hume client (pseudo)
      const hume = new (window as any).HumeClient({ token });
      hume.on("intent", async (intent: any) => {
        const result = await handleVoiceIntent(intent.id, intent.payload);
        if (result.type === "search_results") {
          setMessages(prev => [...prev, { from: "assistant", text: `Found ${result.data.length} products.` }]);
        } else if (result.type === "confirmation") {
          setMessages(prev => [...prev, { from: "assistant", text: result.data.message }]);
        } else if (result.type === "checkout") {
          setMessages(prev => [...prev, { from: "assistant", text: "Starting checkout..." }]);
        } else {
          setMessages(prev => [...prev, { from: "assistant", text: result.data }]);
        }
      });
    })();
  }, []);

  const addMessage = (msg: { from: string; text: string }) => setMessages(prev => [...prev, msg]);

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg flex flex-col">
      <Messages messages={messages} />
      <Controls onSend={(text: string) => addMessage({ from: "user", text })} />
    </div>
  );
}
