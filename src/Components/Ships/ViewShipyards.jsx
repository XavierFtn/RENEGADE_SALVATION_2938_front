import ModelShipyard from "../../models/Ships/ModelShipyard";

function ViewShipyards(props){


  return props.shipyard.map((item, id) => (
      
    <ModelShipyard
      key={id}
      id={item.id}
      type={item.type}
      update={item.updated_at}/>
     
  ));
}
export default ViewShipyards