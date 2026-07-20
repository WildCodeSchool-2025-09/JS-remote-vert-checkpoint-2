type CupcakeType = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

type CupcakeArray = CupcakeType[];

interface AccessoryType {
  id: number;
  name: string;
  slug: string;
}

type AccessoryArray = AccessoryType[];
