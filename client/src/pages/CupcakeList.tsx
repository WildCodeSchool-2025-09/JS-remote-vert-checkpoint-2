import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
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

/* tu peux utiliser sampleCupcakes si tu bloques à l'étape 1 */
/* si l'étape 1 est déjà faite, ignore simplement cette partie ;) */
/* ************************************************************************* */

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

  // Étape 3 : récupérer tous les accessoires

  // Étape 5 : créer un état (state) pour le filtre

  return (
    <>
      <h1>My cupcakes</h1>

      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Étape 5 : utiliser un composant contrôlé pour le select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>

            {/* Étape 4 : ajouter une option pour chaque accessoire */}
          </select>
        </label>
      </form>

      <ul className="cupcake-list" id="cupcake-list">
        {/* Étape 2 : répéter ce bloc pour chaque cupcake */}

        {/* Étape 5 : filtrer les cupcakes avant de les afficher */}
        <li className="cupcake-item">
          <Cupcake data={sampleCupcakes[0]} />
        </li>

        {/* fin du bloc */}
      </ul>
    </>
  );
}

export default CupcakeList;
