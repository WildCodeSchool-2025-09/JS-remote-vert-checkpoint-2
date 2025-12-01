import { useParams } from "react-router-dom";

export default function CupcakeDetails() {
  const { name } = useParams();
  return (
    <>
      <p>{name}</p>
    </>
  );
}
