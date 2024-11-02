"use server";
import { createClient } from "@supabase/supabase-js";

import { getDefaultConfig } from "@/core/config/config";
import { PickupPointDTO } from "../dtos/pickup-point.dto";

export async function getPickupPoints(): Promise<{
  points: Array<PickupPointDTO>;
}> {
  const config = getDefaultConfig();
  console.log({
    config,
  });
  const supabase = createClient(config.supabaseUrl, config.supabaseKey);

  const { data, error } = await supabase.from("pickup_locations").select("*");

  console.log({
    data,
    error,
  });

  const parse: Array<PickupPointDTO> =
    data?.map((item) => {
      return {
        city: item.city ?? "",
        createdAt: item.created_at ?? "",
        id: item.id ?? "",
        location: { latitude: item.lat ?? 0, longitude: item.lng ?? 0 },
        extraInfo: item.extra_info ?? "",
        name: item.name ?? "",
        number: item.number ?? "",
        postalCode: item.postal_code ?? "",
        street: item.street ?? "",
      };
    }) ?? [];

  return {
    points: parse,
  };
}
