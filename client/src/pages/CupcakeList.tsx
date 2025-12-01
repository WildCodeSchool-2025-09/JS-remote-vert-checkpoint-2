import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
// const sampleCupcakes: CupcakeArray = [
//   {
//     id: 10,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "blue",
//     color2: "white",
//     color3: "red",
//     name: "France",
//   },
//   {
//     id: 11,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "yellow",
//     color2: "red",
//     color3: "black",
//     name: "Germany",
//   },
//   {
//     id: 27,
//     accessory_id: "5",
//     accessory: "christmas-candy",
//     color1: "yellow",
//     color2: "blue",
//     color3: "blue",
//     name: "Sweden",
//   },
// ];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

interface CupcakeArray extends Array<Cupcake> {}
type AccessoryArray = { id: number; name: string; slug: string }[];

function CupcakeList() {
  const [cupCakes, setCupCakes] = useState<CupcakeArray>([]);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");

  // Step 1: get all cupcakes
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/cupcakes`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((CupCakes) => {
        setCupCakes(CupCakes);
      });
  }, []);
  // Step 3: get all accessories
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/accessories`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((accessories) => {
        setAccessories(accessories);
      });
  }, []);

  // Step 5: create filter state
  const filteredCupcakes =
    selectedAccessory === ""
      ? cupCakes
      : cupCakes.filter((cupcake) => cupcake.accessory === selectedAccessory);

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
            {/* Step 4: add an option for each accessory */}
            {accessories &&
              accessories.length > 0 &&
              accessories.map((accessory) => (
                <option key={accessory.id} value={accessory.slug}>
                  {accessory.name}
                </option>
              ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {filteredCupcakes && filteredCupcakes.length > 0 ? (
          filteredCupcakes.map((cupcake) => (
            <li key={cupcake.id} className="cupcake-item">
              <Cupcake data={cupcake} />
            </li>
          ))
        ) : (
          <li>Chargement en cours...</li>
        )}

        {/* Step 5: filter cupcakes before repeating */}
        {/* <li className="cupcake-item">
          <Cupcake data={sampleCupcakes[0]} />
        </li> */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
