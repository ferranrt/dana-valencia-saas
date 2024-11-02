"use client";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Pin, Plus } from "lucide-react";
import dynamic from "next/dynamic";

export const PickupPointsScreen = () => {
  const LazyMap = dynamic(() => import("./dynamic-map"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });
  return (
    <>
      <div className="z-20  w-72   absolute top-2 left-1/2 -translate-x-1/2 ">
        <Input placeholder="Buscar puntos de recogida" />
      </div>

      <div className="flex-1 h-full flex flex-col z-10 ">
        <LazyMap />
      </div>
      <div className="absolute z-20 bottom-2 right-2   ">
        <Drawer>
          <DrawerTrigger asChild>
            <Button size="icon" className="rounded-full">
              <Plus />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Afegir un nou punt de recollida</DrawerTitle>
              <DrawerDescription>
                Omple el formulari per afegir un nou punt de recollida
              </DrawerDescription>
            </DrawerHeader>
            <ScrollArea className="h-[70vh]">
              <div className="grid gap-2 p-4">
                <Input placeholder="Nom del punt de recollida" />
                <Input placeholder="Direcció" />
                <Input placeholder="Ciutat" />
                <Input placeholder="Codi postal" />
                <Textarea placeholder="Descripció del lloc" />
                <Label>Et trobes en aquest punt de recollida?</Label>
                <Button variant={"secondary"}>
                  <Pin /> Marcar la meva ubicació
                </Button>
              </div>
              <DrawerFooter>
                <Button>Enviar punt de recollida</Button>
              </DrawerFooter>
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
