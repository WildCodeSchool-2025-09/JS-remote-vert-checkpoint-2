import React, { useEffect, useState } from "react";

type AccessoryArray = { id: number; name: string; slug: string }[];
type Cupcake = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<Cupcake[]>([]);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => {
        setCupcakes(data);
        console.info("Cupcakes reçus :", data);
      })
      .catch((err) => console.error("Erreur cupcakes :", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => {
        setAccessories(data as AccessoryArray);
        console.info("Accessoires reçus :", data);
      })
      .catch((err) => console.error("Erreur accessoires :", err));
  }, []);

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Liste des Cupcakes"),
    React.createElement(
      "ul",
      null,
      cupcakes.map((cupcake) =>
        React.createElement(
          "li",
          { key: cupcake.id },
          `${cupcake.name} – ${cupcake.accessory} (${cupcake.color1}, ${cupcake.color2}, ${cupcake.color3})`,
        ),
      ),
    ),
    React.createElement("h1", null, "Liste des Accessoires"),
    React.createElement(
      "ul",
      null,
      accessories.map((acc) =>
        React.createElement("li", { key: acc.id }, `${acc.name} (${acc.slug})`),
      ),
    ),
    React.createElement("h1", null, "Sélection d’un accessoire"),
    React.createElement(
      "select",
      { id: "cupcake-select" },
      React.createElement("option", { value: "" }, "---"),
      accessories.map((acc) =>
        React.createElement("option", { key: acc.id, value: acc.id }, acc.name),
      ),
    ),
  );
}

export default CupcakeList;
