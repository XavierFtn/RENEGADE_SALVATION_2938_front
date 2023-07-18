import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Cbuilding(){
    const [building, setBuilding] = useState();
    function Create(){
        var requestOptions = {
            method: 'POST',
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