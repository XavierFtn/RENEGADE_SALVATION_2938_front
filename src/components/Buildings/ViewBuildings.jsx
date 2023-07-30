/* eslint-disable react-hooks/exhaustive-deps */
import MBuildings from "../../models/buildings/ModelsBuildings";

function Buildings(props) {
  const RenderMyArray = () => {
    let b = [];
    if (props.type === "mine") {
      b = props.building.mine || [];
    } else if (props.type === "raffinery") {
      b = props.building.raffinery || [];
    } else if (props.type === "shipyard") {
      b = props.building.shipyard || [];
    } else {
      b = props.building.powerplant || [];
    }

    return b.map((item, id) => (
      <MBuildings
        key={id}
        id={item.id}
        type={item.type}
        level={item.level}
        energy_consumption={item.energy_consumption}
        created_at={item.created_at}
        onDelete={() => props.onDelete(item.id)}
      />
    ));
  };

  return (
    <div>
      <RenderMyArray />
    </div>
  );
}

export default Buildings;
