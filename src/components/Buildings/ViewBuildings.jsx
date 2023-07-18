
import MBuildings from '../../models/buildings/ModelsBuildings';
import { useEffect, useState } from 'react';


function Buildings(){
    const [building, setBuilding] = useState([]);

    async function Mbuilding1(){
        let response = await fetch(`http://127.0.0.1:8000/api/structures/`);
        console.log('reponse Builiding', response);
        let donnees = await response.json();
        console.log('données Building', donnees);
        setBuilding(donnees);
        

    }
    useEffect(() => { Mbuilding1() }, []);


    const RenderMyArray = () => {


        return building.map((item, id) => {

            return (

              <MBuildings key={id} id={item.id} type={item.type} level={item.level} energy_consumption={item.energy_consumption} created_at={item.construction_time} />

            ); 
        }
            );
    
    
        };
        return (
            <div> <RenderMyArray /></div>
        );
    
    }

export default Buildings