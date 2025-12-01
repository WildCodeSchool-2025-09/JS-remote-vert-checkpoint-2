import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const { id } = useParams();
  const [allCupcakes, setAllCupcakes] = useState<CupcakeArray>();

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => setAllCupcakes(data));
  }, []);

  const data = allCupcakes?.find((cupcake) => cupcake?.id === Number(id));

  return <>{data && <Cupcake data={data} />}</>;
}

export default CupcakeDetails;
