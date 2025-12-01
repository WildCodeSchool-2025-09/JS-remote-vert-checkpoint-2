import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

type AccessoriesArray = {
  id: number;
  name: string;
  slug: string;
}[];
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
];*/

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => {
        console.info("cupcakes:", data);
        setCupcakes(data);
      });
  }, []);

  const [accessories, setAccessories] = useState<AccessoriesArray>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => {
        console.info("accesoires:", data);
        setAccessories(data as AccessoriesArray);
      });
  }, []);

  const [filteredAccessory, setFilteredAccessory] = useState("");
  const filteredCupcakes = filteredAccessory
    ? cupcakes.filter((cupcake) => cupcake.accessory_id === filteredAccessory)
    : cupcakes;
  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={filteredAccessory}
            onChange={(e) => setFilteredAccessory(e.target.value)}
          >
            <option value="">---</option>
            {accessories.map((accessory) => {
              return (
                <option key={accessory.id} value={accessory.id}>
                  {accessory.name}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => {
          return (
            <li key={cupcake.id} className="cupcake-item">
              <Cupcake data={cupcake} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CupcakeList;
