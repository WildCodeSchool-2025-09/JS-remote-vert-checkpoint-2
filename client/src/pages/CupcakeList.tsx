import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<Cupcake[]>([]);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((allCupcakes) => setCupcakes(allCupcakes));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((allAccessories) => setAccessories(allAccessories));
  }, []);

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">-- Accessories --</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.name}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 5: filter cupcakes before repeating */}
        {cupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake cupcake={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
