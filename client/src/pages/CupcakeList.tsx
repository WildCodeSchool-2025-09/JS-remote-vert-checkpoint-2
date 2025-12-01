import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

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

function CupcakeList() {
  const [cupCakeList, setCupCakeList] = useState([sampleCupcakes[0]]);
  const [accessories, setAccessories] = useState<Accessory>([]);
  const [accessorieChoice, setAccessorieChoice] = useState<string>("");
  const selectedAccessories = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAccessorieChoice(e.target.value);
  };

  useEffect(() => {
    const getCupCakes = async () => {
      const rawCupCakes = await fetch("http://localhost:3310/api/cupcakes");
      const rawAcessories = await fetch(
        "http://localhost:3310/api/accessories",
      );

      const json = await rawCupCakes.json();
      const jsonAccessories = await rawAcessories.json();

      setCupCakeList(json);
      setAccessories(jsonAccessories);
    };

    getCupCakes();
  }, []);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={selectedAccessories}>
            <option value="">---</option>
            {accessories.map((tools) => {
              return (
                <option key={tools.id} value={tools.slug}>
                  {tools.name}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {accessorieChoice === ""
          ? cupCakeList.map((cupcake) => {
              return (
                <li key={cupcake.id} className="cupcake-item">
                  <Cupcake key={cupcake.id} data={cupcake} />
                </li>
              );
            })
          : cupCakeList.map((cupcake) => {
              if (cupcake.accessory === accessorieChoice)
                return (
                  <li key={cupcake.id} className="cupcake-item">
                    <Cupcake key={cupcake.id} data={cupcake} />
                  </li>
                );
            })}
      </ul>
    </>
  );
}

export default CupcakeList;
