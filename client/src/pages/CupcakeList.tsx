import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<Cupcake[]>([]);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");

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

  const filteredCupcakes =
    selectedAccessory === ""
      ? cupcakes
      : cupcakes.filter(
          (cupcake) => cupcake.accessory_id === selectedAccessory,
        );

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
            onChange={(event) => {
              setSelectedAccessory(event.target.value);
            }}
          >
            <option value="">-- Accessories --</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 5: filter cupcakes before repeating */}
        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake cupcake={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
