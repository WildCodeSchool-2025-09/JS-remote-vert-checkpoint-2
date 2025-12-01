import { useState } from "react";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";
import { useCupcake } from "../context/CupcakeContext";

function CupcakeList() {
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");

  const { cupcakes, accessories } = useCupcake();

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
        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Link to={`/cupcakes/${cupcake.id}`}>
              <Cupcake cupcake={cupcake} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
