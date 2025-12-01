import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
const sampleCupcakes: CupcakeArray = [
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
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);
  const [accessories, setAccessories] = useState<AccessoriesArray>([]);
  const [selectedAccessory, setSelectedAccessory] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/cupcakes`)
      .then((response) => response.json())
      .then((cupcakes) => setCupcakes(cupcakes));

    fetch(`${import.meta.env.VITE_API_URL}/api/accessories`)
      .then((response) => response.json())
      .then((accessories) => setAccessories(accessories));
  }, []);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => setSelectedAccessory(e.target.value)}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes
          .filter(
            (cupcake) =>
              selectedAccessory === "" ||
              cupcake.accessory === selectedAccessory
          )
          .map((cupcake) => (
            <Cupcake data={cupcake} key={cupcake.id} />
          ))}
      </ul>
    </>
  );
}

export default CupcakeList;
