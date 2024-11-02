export type PickupPoint = {
  id: string;
  createdAt: Date;
  name: string;
  street: string;
  number: string;
  city: string;
  postalCode: number;
  extraInfo: string;
  phone?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
};
