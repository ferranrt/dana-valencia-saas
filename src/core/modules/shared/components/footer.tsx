/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const links: Array<{ title: string; icon: string; href: string }> = [
  {
    title: "LinkdIn",
    href: "https://www.linkedin.com/in/ferranromerotorro/",
    icon: "/linkedin-icon.png",
  },
  {
    title: "GitHub",
    href: "https://github.com/ferranrt",
    icon: "/github-icon.webp",
  },
  {
    title: "Twitter / X",
    href: "https://x.com/fturro",
    icon: "/x-icon.png",
  },
];

export const LegalFooter = () => {
  return (
    <div className="flex justify-end">
      <Dialog>
        <DialogTrigger>
          <Button variant="link">Contacto</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contacta conmigo</DialogTitle>
          </DialogHeader>
          <div className="flex overflow-y-auto gap-2 flex-col">
            {links.map((link) => {
              return (
                <a
                  key={link.title}
                  href={link.href}
                  className="border flex items-center p-2 gap-2 rounded-xl"
                >
                  <img
                    className="size-10 rounded-lg"
                    src={link.icon}
                    alt={link.title}
                  />
                  <p className="text-xl font-semibold">{link.title}</p>
                </a>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
