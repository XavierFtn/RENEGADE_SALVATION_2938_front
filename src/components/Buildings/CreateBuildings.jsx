import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

function Cbuilding(){
    const [building, setBuilding] = useState();
    const [token, setToken] = useState(["eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjg5NzUzNTg5LCJleHAiOjE2ODk3NTcxODksIm5iZiI6MTY4OTc1MzU4OSwianRpIjoic2JpYkxZWU5YaFBQck11byIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.9HH5xgMKcRVialISDUpBOyGl7BcvGVAPhXzPGo7U95c"]);

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('token'));
      if (items) {
       setToken(items);
      }
    }, []);
    function Create(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token} `);
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