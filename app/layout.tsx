import type { Metadata } from "next";
import { Sora, Source_Code_Pro, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-code",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Brainwave",
  description: "Brinwave clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${sourceCodePro.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
