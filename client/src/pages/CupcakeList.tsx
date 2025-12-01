import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

interface Accessory {
  id: number;
  name: string;
  slug: string;
}

interface CupcakeTypes {
  id: number;
  name: string;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
}

const CupcakeList = () => {
  const [cupcakes, setCupcakes] = useState<CupcakeTypes[]>([]);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");

  const filteredCupcakes = selectedAccessory
    ? cupcakes.filter((cupcake) => cupcake.accessory === selectedAccessory)
    : cupcakes;

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => {
        setCupcakes(data);
        console.info(data);
      })
      .catch((err) => console.error(err));
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => {
        setAccessories(data);
        console.info("Accessories:", data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={(e) => setSelectedAccessory(e.target.value)}
          >
            <option value="">---</option>
            {accessories.map((accessorie) => (
              <option key={accessorie.id} value={accessorie.slug}>
                {accessorie.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CupcakeList;
