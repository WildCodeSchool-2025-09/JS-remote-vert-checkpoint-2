import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface CupcakeContextType {
  cupcakes: Cupcake[];
  setCupcakes: React.Dispatch<React.SetStateAction<Cupcake[]>>;
  accessories: Accessory[];
  setAccessories: React.Dispatch<React.SetStateAction<Accessory[]>>;
}

const CupcakeContext = createContext<CupcakeContextType>({
  cupcakes: [],
  setCupcakes: () => {},
  accessories: [],
  setAccessories: () => {},
});

export function CupcakeProvider({ children }: { children: ReactNode }) {
  const [cupcakes, setCupcakes] = useState<Cupcake[]>([]);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((allCupcakes) => setCupcakes(allCupcakes));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((allAccessories) => setAccessories(allAccessories));
  }, []);

  return (
    <CupcakeContext.Provider
      value={{ cupcakes, setCupcakes, accessories, setAccessories }}
    >
      {children}
    </CupcakeContext.Provider>
  );
}

export const useCupcake = () => {
  return useContext(CupcakeContext);
};
