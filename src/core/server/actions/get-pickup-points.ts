"use server";
import { createClient } from "@supabase/supabase-js";

import { getDefaultConfig } from "@/core/config/config";
import { PickupPointDTO } from "../dtos/pickup-point.dto";
import { z } from "zod";
const schema = z.object({
  id: z.number(),
  city: z.string().default(""),
  created_at: z.string().default(""),
  lat: z.number().default(0),
  lng: z.number().default(0),
  extra_info: z.string().default(""),
  name: z.string().default(""),
  number: z.string().default(""),
  postal_code: z.number().default(0),
  street: z.string().default(""),
});

export async function getPickupPoints(): Promise<{
  points: Array<PickupPointDTO>;
}> {
  const config = getDefaultConfig();
  console.log({
    config,
  });
  const supabase = createClient(config.supabaseUrl, config.supabaseKey);

  const { data, error } = await supabase.from("pickup_locations").select("*");

  const parsedData = schema.array().parse(data);

  console.log({
    parsedData,
    error,
  });

  const parse: Array<PickupPointDTO> =
    parsedData?.map((item) => {
      return {
        city: item.city,
        createdAt: new Date(item.created_at),
        extraInfo: item.extra_info,
        id: item.id,
        location: {
          latitude: item.lat,
          longitude: item.lng,
        },
        name: item.name,
        number: item.number,
        postalCode: item.postal_code,
        street: item.street,
      };
    }) ?? [];

  return {
    points: parse,
  };
}
