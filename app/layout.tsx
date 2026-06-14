import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSI Break Reminder — Smart Breaks for Developers",
  description: "Monitors keystroke velocity and mouse usage to suggest personalized break timing for RSI prevention."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="33ad89e6-8146-4bfd-a1e4-6c3b56c5ee1c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
