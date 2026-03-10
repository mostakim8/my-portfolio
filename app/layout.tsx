// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mostakim | Portfolio",
  description: "Frontend Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: "smooth" }}>
      <body className="antialiased selection:bg-brand-medium selection:text-white">
        {children}
      </body>
    </html>
  );
}
