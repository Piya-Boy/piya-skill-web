import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import { getDict, isLang, langs } from "@/lib/i18n";
import "../globals.css";

const geist = Geist({ variable: "--nf-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--nf-geist-mono", subsets: ["latin"] });
const thai = Noto_Sans_Thai({
  variable: "--nf-thai",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return {
    title: "Piya-Skills",
    description: getDict(lang).metaDescription,
    alternates: { languages: { th: "/th", en: "/en" } },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} className={`${geist.variable} ${geistMono.variable} ${thai.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
