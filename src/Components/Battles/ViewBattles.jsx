/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 31/07/2023 - 11:38:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/07/2023
    * - Author          : 
    * - Modification    : 
**/
import ModelBattles from "../../models/battles/ModelBattles";

function ViewBattles(props) {
  return props.battle.map((item, id) => (
    <ModelBattles
      key={id}
      id={id}
      created_at={item.created_at}
      user_id={item.user_id}
      is_defender={item.is_defender}
      is_winner={item.is_winner}
      planetary_system_name={item.planetary_system_name}
      nb_fighter={item.nb_fighter}
      nb_frigate={item.nb_frigate}
      nb_cruiser={item.nb_cruiser}
      nb_destroyer={item.nb_destroyer}
      nb_round={item.nb_round}
    />
  ));
}

export default ViewBattles;
