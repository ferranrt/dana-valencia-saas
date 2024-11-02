"use client";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Popup, Marker, TileLayer, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { getDefaultConfig } from "@/core/config/config";
import { PickupPoint } from "./domain/pickup-point";
import { Button } from "@/components/ui/button";
import { Map, Phone, Pin } from "lucide-react";

type Props = {
  points?: PickupPoint[];
  center?: LatLngExpression;
};

export function ChangeView({ coords }: { coords: LatLngExpression }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function DynamicMap(props: Props) {
  const { center = getDefaultConfig().epicentre, points = [] } = props;

  return (
    <MapContainer
      attributionControl={false}
      center={center}
      zoom={200}
      className="h-full w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {points?.map((point, index) => {
        if (!point.location) return null;
        return (
          <Marker
            key={index}
            position={{
              lat: point.location.latitude,
              lng: point.location.longitude,
            }}
          >
            <Popup className="w-64">
              <div className="flex flex-col mb-4 space-y-0">
                <p className="!my-0 font-bold">{point.name}</p>
                <p className="text-xs text-muted-foreground">
                  {point.street} {point.number}
                </p>
                <p className="text-xs text-muted-foreground">
                  {point.city} - {point.postalCode}
                </p>
              </div>
              <div className="pt-4 border-t flex gap-2">
                <Button size="sm" variant="secondary">
                  <Map />
                  En Google
                </Button>
                <Button size="sm">
                  <Phone />
                  Llamar
                </Button>
              </div>
            </Popup>
          </Marker>
        );
      })}

      <ChangeView coords={center} />
    </MapContainer>
  );
}
