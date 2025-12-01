import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

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

function CupcakeList() {
  const [allCupcakes, setAllCupcakes] = useState<CupcakeArray>();
  const [cupcakeAccesories, setCupcakeAccesories] = useState<AccessoryArray>();
  const [accessoryToFilterWith, setAccessoryToFilterWith] = useState("");

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => setAllCupcakes(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((accessory) => setCupcakeAccesories(accessory));
  }, []);

  function cupcakesFilteredBy(e: React.ChangeEvent<HTMLSelectElement>) {
    setAccessoryToFilterWith(e.target.value);
  }

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={cupcakesFilteredBy}>
            <option value="">---</option>
            {cupcakeAccesories?.map((accessory) => (
              <option value={accessory.slug} key={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {allCupcakes
          ?.filter((cupcake) =>
            !accessoryToFilterWith
              ? cupcake
              : cupcake.accessory === accessoryToFilterWith,
          )
          .map((cupcake) => (
            <li className="cupcake-item" key={cupcake.id}>
              <Cupcake data={sampleCupcakes[0]} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default CupcakeList;
