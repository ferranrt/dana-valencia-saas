import { Button } from "@/components/ui/button";
import { FormElement } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { CreatePickupPointInpputDTO } from "@/core/server/schemas/creeate-pickup-point";
import { useToast } from "@/hooks/use-toast";
import { useGeolocation } from "@uidotdev/usehooks";

import { Pin } from "lucide-react";
import { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";

export const CreatePickupPointForm: React.FC<{
  form: UseFormReturn<CreatePickupPointInpputDTO>;
}> = ({ form }) => {
  const [useCurrentLocation, setUseCurrentLocation] = useState<boolean>(false);
  const { setValue } = form;
  const {
    longitude: myLongitude,
    latitude: myLatitude,
    error: locationError,
  } = useGeolocation();
  const { toast } = useToast();
  useEffect(() => {
    if (!useCurrentLocation) return;
    if (locationError || !myLongitude || !myLatitude) {
      {
        toast({
          title: "Error",
          description: "No se pudo obtener tu ubicación",
          variant: "destructive",
        });
        return;
      }
    }
    setValue("location", { longitude: myLongitude, latitude: myLatitude });
  }, [
    locationError,
    myLatitude,
    myLongitude,
    setValue,
    toast,
    useCurrentLocation,
  ]);

  return (
    <>
      <div className="grid gap-4 p-2">
        <FormElement
          control={form.control}
          name="name"
          label="Nombre del punto"
          render={({ field }) => {
            return (
              <Input
                placeholder="Ejemplo: Centro comercial Gran Via"
                {...field}
              />
            );
          }}
        />
        <div className="flex gap-4 ">
          <FormElement
            control={form.control}
            name="street"
            className="flex-1"
            label="Calle"
            render={({ field }) => {
              return (
                <>
                  <Input {...field} placeholder="Calle" />
                </>
              );
            }}
          />
          <FormElement
            control={form.control}
            name="number"
            label="Nº"
            render={({ field }) => {
              return (
                <>
                  <Input className="w-20" {...field} type="number" />
                </>
              );
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormElement
            control={form.control}
            name="city"
            label="Ciudad"
            render={({ field }) => {
              return (
                <>
                  <Input {...field} placeholder="Ciudad" />
                </>
              );
            }}
          />
          <FormElement
            label="Codigo postal"
            control={form.control}
            name="postalCode"
            render={({ field }) => {
              return (
                <>
                  <Input {...field} placeholder="Codigo postal" />
                </>
              );
            }}
          />
        </div>
        <FormElement
          label="Teléfono"
          control={form.control}
          name="phone"
          render={({ field }) => {
            return (
              <>
                <Input {...field} placeholder="Teléfono de contacto" />
              </>
            );
          }}
        />
        <FormElement
          label="Descripción"
          control={form.control}
          name="description"
          description="Toda la información que consideres relevante sobre el punto de recogida y pueda ayudar a los usuarios a encontrarlo."
          render={({ field }) => {
            return (
              <>
                <Textarea
                  rows={5}
                  {...field}
                  placeholder="Descripción del sitio"
                />
              </>
            );
          }}
        />
        <FormElement
          label="Coordenadas"
          control={form.control}
          name="location"
          description="Las coordenadas nos ayudarán a ubicar el punto de recogida en el mapa."
          render={({ field }) => {
            return (
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    value={field.value?.latitude ?? ""}
                    onChange={(e) => {
                      const value = e.target.valueAsNumber;
                      form.setValue("location", {
                        longitude: field.value?.longitude ?? 0,
                        latitude: value,
                      });
                    }}
                    placeholder="Latitud"
                  />
                  <Input
                    value={field.value?.longitude ?? ""}
                    onChange={(e) => {
                      const value = e.target.valueAsNumber;
                      form.setValue("location", {
                        latitude: field.value?.latitude ?? 0,
                        longitude: value,
                      });
                    }}
                    placeholder="Longitud"
                  />
                </div>
                <Button
                  onClick={() => {
                    setUseCurrentLocation(true);
                  }}
                  variant={"secondary"}
                >
                  <Pin /> ¡Estoy allí! <b>Usar mi ubicación</b>
                </Button>
              </div>
            );
          }}
        />
      </div>
    </>
  );
};
