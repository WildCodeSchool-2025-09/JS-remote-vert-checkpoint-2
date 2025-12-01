type CupcakeType = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

type AccessoryType = {
  id: number;
  name: string;
  slug: string;
};

export type CupcakeArray = CupcakeType[];
export type AccessoryArray = AccessoryType[];
