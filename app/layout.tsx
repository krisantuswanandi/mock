import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans({
  variable: "--font-noto-sans",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mock",
  description: "Personal mock server",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${noto.variable} h-full font-sans`}>
      <body className="h-full bg-stone-100">{children}</body>
    </html>
  );
}
