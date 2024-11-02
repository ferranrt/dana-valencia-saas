export type PickupPointDTO = {
  id: string;
  createdAt: Date;
  name: string;
  street: string;
  number: string;
  city: string;
  postalCode: number;
  phone: string;
  extraInfo: string;
  location?: {
    latitude: number;
    longitude: number;
  };
};
