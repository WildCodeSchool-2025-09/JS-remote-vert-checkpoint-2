import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

interface Accessory {
  id: number;
  name: string;
  slug: string;
}

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<Cupcake[]>([]);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");

  // Step 1: get all cupcakes

  useEffect(() => {
    async function fetchCupcakes() {
      const response = await fetch("http://localhost:3310/api/cupcakes");
      const cupcakes: Cupcake[] = await response.json();
      console.log(cupcakes);
      setCupcakes(cupcakes);
    }
    fetchCupcakes();
  }, []);

  // Step 3: get all accessories
  useEffect(() => {
    async function fetchAccessories() {
      const response = await fetch("http://localhost:3310/api/accessories");
      const accessories: Accessory[] = await response.json();
      console.log(accessories);
      setAccessories(accessories);
    }
    fetchAccessories();
  }, []);

  // Step 5: create filter state

  const filteredCupcakes =
    selectedAccessory === ""
      ? cupcakes
      : cupcakes.filter((cupcake) => cupcake.accessory === selectedAccessory);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={(event) => setSelectedAccessory(event.target.value)}
          >
            <option value="">---</option>
            {
              /* Step 4: add an option for each accessory */
              accessories.map((accessory) => (
                <option key={accessory.id} value={accessory.slug}>
                  {accessory.name}
                </option>
              ))
            }
          </select>
        </label>
      </form>

      <ul className="cupcake-list" id="cupcake-list">
        {
          /* Step 2: repeat this block for each cupcake */
          filteredCupcakes.map((cupcake) => (
            /* Step 5: filter cupcakes before repeating */
            <li className="cupcake-item" key={cupcake.id}>
              <Cupcake data={cupcake} />
            </li>
          ))
        }
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
