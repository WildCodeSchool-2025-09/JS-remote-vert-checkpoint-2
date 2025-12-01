import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";

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
              cupcake.accessory === selectedAccessory,
          )
          .map((cupcake) => (
            <Link to={`/cupcakes/${cupcake.name}`} key={cupcake.id}>
              <Cupcake data={cupcake} />
            </Link>
          ))}
      </ul>
    </>
  );
}

export default CupcakeList;
