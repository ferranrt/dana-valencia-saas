"use server";

import * as z from "zod";

import { getSupabaseClient } from "../client/get-supabase-client";
import { PickupPointDTO } from "../dtos/pickup-point.dto";
import { AtLeastFilterBuilder } from "../db/at-least-filter-builder";
const schema = z.object({
  id: z.string(),
  city: z.string().default(""),
  created_at: z.string().default(""),
  lat: z.number().default(0),
  lng: z.number().default(0),
  extra_info: z.string().default(""),
  phone: z.string().default(""),
  name: z.string().default(""),
  number: z.string().default(""),
  postal_code: z.number().default(0),
  street: z.string().default(""),
});

export async function getPickupPoints(args?: { searchText?: string }): Promise<{
  points: Array<PickupPointDTO>;
}> {
  const supaclient = getSupabaseClient();

  console.time("getPickupPoints");
  const filterBUilder = new AtLeastFilterBuilder()
    .addFilter({
      colummn: "city",
      like: args?.searchText ?? "",
    })
    .addFilter({
      colummn: "name",
      like: args?.searchText ?? "",
    });
  console.log(filterBUilder.buildFilter());
  const { data, error } = await supaclient
    .from("pickup_locations")
    .select("*")
    .eq("validated", true)
    .or(filterBUilder.buildFilter());

  /* .or(`city.ilike.%${args?.searchText}%,name.ilike.%${args?.searchText}%`); */

  console.timeEnd("getPickupPoints");
  const parsedData = schema.array().parse(data);

  if (error) {
    throw error;
  }

  const parse: Array<PickupPointDTO> =
    parsedData?.map((item) => {
      return {
        city: item.city,
        phone: item.phone,
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
