/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 19/07/2023 - 10:59:56
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/07/2023
    * - Author          : 
    * - Modification    : 
**/
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function YourEmpire() {

    function ListShips() {
        let ships = [
            'fighter',
            'frigate',
            'cruiser',
            'destroyer'    
        ]
        // /!\ PENSER À IMPLÉMENTER NOMBRE DE SHIPS /!\
        // ships = [];

        const messageShips = () => { 
            return ships.length === 0 ? <p>You don't have any ships at the moment.</p> : null;
    }

        return (
            <>
                <h1>YOUR SHIPS</h1>
                    { messageShips() }
                        <ul className="list-ships"> 
                            {ships.map((ships) =>
                            <li className ='list-group-ships' key={ships.type}> {ships}</li>)}
                        </ul>
            </>   
    )}

    function ListWarehouses() {
        let warehouses = [
            'capacity',
            'ressources', 
        ]
        // /!\ PENSER À IMPLÉMENTER NOMBRE DE WAREHOUSES /!\
        // warehouses = [];

        const messageWarehouses = () => { 
            return warehouses.length === 0 ? <p>You need to build warehouses to stock your ressources.</p> : null;
    }

        return (
            <>
                <h1>YOUR WAREHOUSES</h1>
                    { messageWarehouses() }
                        <ul className="list-warehouses"> 
                            {warehouses.map((warehouses) =>
                            <li className ='list-group-warehouses' key={warehouses.ressources}> {warehouses}</li>)}
                        </ul>
            </>   
    )}

    function ListInfrastructures() {
        let infrastructures = [
            'mine',
            'raffinery',
            'powerplant',
            'shipyard'
        ]
        // /!\ PENSER À IMPLÉMENTER NOMBRE D'INFRASTRUCTURES' /!\
        // infrastrctures = [];

        const messageInfrastructures = () => { 
            return infrastructures.length === 0 ? <p>Build infrastructures to launch your ressource production.</p> : null;
    }

        return (
            <>
                <h1>YOUR INFRASTRUCTURES</h1>
                    { messageInfrastructures() }
                        <ul className="list-infrastructures"> 
                            {infrastructures.map((infrastructures) =>
                            <li className ='list-group-infrastructures' key={infrastructures.type}> {infrastructures}</li>)}
                        </ul>
            </>   
    )}

    function ListPending() {
        let pending = [
            'ships',
            'warehouses',
            'infrastructures'
        ]
        // /!\ PENSER À IMPLÉMENTER NOMBRE DE CONSTRUCTION & LEUR TEMPS RESTANT' /!\
        // infrastrctures = [];

        const messagePending = () => { 
            return pending.length === 0 ? <p>You have no constructions pending.</p> : null;
    }

        return (
            <>
                <h1>PENDING CONSTRUCTIONS</h1>
                    { messagePending() }
                    <ul className="list-pending"> 
                        {pending.map((pending) =>
                        <li className ='list-group-pending' key={pending.type}> {pending}</li>)}
                    </ul>
            </>   
    )}
}

export default YourEmpire