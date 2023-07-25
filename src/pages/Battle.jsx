import React, { useState, useEffect } from "react";
import axios from "axios";
import BattleItem from "./BattleItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const Battle = () => {
    const initialAttackerShips = [
        { type: "fighter", quantity: 5 },
        { type: "frigate", quantity: 5 },
        { type: "cruiser", quantity: 6 },
        { type: "destroyer", quantity: 6 },
    ];
    const initialDefenderShips = [
        { type: "fighter", quantity: 5 },
        { type: "frigate", quantity: 6 },
        { type: "cruiser", quantity: 6 },
        { type: "destroyer", quantity: 6 },
    ];

    const [attackerShips, setAttackerShips] = useState(initialAttackerShips);
    const [defenderShips, setDefenderShips] = useState(initialDefenderShips);
    const [battleResult, setBattleResult] = useState(null);
    const [selectedAttackerShips, setSelectedAttackerShips] = useState([]);

    const calculateAttackPoints = (ships) => {
        return ships.reduce((total, ship) => total + ship.quantity, 0);
    };

    const calculateDefensePoints = (ships) => {
        return ships.reduce((total, ship) => total + ship.quantity, 0);
    };

    const handleSelectAttackerShip = (ship) => {
        if (selectedAttackerShips.includes(ship)) {
            setSelectedAttackerShips(
                selectedAttackerShips.filter((s) => s !== ship)
            );
        } else {
            setSelectedAttackerShips([...selectedAttackerShips, ship]);
        }
    };

    const handleBattle = async () => {
        const attackerPoints = calculateAttackPoints(selectedAttackerShips);
        const defenderPoints = calculateDefensePoints(defenderShips);

        // Implémenter la logique de la bataille ici

        try {
            // Appel à l'API pour enregistrer les résultats de la bataille
            const response = await axios.post("http://127.0.0.1:8889/api/battle", {
                attackerShips: selectedAttackerShips,
                defenderShips: defenderShips,
                // Ajoutez d'autres données pertinentes à envoyer à l'API si nécessaire
            });
            const data = response.data;

            // Mettre à jour les vaisseaux restants après la bataille
            setAttackerShips(data.remainingAttackerShips);
            setDefenderShips(data.remainingDefenderShips);

            // Mettre à jour le résultat de la bataille
            setBattleResult(data.battleResult);
        } catch (error) {
            console.error("Error during battle:", error);
            // Gérer les erreurs de l'appel à l'API si nécessaire
        }
    };

    const handleRestartBattle = () => {
        setSelectedAttackerShips([]);
        setAttackerShips(initialAttackerShips);
        setDefenderShips(initialDefenderShips);
        setBattleResult(null);
    };

    const fetchUserShips = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8889/api/ships");
            const data = response.data;

            setAttackerShips([
                { type: "fighter", quantity: data.fighter[0]?.quantity || 0 },
                { type: "frigate", quantity: data.frigate[0]?.quantity || 0 },
                { type: "cruiser", quantity: data.cruiser[0]?.quantity || 0 },
                { type: "destroyer", quantity: data.destroyer[0]?.quantity || 0 },
                // Ajouter d'autres vaisseaux si nécessaire
            ]);

            setDefenderShips([
                { type: "fighter", quantity: data.fighter[0]?.quantity || 0 },
                { type: "frigate", quantity: data.frigate[0]?.quantity || 0 },
                { type: "cruiser", quantity: data.cruiser[0]?.quantity || 0 },
                { type: "destroyer", quantity: data.destroyer[0]?.quantity || 0 },
                // Ajouter d'autres vaisseaux si nécessaire
            ]);
        } catch (error) {
            console.error("Error fetching user ships:", error);
        }
    };

    useEffect(() => {
        fetchUserShips();
    }, []);

    return (
        <div className="row">
            <div>
                <div className="row mt-5 pt-2">
                    <div className="col d-flex justify-content-center">
                        <h1 className="orbitron">Battle!</h1>
                    </div>
                </div>

                <h3 className="orbitron">Attackers :</h3>
                {attackerShips.map((ship, index) => (
                    <BattleItem
                        className={`orbitron ${selectedAttackerShips.includes(ship) ? "selected" : ""
                            }`}
                        key={index}
                        type={ship.type}
                        quantity={ship.quantity}
                        onClick={() => handleSelectAttackerShip(ship)}
                    />
                ))}

                <h3 className="orbitron">Defenders:</h3>
                {defenderShips.map((ship, index) => (
                    <BattleItem className="orbitron" key={index} type={ship.type} quantity={ship.quantity} />
                ))}

                <button className="btn btn-dark border border-warning" onClick={handleBattle}>
                    Start Battle
                </button>

                <Card className="text-center">
                    <Card.Body className="py-0 orbitron">
                        {battleResult && <p>Result Battle : {battleResult}</p>}
                    </Card.Body>
                </Card>

                {battleResult && (
                    <div>
                        <h3 className="orbitron">Remaining Attackers :</h3>
                        {attackerShips.map((ship, index) => (
                            <BattleItem className="orbitron" key={index} type={ship.type} quantity={ship.quantity} />
                        ))}

                        <h3 className="orbitron">Remaining Defenders:</h3>
                        {defenderShips.map((ship, index) => (
                            <BattleItem className="orbitron" key={index} type={ship.type} quantity={ship.quantity} />
                        ))}
                    </div>
                )}

                <button
                    className="btn btn-dark border border-warning"
                    onClick={handleRestartBattle}
                >
                    Next Battle
                </button>
            </div>
        </div>
    );
};

export default Battle;