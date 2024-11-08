import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PickupPoint } from "../../../domain/pickup-point";
import { ChevronDown, Map, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Props = {
  location: PickupPoint;
  opened: boolean;
  onToggle: () => void;
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

export const PickupLocationListItem = ({
  location,
  onToggle,
  opened,
}: Props) => {
  return (
    <Collapsible
      open={opened}
      onOpenChange={() => {
        onToggle();
      }}
      className={cn(
        "border rounded-lg p-3 flex flex-col items-start",
        opened ? "shadow" : ""
      )}
    >
      <div className="flex w-full gap-2">
        <div className="flex flex-col flex-1">
          <h4 className="font-bold leading-4 mb-1 tracking-tighter text-foreground">
            {location.name}
          </h4>
          <p className="text-sm text-muted-foreground ">
            {getPrimaryText(location)}
          </p>
          <p className="text-sm text-muted-foreground ">
            {getSecondaryText(location)}
          </p>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="icon">
            <ChevronDown />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="text-sm text-muted-foreground w-full">
        <Separator className="w-full my-2" />
        <div className="flex flex-col gap-2">
          {location.extraInfo && location.extraInfo.length > 0 ? (
            <div className="bg-muted p-3  rounded-lg">
              <p className="text-muted-foreground">{location.extraInfo}</p>
            </div>
          ) : null}
          <div className="flex justify-between">
            {location.location ? (
              <Button asChild variant="secondary" size="sm">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://maps.google.com/?q=${location.location.latitude},${location.location.longitude}`}
                >
                  <Map />
                  Ver en el mapa
                </a>
              </Button>
            ) : null}
            {location.phone && location.phone?.length > 0 ? (
              <Button size="sm" asChild>
                <a href={`tel:${location.phone}`}>
                  <Phone />
                  Llamar al {location.phone}
                </a>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
