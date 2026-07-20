import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const { id } = useParams();

  const [cupcake, setCupcake] = useState<Cupcake | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/cupcakes/${id}`)
      .then((res) => res.json())
      .then((data) => setCupcake(data));
  }, [id]);

  if (cupcake == null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Link to={"/cupcakes"}>← Return to all Cupcakes</Link>
      <h1>{cupcake.name}</h1>
      <Cupcake data={cupcake} />
    </>
  );
}

export default CupcakeDetails;
