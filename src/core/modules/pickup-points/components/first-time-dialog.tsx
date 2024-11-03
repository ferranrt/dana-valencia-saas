import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, CircleHelp } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

export const MoreInfoModal: React.FC<
  ComponentPropsWithoutRef<typeof Dialog>
> = (props) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>¿Que son los puntos de recogida?</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="description">
          <TabsList className="hidden">
            <TabsTrigger value="description">
              <CircleHelp />
              ¿Que son?
            </TabsTrigger>
          </TabsList>
          <div className="flex flex-col text-sm text-muted-foreground max-h-[60vh] min-h-52 overflow-y-auto">
            <TabsContent value="description">
              <p>
                {`Un "punto de recogida" es un lugar designado fuera de la zona afectada por la catástrofe meteorológica, donde las personas pueden llevar alimentos, agua, ropa, medicamentos y otros suministros esenciales. Estos puntos sirven como centros de acopio en los que los donativos son organizados y preparados para su transporte hacia la zona afectada.`}
              </p>
              <p>
                {`Los voluntarios en los puntos de recogida se encargan de recibir, clasificar y coordinar la entrega de los artículos necesarios, asegurando que lleguen de manera rápida y segura a quienes más lo necesitan.`}
              </p>
            </TabsContent>
          </div>
        </Tabs>
        <DialogFooter>
          <DialogClose asChild>
            <Button>
              <Check />
              De acuerdo
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
