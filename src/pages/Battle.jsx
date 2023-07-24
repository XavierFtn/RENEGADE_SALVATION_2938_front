import React, { useState } from "react";
import BattleItem from "./BattleItem";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const Battle = () => {
    const initialAttackerShips = [
        { type: "Chasseur", quantity: 5 },
        { type: "Fregate", quantity: 5 },
    ];
    const initialDefenderShips = [
        { type: "Chasseur", quantity: 5 },
        { type: "Fregate", quantity: 6 },
    ];
    const [attackerShips, setAttackerShips] = useState(initialAttackerShips);
    const [defenderShips, setDefenderShips] = useState(initialDefenderShips);
    const [battleResult, setBattleResult] = useState(null);
    const [attackerId, setAttackerId] = useState("");
    const [defenderId, setDefenderId] = useState("");

    const calculateAttackPoints = (ships) => {
        return ships.reduce((total, ship) => total + ship.quantity, 0);
    };

    const calculateDefensePoints = (ships) => {
        return ships.reduce((total, ship) => total + ship.quantity, 0);
    };

    const handleBattle = () => {
        const attackerPoints = calculateAttackPoints(attackerShips);
        const defenderPoints = calculateDefensePoints(defenderShips);

        let rounds = 1;

        while (attackerShips.length > 0 && defenderShips.length > 0) {
            if (attackerPoints > defenderPoints) {

                const shipsDestroyed = Math.ceil(defenderShips.length * 0.3);
                defenderShips.splice(0, shipsDestroyed);
            } else if (attackerPoints < defenderPoints) {

                const shipsDestroyed = Math.ceil(attackerShips.length * 0.3);
                attackerShips.splice(0, shipsDestroyed);
            } else {

                const attackerShipsDestroyed = Math.ceil(attackerShips.length * 0.3);
                const defenderShipsDestroyed = Math.ceil(defenderShips.length * 0.3);
                attackerShips.splice(0, attackerShipsDestroyed);
                defenderShips.splice(0, defenderShipsDestroyed);
            }

            rounds++;
        }


        if (attackerShips.length > 0) {
            setBattleResult("You Win !");
        } else if (defenderShips.length > 0) {
            setBattleResult("You Lose !");
        } else {
            setBattleResult("Draw !");
        }
    };

    const handleRestartBattle = () => {

        setAttackerShips(initialAttackerShips);
        setDefenderShips(initialDefenderShips);
        setBattleResult(null);
    };



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
                    <BattleItem className="orbitron" key={index} type={ship.type} quantity={ship.quantity} />
                ))}

                <h3 className="orbitron">Defenders:</h3>
                {defenderShips.map((ship, index) => (
                    <BattleItem className="orbitron" key={index} type={ship.type} quantity={ship.quantity} />
                ))}

                <button
                    className="btn btn-dark border border-warning"
                    onClick={handleBattle}
                >
                    Start Battle
                </button>

                <Card className="text-center">
                    <Card.Body className="py-0 orbitron">
                        {battleResult && <p>Result Battle : {battleResult}</p>}
                    </Card.Body>
                </Card>

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
