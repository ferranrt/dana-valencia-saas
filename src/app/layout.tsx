import type { Metadata } from "next";

import "./globals.css";
import ReactQueryProvider from "@/lib/react-query-provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Ayuda a Valencia",
  description:
    "Una plataforma para ayudar a los más necesitados en Valencia tras la dana de 2024.",
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
        <main className="flex-1 min-h-dvh">
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
