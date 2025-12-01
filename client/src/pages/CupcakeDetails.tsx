import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const { id } = useParams();
  const [cupCakes, setCupCakes] = useState<CupcakeArray>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/cupcakes`)
      .then((response) => response.json())
      .then((cupcake) => setCupCakes(cupcake));
  }, []);

  const cupcake = cupCakes?.find((cupcake) => cupcake?.id === Number(id));

  return <>{cupcake && <Cupcake data={cupcake} />}</>;
}

export default CupcakeDetails;
