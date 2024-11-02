"use client";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

type Props = {
  markers?: LatLngExpression[];
  center?: LatLngExpression;
};

export default function DynamicMap(props: Props) {
  const { center = [51.505, -0.09], markers = [] } = props;
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker} />
      ))}
    </MapContainer>
  );
}
