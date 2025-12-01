import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
type CupcakeType = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

type CupcakeArray = CupcakeType[];

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

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);
  const [filteredCupcakes, setFilteredCupcakes] = useState<CupcakeArray>([]);

  useEffect(() => {
    setCupcakes(sampleCupcakes);

    // fetch("http://localhost:3310/api/cupcakes")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.info(data);
    //     setCupcakes(data);
    //   })
    //   .catch((err) => console.error(err));
  }, []);

  const filterByAcc = (acc: string) => {
    const filtered = cupcakes.filter((e) => e.id === Number(acc));

    setFilteredCupcakes(filtered);
  };

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => {
              filterByAcc(e.target.value);
            }}
          >
            {cupcakes.map((acc) => (
              <option value={acc.id} key={acc.id}>
                {acc.accessory}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupcakes.map((e) => (
          <Cupcake key={e.id} data={e} />
        ))}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          {filteredCupcakes.map((e) => (
            <Cupcake data={e} key={e.accessory_id} />
          ))}
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
