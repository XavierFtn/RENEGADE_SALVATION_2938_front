/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 19/07/2023 - 13:59:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/07/2023
    * - Author          : 
    * - Modification    : 
**/
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Cbuilding(){
    const [building, setBuilding] = useState();
   
    function Create(){
      var myHeaders = new Headers();
      const items = JSON.parse(localStorage.getItem('token'));
      myHeaders.append("Authorization", `Bearer ${items} `);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch(`http://127.0.0.1:8000/api/structures/${building}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            
    }
       

   

    return (
    <div>
        <Form.Select  onChange={(e) => setBuilding(e.target.value)} aria-label="Default select example">
            <option>Select your Building</option>
            <option value="mine">Mine</option>
            <option value="raffinery">Raffinery</option>
            <option value="powerplant">PowerPlant</option>
            <option value="shipyard">Shipyard</option>
        </Form.Select>
        <Button type="submit" onClick={Create}>Create</Button>
    </div>
    );
}

export default Cbuilding