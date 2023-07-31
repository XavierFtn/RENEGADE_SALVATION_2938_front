/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import ModelShips from "../../models/Ships/ModelShips";


function Ships(props) {


  const RenderMyArray = () => {
    let s = [];
    // eslint-disable-next-line react/prop-types
    if (props.type === "cruiser") {
      s = props.ships.cruiser || [];
    } else if (props.type === "destroyer") {
      // eslint-disable-next-line react/prop-types
      s = props.ships.destroyer || [];
    } else if (props.type === "fighter") {
      s = props.ships.fighter || [];
    } else {
      s = props.ships.frigate || [];
    }
    return s.map((item, id) => {
      return <ModelShips key={id} type={item.type}  quantity={item.quantity} />;
    });
  };
  return (
    <div>
      <RenderMyArray />
    </div>
  );
}
// évite les erreur de type: id is missing in props validation


export default Ships;
