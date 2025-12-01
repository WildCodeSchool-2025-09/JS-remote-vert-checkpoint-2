import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";
import type {Accessory, AccessoryArray, CupcakeArray } from "../types";

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
  const [cupcakes, setCupcakes] = useState<Cupcake[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => {
        console.info("ça marche billyboy");
        setCupcakes(data);
      })
      .catch((error) => console.error("Error fetching cupcakes:", error));
  }, []);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => {
        console.info("Tout est OK Billy Boy", data);
        setAccessories(data as AccessoryArray);
      })
      .catch((err) => console.error("Pas bon mon amis", err));
  }, []);

  function handleSelectedChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const valueSelected = event.target.value;
    setSelectedAccessory(valueSelected);
  }
  const [selectedAccessory, setSelectedAccessory] = useState("");

  const filteredCupcakes =
    selectedAccessory === ""
      ? cupcakes
      : cupcakes.filter((c) => c.accessory_id === selectedAccessory);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={handleSelectedChange}
          >
            <option value="">---</option>
            {accessories.map((accessory: Accessory) => (
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
        <li className="cupcake-item">
          <Cupcake data={sampleCupcakes[0]} />
        </li>
      </ul>
    </>
  );
}

export default CupcakeList;
