type AppConfig = {
  supabaseUrl: string;
  supabaseKey: string;
  epicentre: {
    lat: number;
    lng: number;
  };
};

const config: AppConfig = {
  supabaseUrl: process.env.SUPABASE_URL || "",
  supabaseKey: process.env.SUPABASE_API_KEY || "",
  epicentre: {
    lat: 39.438961,
    lng: -0.407728,
  },
};

export const getDefaultConfig = (): AppConfig => {
  return config;
};
