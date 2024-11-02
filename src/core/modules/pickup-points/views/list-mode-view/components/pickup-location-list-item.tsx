import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PickupPoint } from "../../../domain/pickup-point";
import { EllipsisVertical, Map, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {
  location: PickupPoint;
};

const getPrimaryText = (location: PickupPoint) => {
  let output: string = "";
  if (location.street) output += location.street;
  if (location.number) output += `, ${location.number}`;

  return output;
};

const getSecondaryText = (location: PickupPoint) => {
  let output: string = "";
  if (location.city) output += location.city;
  if (location.postalCode) output += `, ${location.postalCode}`;
  return output;
};

export const PickupLocationListItem = ({ location }: Props) => {
  return (
    <Collapsible className="border rounded p-3 flex flex-col items-start">
      <div className="flex w-full gap-2">
        <div className="flex flex-col flex-1">
          <h4 className="font-bold">{location.name}</h4>
          <p className="text-sm text-muted-foreground">
            {getPrimaryText(location)}
          </p>
          <p className="text-sm text-muted-foreground">
            {getSecondaryText(location)}
          </p>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="icon">
            <EllipsisVertical />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="text-sm text-muted-foreground w-full">
        <Separator className="w-full my-2" />
        <div className="flex flex-col gap-2">
          <p>
            {location.extraInfo
              ? location.extraInfo
              : "El punto no tiene descripción."}
          </p>
          <div className="flex justify-between">
            {location.location ? (
              <Button asChild variant="secondary" size="sm">
                <a
                  href={`https://maps.google.com/?q=${location.location.latitude},${location.location.longitude}`}
                >
                  <Map />
                  Ver en el mapa
                </a>
              </Button>
            ) : null}
            {location.phone ? (
              <Button size="sm" asChild>
                <a href={`tel:${location.phone}`}>
                  <Phone />
                  Llamar al {location.phone}
                </a>
              </Button>
            ) : (
              <span>Sin teléfono</span>
            )}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
