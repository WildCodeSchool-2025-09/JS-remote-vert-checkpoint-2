import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";
import "./CupcakeDetails.css";

export default function CupcakeDetails() {
  const { name } = useParams();

  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);

  const selectedCupcake = cupcakes.find((cupcake) => cupcake.name === name);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/cupcakes`)
      .then((response) => response.json())
      .then((cupcakes) => setCupcakes(cupcakes));
  }, []);

  const formatColors = (colors: string[]) => {
    return colors
      .filter((value, index) => colors.indexOf(value) === index)
      .map((color) => color[0].toUpperCase() + color.slice(1))
      .join(", ");
  };

  if (cupcakes.length === 0) return <p>Loading cupcakes...</p>;
  if (!selectedCupcake)
    return <p>Cupcake not found. Please check spelling in URL.</p>;

  return (
    <>
      <div className="container">
        <Cupcake data={selectedCupcake} />
        <div className="cupcake-infos">
          <section>
            <p>Name:</p>
            <p>Colors:</p>
            <p>Accessory:</p>
          </section>
          <section>
            <p>{selectedCupcake.name}</p>
            <p>
              {formatColors([
                selectedCupcake.color1,
                selectedCupcake.color2,
                selectedCupcake.color3,
              ])}
            </p>
            <p>
              {selectedCupcake.accessory[0].toUpperCase() +
                selectedCupcake.accessory.slice(1)}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
