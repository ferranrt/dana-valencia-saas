type AppConfig = {
  epicentre: {
    lat: number;
    lng: number;
  };
};

const config: AppConfig = {
  epicentre: {
    lat: 39.438961,
    lng: -0.407728,
  },
};

export const getDefaultConfig = (): AppConfig => {
  return config;
};
