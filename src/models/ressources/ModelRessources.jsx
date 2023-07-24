/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 24/07/2023 - 10:04:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/07/2023
    * - Author          : 
    * - Modification    : 
**/


function MRessources (props){

    return(
    <div className="btn btn-dark border border-warning" >

        <span>
        🪨: <strong>{props.ore}</strong> Ore Units      
            ⚡: <strong>{props.energy}</strong> Energy Units  
            ⛽: <strong>{props.fuel}</strong> Fuel Units </span> 
    </div>)
}
export default MRessources