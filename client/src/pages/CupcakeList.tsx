import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";
import type { AccessoryType, CupcakeType } from "../types/index";

/* ************************************************************************* */
/*const sampleCupcakes: CupcakeArray = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeType[]>([]);
  const [accessories, setAccessories] = useState<AccessoryType[]>([]);
  const [selectedAccessory, setSelectedAccessory] = useState("");

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((cupcakesData) => {
        setCupcakes(cupcakesData);
        console.info(cupcakesData);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((accessoriesData) => {
        setAccessories(accessoriesData);
        console.info(accessoriesData);
      });
  }, []);

  // Step 5: create filter state

  const filteredCupcakes = cupcakes.filter((cupcake) => {
    if (selectedAccessory === "") return true;
    return cupcake.accessory_id === selectedAccessory;
  });

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={(event) => setSelectedAccessory(event.target.value)}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
