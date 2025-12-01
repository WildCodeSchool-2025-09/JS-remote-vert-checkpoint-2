import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

const CupcakeList = () => {
  const [cupcakes, setCupcakes] = useState<Cupcake[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => {
        setCupcakes(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

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
        {cupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
};

/* ************************************************************************* */

export default CupcakeList;
