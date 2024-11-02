"use client";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Popup, Marker, TileLayer, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { getDefaultConfig } from "@/core/config/config";

type Props = {
  markers?: LatLngExpression[];
  center?: LatLngExpression;
};

export function ChangeView({ coords }: { coords: LatLngExpression }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function DynamicMap(props: Props) {
  const { center = getDefaultConfig().epicentre, markers } = props;

  return (
    <MapContainer
      zoomControl={false}
      attributionControl={false}
      center={center}
      zoom={12}
      style={{ height: "100vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {markers?.map((marker, index) => (
        <Marker key={index} position={marker}>
          <Popup>as</Popup>
        </Marker>
      ))}

      <ChangeView coords={center} />
    </MapContainer>
  );
}
