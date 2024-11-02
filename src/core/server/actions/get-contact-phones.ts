"use server";

import { getSupabaseClient } from "../client/get-supabase-client";
import {
  ContactPhoneDTO,
  contactPhoneDTOSchema,
} from "../dtos/contact-phone.dto";

export async function getContactPhones(): Promise<{
  data: Array<ContactPhoneDTO>;
}> {
  const supaclient = getSupabaseClient();

  const { data, error } = await supaclient
    .from("contact_phones")
    .select("*")
    .order("weight", { ascending: false });

  const parsedData = contactPhoneDTOSchema.array().parse(data);

  if (error) {
    throw error;
  }

  const parse: Array<ContactPhoneDTO> =
    parsedData?.map((item) => {
      return {
        description: item.description,
        value: item.value,
        id: item.id,
        title: item.title,
      };
    }) ?? [];
  return {
    data: parse,
  };
}
