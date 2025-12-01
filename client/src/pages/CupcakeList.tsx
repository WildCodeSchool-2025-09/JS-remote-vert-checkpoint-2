import { useState, useEffect } from "react";
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
  const [cupcakes, setCupcakes] = useState<CupcakeArray>(sampleCupcakes);
  const [accessories, setAccessories] = useState<string[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => {
        console.info(data);
        setCupcakes(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => {
        console.info("Accessoires récupérés :", data);
        setAccessories(data);
      })
      .catch((err) => console.error("Erreur API accessoires :", err));
  }, []);

  const displayedCupcakes = filter
    ? cupcakes.filter((cupcake) => cupcake.accessory === filter)
    : cupcakes;

  return (
    <>
      <h1>My cupcakes</h1>

      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by accessory{" "}
          <select
            id="cupcake-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">---</option>
            <option value="wcs">Wild</option>
            <option value="christmas-candy">Christmas Candy</option>

            {accessories.map((cupcakeAccessory) => (
              <option key={cupcakeAccessory} value={cupcakeAccessory}>
                {cupcakeAccessory}
              </option>
            ))}
          </select>
        </label>
      </form>

      <ul className="cupcake-list">
        {displayedCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
