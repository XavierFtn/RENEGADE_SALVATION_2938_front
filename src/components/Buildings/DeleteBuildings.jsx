

function DBuilding($id){

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
      fetch(`http://127.0.0.1:8000/api/structures/${$id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}

export default DBuilding