import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3310";

function CupcakeDetails() {
  const { id } = useParams();
  const [cupcake, setCupcake] = useState<Cupcake | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    fetch(`${API_URL}/api/cupcakes/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Cupcake with id ${id} not found`);
        }
        return response.json();
      })
      .then((data) => {
        setCupcake(data as Cupcake);
      })
      .catch((fetchError) => {
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "Failed to load cupcake",
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <p>Loading cupcake...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!cupcake) {
    return <p>Cupcake introuvable.</p>;
  }

  return (
    <div>
      <h1>{cupcake.name}</h1>
      <div className="cupcake-details">
        <p>Accessory: {cupcake.accessory}</p>
        <p>
          Colors: {cupcake.color1}, {cupcake.color2}, {cupcake.color3}
        </p>
      </div>
    </div>
  );
}

export default CupcakeDetails;
