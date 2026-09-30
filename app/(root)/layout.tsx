import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = { title: "Piya-Skills" };

// A second root layout, only for "/": the language layout under app/[lang] owns <html lang>.
export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="flex min-h-dvh items-center justify-center">{children}</body>
    </html>
  );
}
