import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";
// import.meta.env.VITE_API_URL

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
  // Step 1: get all cupcakes

  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data: CupcakeArray) => setCupcakes(data));
  }, []);

  // Step 3: get all accessories
  // fait un 2eme useEffect mais j'aurais surement dû faire un promise.all (manque de temps)

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data: AccessoryArray) => setAccessories(data));
  }, []);

  // Step 5: create filter state

  const [filter, setFilter] = useState("");
  const filteredCupcakes = filter
    ? cupcakes.filter((cupcake) => cupcake.accessory === filter)
    : cupcakes;
  // si filter a été set, alors on filtre le tableau cupcakes pour que l'accessory match avec le filter.
  // sinon (si filter n'a pas été set), on affiche le tableau cupcakes en entier.

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}>
            {/* filter aura la VALUE de mes options en string */}
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      {/* Step 2: repeat this block for each cupcake */}
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake key={cupcake.id} data={cupcake} />
          </li>
        ))}
        {/* Step 5: filter cupcakes before repeating */}
        {/* Aidé de l'IA pour le filteredCupcakes */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
