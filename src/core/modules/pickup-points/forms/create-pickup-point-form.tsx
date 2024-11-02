import { Button } from "@/components/ui/button";
import { FormElement } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CreatePickupPointInpputDTO } from "@/core/server/schemas/creeate-pickup-point";

import { Pin } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

export const CreatePickupPointForm: React.FC<{
  form: UseFormReturn<CreatePickupPointInpputDTO>;
}> = ({ form }) => {
  return (
    <>
      <div className="grid gap-4 p-2">
        <FormElement
          control={form.control}
          name="name"
          label="Nombre"
          render={({ field }) => {
            return <Input placeholder="Nombre del punto" {...field} />;
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
            label="Núm."
            render={({ field }) => {
              return (
                <>
                  <Input
                    className="w-20"
                    {...field}
                    placeholder="Núm"
                    type="number"
                  />
                </>
              );
            }}
          />
        </div>
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
        <Label>¿Te encuentras en este punto de recogida?</Label>
        <Button variant={"secondary"}>
          <Pin /> Usar mi ubicación
        </Button>
      </div>
    </>
  );
};
