

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