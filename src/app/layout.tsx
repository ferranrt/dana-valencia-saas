import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased max-w-4xl flex flex-col  border-x mx-auto relative `}
      >
        <main className="flex-1 min-h-dvh">{children}</main>
      </body>
    </html>
  );
}
