
import MBuildings from '../../models/buildings/ModelsBuildings';
import { useEffect, useState } from 'react';


function Buildings(){
    const [building, setBuilding] = useState([]);
    const [token, setToken] = useState(["eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjg5NzUzNTg5LCJleHAiOjE2ODk3NTcxODksIm5iZiI6MTY4OTc1MzU4OSwianRpIjoic2JpYkxZWU5YaFBQck11byIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.9HH5xgMKcRVialISDUpBOyGl7BcvGVAPhXzPGo7U95c"]);

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('token'));
      if (items) {
       setToken(items);
      }
    }, []);

    async function Mbuilding1(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token} `);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        let response = await fetch(`http://127.0.0.1:8000/api/structures/`, requestOptions);
        console.log('reponse Builiding', response);
        let donnees = await response.json();
        console.log('données Building', donnees);
        setBuilding(donnees);
        

    }
    useEffect(() => {
        Mbuilding1();
      }, []);
      
    //Suppression
    async function handleBuildingDelete(id) {
        await fetch(`http://127.0.0.1:8000/api/structures/${id}`, {
          method: 'DELETE',
        });
        Mbuilding1();
    }

    

    const RenderMyArray = () => {


        return building.map((item, id) => {

            return (

              <MBuildings key={id} id={item.id} type={item.type} level={item.level} energy_consumption={item.energy_consumption} created_at={item.created_at} onDelete={() => handleBuildingDelete(item.id)} />

            ); 
        }
            );
    
    
        };
        return (
            <div> <RenderMyArray /></div>
        );
    
    }

export default Buildings