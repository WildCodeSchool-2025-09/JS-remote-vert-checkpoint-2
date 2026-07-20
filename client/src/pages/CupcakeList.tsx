import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  // Step 1: get all cupcakes
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);
  useEffect(() => {
    const fetchCupcakes = async () => {
      const response = await fetch("http://localhost:3310/api/cupcakes");

      const data = (await response.json()) as CupcakeArray;

      setCupcakes(data);

      console.info(data);
    };

    fetchCupcakes();
  }, []);
  useEffect(() => {
    console.info(cupcakes);
  }, [cupcakes]);

  // Step 3: get all accessories

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}
        {/* Step 5: filter cupcakes before repeating */}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
