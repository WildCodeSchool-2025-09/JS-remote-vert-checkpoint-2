import "./Cupcake.css";

interface CupcakeProps {
  cupcake: Cupcake;
}

function Cupcake({ cupcake }: CupcakeProps) {
  return (
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
  );
}

export default Cupcake;
