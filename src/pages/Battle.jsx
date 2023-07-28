import React, { useEffect, useState } from "react";
import Ships from "../Components/Ships/ViewShips";
const Battle = () => {
    const [ships, setShips] = useState({});
    const [planetarySystems, setPlanetarySystems] = useState([]);
    const [selectedSystem, setSelectedSystem] = useState(null);
    const [selectedShips, setSelectedShips] = useState({});
    const [defenderInfo, setDefenderInfo] = useState(null);
    const token = JSON.parse(sessionStorage.getItem("token")); // Retrieve the token from session storage
    const [battleResult, setBattleResult] = useState(null);
    // Function to fetch ships data from the backend
    const fetchShips = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/ships", {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the headers
                },
            });
            const data = await response.json();
            setShips(data.ships); // We update 'ships' with the 'ships' object from the response
        } catch (error) {
            console.error("Erreur lors de la récupération des vaisseaux:", error);
        }
    };

    // Function to fetch planetary systems data from the backend
    const fetchPlanetarySystems = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/planetary-systems", {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the headers
                },
            });
            const data = await response.json();
            setPlanetarySystems(data.planetarySystems);
        } catch (error) {
            console.error("Erreur lors de la récupération des systèmes planétaires:", error);
        }
    };

    // Function to handle selecting a planetary system as a target
    const handleSelectSystem = (system) => {
        setSelectedSystem(system);
        if (system && system.user_id) {
            fetchDefenderInfo(system.user_id);
        } else {
            setDefenderInfo(null);
        }
    };

    // Function to fetch defender's information from the backend
    const fetchDefenderInfo = async (defenderId) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/users/${defenderId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            setDefenderInfo(data.user);
        } catch (error) {
            console.error("Erreur lors de la récupération des informations de l'utilisateur:", error);
        }
    };

    // Function to handle selecting ships for attack
    const handleSelectShips = (shipType, quantity) => {
        setSelectedShips({ ...selectedShips, [shipType]: quantity });
    };

    // Function to handle sending the ships to battle
    // Function to handle sending the ships to attack
    const handleSendShips = async (defenderId) => {
        if (Object.keys(selectedShips).length === 0) {
            console.log("Victoire ! Vous avez gagné car vous n'avez pas envoyé de vaisseaux à l'attaque.");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/attack", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    user_id: defenderId,
                    ships: selectedShips,
                }),
            });
            const data = await response.json();
            console.log(battleResult, 'result');
            // Mettre à jour l'état selectedShips avec les résultats de la bataille
            setBattleResult(data.message);

            // Rafraîchir les données des vaisseaux après la bataille
            fetchShips();
        } catch (error) {
            console.error("Erreur lors de l'envoi des vaisseaux:", error);
        }
    };
    useEffect(() => {
        fetchShips();
        fetchPlanetarySystems();
    }, []);

    return (
        <div>
            <div className="py-0 p-1">
                <h1>Flotte</h1>
                <ul>
                    <Ships type={"fighter"} />
                    <Ships type={"frigate"} />
                    <Ships type={"cruiser"} />
                    <Ships type={"destroyer"} />
                    {ships &&
                        Object.entries(ships).map(([shipType, quantity]) => (
                            <li key={shipType}>
                                Type: {shipType} - Quantity: {quantity}
                                <input
                                    type="number"
                                    min="0"
                                    max={quantity}
                                    value={selectedShips[shipType] || 0}
                                    onChange={(e) => handleSelectShips(shipType, parseInt(e.target.value))}
                                />
                            </li>
                        ))}
                </ul>
            </div>
            <div className="py-0 p-4">
                <h1>Selected System</h1>
                <ul>
                    {planetarySystems &&
                        planetarySystems.map((system) => (
                            <li key={system.id}>
                                {system.name} (X: {system.x_coord}, Y: {system.y_coord})
                                <button onClick={() => handleSelectSystem(system)}>Select</button>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="py-0 p-6">
                {selectedSystem && (
                    <div>
                        <h2>Attaque</h2>
                        <p>Name: {selectedSystem.name}</p>
                        <p>X Coord: {selectedSystem.x_coord}</p>
                        <p>Y Coord: {selectedSystem.y_coord}</p>
                        {defenderInfo && (
                            <p>Defender: {defenderInfo.name}</p>
                        )}
                        <button onClick={() => selectedSystem.user_id && handleSendShips(selectedSystem.user_id)}>Attack</button>
                    </div>
                )}
            </div>
            <div className="py-0 p-8">
                {battleResult && (
                    <div>
                        <h2>Résultats de la bataille</h2>

                        <p>{battleResult}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Battle;
