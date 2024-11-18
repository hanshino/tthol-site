import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ResponsiveAppBar from "@/components/navbar";
import { Container } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "武林資訊網",
  description: "由玩家建立的武林同萌資訊集合網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh_tw">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ResponsiveAppBar />
        <Container sx={{ pt: "5%" }}>{children}</Container>
      </body>
    </html>
  );
}
