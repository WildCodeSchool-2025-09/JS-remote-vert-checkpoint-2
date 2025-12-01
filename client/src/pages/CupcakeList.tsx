import { useEffect , useState } from "react";
import Cupcake from "../components/Cupcake";


function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);
const [accessories, setAccessories] = useState<AccessoryArray>([]);
useEffect(() => {
  fetch("http://localhost:3310/api/accessories")
  .then((res) => res.json())
  .then((data) => {
    setAccessories(data);
    console.info(" Take Accessories", data);
  })
  .catch((error) => {
    console.error("Error load accessories :", error);
  });
    useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => {
        setCupcakes(data);
        console.info(" Take Cupcakes", data);
      })
      .catch((error) => {
        console.error("Error load cupcakes :", error);
      });
  }, []);

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
            {accessories.map((accessory) => (
              <option value={accessory.id} key={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>n
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            {" "}
            <Cupcake data={cupcake} />{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;

