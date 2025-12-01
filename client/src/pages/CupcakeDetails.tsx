import { useParams } from "react-router-dom";
import { useCupcake } from "../context/CupcakeContext";
import "./CupcakeDetails.css";

function CupcakeDetails() {
  const { id } = useParams();

  const { cupcakes } = useCupcake();
  const cupcake = cupcakes.find((cupcake) => cupcake.id === Number(id));

  if (!cupcake) {
    return <div>Cupcake introuvable</div>;
  }

  return (
    <section className="cupcake-details">
      <div className="cupcake-infos">
        <h2>Name : {cupcake.name}</h2>
        <ul>
          <li>Accessory : {cupcake.accessory}</li>
          <li>Color 1 : {cupcake.color1}</li>
          <li>Color 2 : {cupcake.color2}</li>
          <li>Color 3 : {cupcake.color3}</li>
        </ul>
      </div>
      <div className="cupcake-container">
        <div className="cupcake">
          <div className={`accessory ${cupcake.accessory}`} />
          <div className="cream">
            <div
              className="cream-1"
              style={{
                backgroundColor: cupcake.color1,
              }}
            />
            <div
              className="cream-2"
              style={{
                backgroundColor: cupcake.color2,
              }}
            />
            <div
              className="cream-3"
              style={{
                backgroundColor: cupcake.color3,
              }}
            />
          </div>
          <div className="bottom">
            <div className="bottom-in">
              <div className="face">
                <div className="eyes">
                  <div className="left-eye" />
                  <div className="right-eye" />
                </div>
                <div className="mouth" />
              </div>
            </div>
          </div>
        </div>

        <div className="cupcake-name">{cupcake.name}</div>
      </div>
    </section>
  );
}

export default CupcakeDetails;
