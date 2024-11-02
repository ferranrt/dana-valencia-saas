import { getDefaultConfig } from "@/core/config/config";
import { createClient } from "@supabase/supabase-js";

export const getSupabaseClient = () => {
  const config = getDefaultConfig();
  const supabase = createClient(config.supabaseUrl, config.supabaseKey);

  return supabase;
};
