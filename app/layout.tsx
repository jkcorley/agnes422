import "@/globals.css";
import { ReactNode } from "react";
import Chat from "@/components/voice/Chat";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
        <Chat />
      </body>
    </html>
  );
}
