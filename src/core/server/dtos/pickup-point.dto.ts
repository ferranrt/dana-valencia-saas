export type PickupPointDTO = {
  id: number;
  createdAt: Date;
  name: string;
  street: string;
  number: string;
  city: string;
  postalCode: number;
  extraInfo: string;
  location?: {
    latitude: number;
    longitude: number;
  };
};
