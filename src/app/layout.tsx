import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dana Valencia - SaaS",
  description: "Ferran Romero Torró",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased max-w-4xl flex flex-col h-dvh  border-x mx-auto relative `}
      >
        <main className="flex-1 min-h-dvh">{children}</main>
      </body>
    </html>
  );
}
