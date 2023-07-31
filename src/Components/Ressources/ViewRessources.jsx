import MRessources from "../../models/ressources/ModelRessources";

function ViewRessources(props) {


  return  (
    <MRessources
      ore={props.ressources.ore}
      fuel={props.ressources.fuel}
      energy={props.ressources.energy}
    />
  );
}

export default ViewRessources;
