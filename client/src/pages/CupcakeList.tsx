import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => {
        setCupcakes(data);
      });
  }, []);

  const [accessories, setAccessories] = useState<
    {
      id: number | string;
      name: string;
    }[]
  >([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => {
        setAccessories(data);
      });
  }, []);

  const [selectedAccessory, setSelectedAccessory] = useState("");

  const filteredCupcakes = cupcakes.filter((cupcake) => {
    if (selectedAccessory === "") {
      return true;
    }

    return cupcake.accessory_id.toString() === selectedAccessory;
  });

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={(event) => setSelectedAccessory(event.target.value)}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>

      <ul className="cupcake-list" id="cupcake-list">
        {/* Correction 2 : On ne garde QUE la boucle sur la liste filtrée */}
        {filteredCupcakes.map((cupcake) => (
          <Cupcake key={cupcake.id} data={cupcake} />
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
