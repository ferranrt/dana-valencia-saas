"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Form } from "@/components/ui/form";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { createPickupPointAction } from "@/core/server/actions/create-pickup-point";
import {
  CreatePickupPointInpputDTO,
  createPickupPointSchema,
} from "@/core/server/schemas/creeate-pickup-point";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, List, Map, Plus, RefreshCw, Send } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { match } from "ts-pattern";
import { usePickupPointsViewModel } from "../viewmodels/use-pickup-points-viewmodel";
import { CreatePickupPointForm } from "./forms/create-pickup-point-form";
import { ListModeView } from "./views/list-mode-view/list-mode-view";
import { MapModeView } from "./views/map-mode-view/map-mode-view";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { MoreInfoModal } from "./components/first-time-dialog";

type Modes = "map" | "list";
const ConnectedPickupPointsScreen = () => {
  const viewModel = usePickupPointsViewModel();
  const { isLoading, mode, refetch, updateMode } = viewModel;

  const form = useForm<CreatePickupPointInpputDTO>({
    resolver: zodResolver(createPickupPointSchema),
  });
  const [isFirstTime, setIsFirstTime] = useLocalStorage(
    "fistTimePickup",
    false
  );
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const moreInfoVisible = isFirstTime || showInfo;
  const { toast } = useToast();
  const [createVisible, setCreateVisible] = useState<boolean>(false);

  const handleSubmit: SubmitHandler<CreatePickupPointInpputDTO> = (data) => {
    createPickupPointAction(data)
      .then(() => {
        toast({
          title: "Punto de recogida registrado correctamente!",
          description:
            "En breves validaremos el formato y aparecerá en la plataforma para su visualización. ¡Muchas gracias!",
          variant: "default",
        });
        setCreateVisible(false);
        refetch();
      })
      .catch((e) => {
        console.error(e);
        toast({
          title: "Error",
          description: `No se pudo registrar el punto de recogida. ${e.message}`,
          variant: "destructive",
        });
      });
  };

  return (
    <>
      <MoreInfoModal
        open={moreInfoVisible}
        onOpenChange={(v) => {
          setIsFirstTime(false);
          setShowInfo(v);
        }}
      />
      <div className="relative h-full overflow-hidden flex-1 flex flex-col">
        <div className="flex justify-between items-center p-1 border-b">
          <ToggleGroup
            type="single"
            size="sm"
            value={mode}
            onValueChange={(v) => {
              updateMode(v as Modes);
            }}
          >
            <ToggleGroupItem value="map">
              <Map />
              Mapa
            </ToggleGroupItem>
            <ToggleGroupItem value="list">
              <List />
              Llista
            </ToggleGroupItem>
          </ToggleGroup>
          <Button
            variant="secondary"
            onClick={() => {
              setShowInfo((prev) => !prev);
            }}
          >
            <Info /> Más información
          </Button>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col  ">
          {match(mode)
            .with("map", () => {
              return (
                <div className="z-10  w-full flex flex-col flex-1 relative h-full">
                  <MapModeView viewModel={viewModel} />
                </div>
              );
            })
            .otherwise(() => {
              return (
                <div className="flex-1 relative">
                  <div className="absolute inset-0  overflow-auto">
                    <ListModeView viewModel={viewModel} />
                  </div>
                </div>
              );
            })}
        </div>

        <div className=" flex justify-between p-2 bg-background border-t  gap-2">
          <Button
            variant="secondary"
            className="flex-1"
            onClick={() => {
              refetch();
            }}
            loading={isLoading}
          >
            <RefreshCw /> Actualizar
          </Button>

          <Button
            onClick={() => {
              setCreateVisible(true);
            }}
            className="flex-1"
          >
            <Plus /> Crear punto
          </Button>
        </div>
      </div>
      <Drawer open={createVisible} onOpenChange={setCreateVisible}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Registrar un nuevo punto de recogida</DrawerTitle>
            <DrawerDescription className="text-xs">
              Los puntos de recogida son lugares donde las personas pueden
              llevar sus donaciones para que sean recogidas por los voluntarios
              y estos las llevaran a València.
            </DrawerDescription>
          </DrawerHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <Form {...form}>
              <CreatePickupPointForm form={form} />
            </Form>
          </div>
          <DrawerFooter className="border-t">
            <Button onClick={form.handleSubmit(handleSubmit)}>
              <Send />
              Registrar punto de recogida
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const PickupPointsScreen = () => {
  return (
    <usePickupPointsViewModel.Provider>
      <ConnectedPickupPointsScreen />
    </usePickupPointsViewModel.Provider>
  );
};
