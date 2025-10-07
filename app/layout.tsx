import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bucket List Doctor",
  description: "Turn your dreams into reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
