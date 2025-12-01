import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  const [allCupcakes, setAllCupcakes] = useState<CupcakeArray>();
  const [cupcakeAccesories, setCupcakeAccesories] = useState<AccessoryArray>();
  const [accessoryToFilterWith, setAccessoryToFilterWith] = useState("");

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => setAllCupcakes(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((accessory) => setCupcakeAccesories(accessory));
  }, []);

  function cupcakesFilteredBy(e: React.ChangeEvent<HTMLSelectElement>) {
    setAccessoryToFilterWith(e.target.value);
  }

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={cupcakesFilteredBy}>
            <option value="">---</option>
            {cupcakeAccesories?.map((accessory) => (
              <option value={accessory.slug} key={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {allCupcakes
          ?.filter((cupcake) =>
            !accessoryToFilterWith
              ? cupcake
              : cupcake.accessory === accessoryToFilterWith,
          )
          .map((cupcake) => (
            <li className="cupcake-item" key={cupcake.id}>
              <Link to={`/cupcakes/${cupcake.id}`}>
                <Cupcake data={cupcake} />
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default CupcakeList;
