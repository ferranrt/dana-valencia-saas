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
import { Textarea } from "@/components/ui/textarea";
import { Pin, Plus } from "lucide-react";
import DynamicMap from "./dynamic-map";

export const PickupPointsScreen = () => {
  return (
    <>
      <div className="z-10 border rounded shadow-md w-72 py-1 px-1  absolute top-2 left-1/2 -translate-x-1/2 ">
        <Input placeholder="Buscar puntos de recogida" />
      </div>
      <div className="h-72 flex flex-col border-2 border-red-500">
        <DynamicMap markers={[]} />
      </div>
      <div className="absolute bottom-2 left-2  bg-background p-2">
        <Drawer>
          <DrawerTrigger asChild>
            <Button size="icon">
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
            <div className="grid gap-2 p-4">
              <Input placeholder="Nom del punt de recollida" />
              <Input placeholder="Direcció" />
              <Input placeholder="Ciutat" />
              <Input placeholder="Codi postal" />
              <Textarea placeholder="Descripció" />
              <Label>Et trobes en aquest punt de recollida?</Label>
              <Button variant={"secondary"}>
                <Pin /> Marcar la meva ubicació
              </Button>
            </div>
            <DrawerFooter>
              <Button>Enviar punt de recollida</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
