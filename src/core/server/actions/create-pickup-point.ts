"use server";

import { getSupabaseClient } from "../client/get-supabase-client";
import {
  CreatePickupPointInpputDTO,
  createPickupPointSchema,
} from "../schemas/creeate-pickup-point";

export async function createPickupPointAction(dto: CreatePickupPointInpputDTO) {
  console.log("Inside createPickupPointAction");
  const client = getSupabaseClient();

  const parsed = createPickupPointSchema.parse(dto);

  console.log(parsed);

  const { data, error } = await client
    .from("pickup_locations")
    .insert([
      {
        name: parsed.name,
        street: parsed.street,
        number: parsed.number,
        city: parsed.city,
        extra_info: parsed.description,
        postal_code: parsed.postalCode,
        lat: parsed.location?.latitude ?? 0,
        lng: parsed.location?.longitude ?? 0,
        phone: parsed.phone,
      },
    ])
    .select();
  console.log({
    data,
    error,
  });
  if (error) {
    throw error;
  }

  return Promise.resolve();
}
