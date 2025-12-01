import { useEffect, useState } from "react";

import Cupcake from "../components/Cupcake";
import type { Cupcake as CupcakeType } from "../types/cupcake";

type Accessory = {
  id: number;
  name: string;
  slug: string;
};

const API_URL = import.meta.env.VITE_API_URL;

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeType[]>([]);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [selectedAccessoryId, setSelectedAccessoryId] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const cupcakesResponse = await fetch(`${API_URL}/api/cupcakes`);
        const accessoriesResponse = await fetch(`${API_URL}/api/accessories`);

        if (!cupcakesResponse.ok || !accessoriesResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const cupcakesData = (await cupcakesResponse.json()) as CupcakeType[];
        const accessoriesData =
          (await accessoriesResponse.json()) as Accessory[];

        setCupcakes(cupcakesData);
        setAccessories(accessoriesData);

        console.info("Cupcakes:", cupcakesData);
        console.info("Accessories:", accessoriesData);
      } catch (error) {
        console.error(error);
      }
    }

    void loadData();
  }, []);

  const filteredCupcakes =
    selectedAccessoryId === ""
      ? cupcakes
      : cupcakes.filter(
          (cupcake) => String(cupcake.accessory_id) === selectedAccessoryId,
        );

  return (
    <>
      <h1>Cupcake Union – Cupcakes</h1>

      <section>
        <label htmlFor="cupcake-select">Filter by accessory:</label>
        <select
          id="cupcake-select"
          value={selectedAccessoryId}
          onChange={(event) => setSelectedAccessoryId(event.target.value)}
        >
          <option value="">---</option>
          {accessories.map((accessory) => (
            <option key={accessory.id} value={String(accessory.id)}>
              {accessory.name}
            </option>
          ))}
        </select>
      </section>

      <section className="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <Cupcake key={cupcake.id} data={cupcake} />
        ))}
      </section>
    </>
  );
}

export default CupcakeList;
