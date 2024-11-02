import type { Metadata } from "next";

import "./globals.css";
import ReactQueryProvider from "@/lib/react-query-provider";
import { Toaster } from "@/components/ui/toaster";

import Image from "next/image";
import Valencia from "../../public/valencia.png";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Ayuda a Valencia - Dana 2024",
  description:
    "Una plataforma para ayudar a los más necesitados en Valencia tras la dana de 2024.",

  alternates: {
    canonical: "/",
    languages: {
      es: "/es",
    },
  },
  openGraph: {
    type: "website",
    countryName: "Spain",
    title: "Ayuda a Valencia - Dana 2024",
    description:
      "Una plataforma para ayudar a los más necesitados en Valencia tras la dana de 2024.",
    siteName: "Ayuda a Valencia - Dana 2024",
    images: "/og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased max-w-4xl w-full flex flex-col h-dvh  border-x mx-auto relative `}
      >
        <ReactQueryProvider>
          <header className="flex w-full p-2 gap-2 items-center border-b">
            <Link href="/" className="flex w-full flex-1 gap-2 items-center">
              <Image
                src={Valencia}
                width={25}
                height={25}
                alt="Logo Valencia"
              ></Image>
              <span className="text-2xl flex-1 text-center font-semibold">
                DANA Valencia - 2024
              </span>
            </Link>
          </header>
          <main className="flex-1">{children}</main>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
