import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Cupcake from "../components/Cupcake";

type AccessoryArray = { id: number; name: string; slug: string }[];

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3310";

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);
  const [selectedAccessory, setSelectedAccessory] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/cupcakes`)
      .then((response) => response.json())
      .then((data) => {
        console.info("cupcakes", data);
        setCupcakes(data as CupcakeArray);
      })
      .catch((error) => {
        console.error("Failed to load cupcakes", error);
      });
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/api/accessories`)
      .then((response) => response.json())
      .then((data) => {
        console.info("accessories", data);
        setAccessories(data as AccessoryArray);
      })
      .catch((error) => {
        console.error("Failed to load accessories", error);
      });
  }, []);

  const filteredCupcakes = selectedAccessory
    ? cupcakes.filter((cupcake) => cupcake.accessory_id === selectedAccessory)
    : cupcakes;

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
              <option key={accessory.id} value={String(accessory.id)}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Link to={`/cupcakes/${cupcake.id}`}>
              <Cupcake data={cupcake} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
