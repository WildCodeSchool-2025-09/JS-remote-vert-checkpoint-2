import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";
/* *************************************************************************
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
 */
/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */
/*
J'ai trouver sur internet comment fetch une app 
J'ai coller un exemple ci dessous et j'ai ensuite importer useState et useEffect en haut de mon fichier 
useEffect va contenir la fonction qui fait le fetch. / useState me servira à mettre à jour mon composant cupcake. 
function RandomUserData() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('https://random-data-api.com/api/users/random_user')
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);
utiliser .map pour afficher la liste des cupcakes 
exemple de map sur le net 
                  {userList.map(user => (
                    <li key={user.id}>
                        <p>
                            Name:
                            {user.first_name}
                            {user.last_name}
                        </p>
                        <p>
                            Email:
                            {user.email}
                        </p>git
*/
interface CupcakeType {
  id: number;
  name: string;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
}

type AccessoryArray = {
  id: number;
  name: string;
  slug: string;
}[];

function CupcakeList() {
  const [cupcakeList, setCupcakeList] = useState<CupcakeType[]>([]);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => setCupcakeList(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setAccessories(data));
  }, []);

  console.info("Cupcakes list:", cupcakeList);
  console.info("Accessoires list:", accessories);

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          
          <select id="cupcake-select">
             <option value="">---</option>
            {accessories.map((accessory)=>(
              <option key = {accessory.id} value={accessory.id}>{accessory.name}</option>
            ))}
          </select>
          
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakeList.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default CupcakeList;
