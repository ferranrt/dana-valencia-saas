import { PickupPointDTO } from "@/core/server/dtos/pickup-point.dto";
import { PickupPoint } from "../domain/pickup-point";

export const fromPointDTOtoEntity = (dto: PickupPointDTO): PickupPoint => {
  const {
    city,
    createdAt,
    extraInfo,
    id,
    name,
    number,
    postalCode,
    street,
    phone,
    location,
  } = dto;
  return {
    city,
    phone,
    createdAt,
    extraInfo,
    id,
    name,
    number,
    postalCode,
    street,
    location: {
      latitude: location?.latitude ?? 0,
      longitude: location?.longitude ?? 0,
    },
  };
};
