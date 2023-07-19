import Button from 'react-bootstrap/Button';

function Cbuilding() {
  function Create(building) {
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
    <div className="row">
      <div className="col-3">
        <Button className="btn btn-dark border border-warning" onClick={() => Create("mine")}>Mine</Button>
      </div>
      <div className="col-3">
        <Button className="btn btn-dark border border-warning" onClick={() => Create("raffinery")}>Raffinery</Button>
      </div>
      <div className="col-3">
        <Button className="btn btn-dark border border-warning" onClick={() => Create("powerplant")}>PowerPlant</Button>
      </div>
      <div className="col-3">
        <Button className="btn btn-dark border border-warning" onClick={() => Create("shipyard")}>Shipyard</Button>
      </div>
    </div>
  );
}

export default Cbuilding;
