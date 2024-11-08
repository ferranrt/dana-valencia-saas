import type { Metadata } from "next";

import "./globals.css";
import ReactQueryProvider from "@/lib/react-query-provider";
import { Toaster } from "@/components/ui/toaster";

import Image from "next/image";
import Valencia from "../../public/valencia.png";
import Link from "next/link";
const config = {
  title: "Ayuda a Valencia - Dana 2024",
  image: "/og.png",
  description:
    "Una plataforma para ayudar a los más necesitados en Valencia tras la dana de 2024.",
};
export const metadata: Metadata = {
  title: config.title,
  description: config.description,

  alternates: {
    canonical: "/",
    languages: {
      es: "/es",
    },
  },
  twitter: {
    images: config.image,
    title: config.title,

    description: config.description,
  },
  openGraph: {
    type: "website",
    countryName: "Spain",
    title: config.title,
    description: config.description,
    images: config.image,
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
          <header className="flex w-full p-2 gap-2 items-center ">
            <Link href="/" className="flex w-full flex-1 gap-2 items-center">
              <Image
                src={Valencia}
                width={25}
                height={25}
                alt="Logo Valencia"
              ></Image>
              <span className="text-2xl flex-1 text-center font-semibold">
                Ayuda a Valencia
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
