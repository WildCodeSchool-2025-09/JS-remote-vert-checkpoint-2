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
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((reponse) => reponse.json())
      .then((data) => {
        console.info(data);
        setCupcakes(data);
      });
  }, []);

  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((reponse) => reponse.json())
      .then((data) => {
        console.info(data);
        setAccessories(data);
      });
  }, []);

  // Etape 5 : creer un etat (state) pour le filtre

  return (
    <>
      <h1>My cupcakes</h1>

      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Etape 5 : utiliser un composant controle pour le select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {accessories.map((accessorie) => (
              <option key={accessorie.id} value={accessorie.id}>
                {accessorie.name}
              </option>
            ))}
          </select>
        </label>
      </form>

      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
        {/* Etape 5 : filtrer les cupcakes avant de les afficher */}
        {/* fin du bloc */}
      </ul>
    </>
  );
}

export default CupcakeList;
