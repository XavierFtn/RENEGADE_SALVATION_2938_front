import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Menu from "../layout/Menu";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import Battle from ".Battle";
import React, { useState } from "react";
import BattleItem from "./BattleItem";
import { Card } from "react-bootstrap";

const Battle = () => {
    const [attackerShips, setAttackerShips] = useState([
        { type: "Chasseur", quantity: 10 },
        { type: "Fregate", quantity: 5 },
    ]);
    const [defenderShips, setDefenderShips] = useState([
        { type: "Chasseur", quantity: 8 },
        { type: "Fregate", quantity: 6 },
    ]);
    const [battleResult, setBattleResult] = useState(null);

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
                // Attacker wins the round
                const shipsDestroyed = Math.ceil(defenderShips.length * 0.3);
                defenderShips.splice(0, shipsDestroyed);
            } else if (attackerPoints < defenderPoints) {
                // Defender wins the round
                const shipsDestroyed = Math.ceil(attackerShips.length * 0.3);
                attackerShips.splice(0, shipsDestroyed);
            } else {
                // Draw, both sides lose 30% of their ships
                const attackerShipsDestroyed = Math.ceil(attackerShips.length * 0.3);
                const defenderShipsDestroyed = Math.ceil(defenderShips.length * 0.3);
                attackerShips.splice(0, attackerShipsDestroyed);
                defenderShips.splice(0, defenderShipsDestroyed);
            }

            attackerPoints = calculateAttackPoints(attackerShips);
            defenderPoints = calculateDefensePoints(defenderShips);

            rounds++;
        }

        // Determine the battle result
        if (attackerShips.length > 0) {
            setBattleResult("Win !");
        } else if (defenderShips.length > 0) {
            setBattleResult("Lose !");
        } else {
            setBattleResult("Draw !");
        }
    };

    return (
        <div>
            <h2>Battle</h2>
            <button onClick={handleBattle}>Start Battle</button>
            {battleResult && <p>Result Battle : {battleResult}</p>}

            <h3>Attackers :</h3>
            {attackerShips.map((ship, index) => (
                <BattleItem key={index} type={ship.type} quantity={ship.quantity} />
            ))}

            <h3>Defenders:</h3>
            {defenderShips.map((ship, index) => (
                <BattleItem key={index} type={ship.type} quantity={ship.quantity} />
            ))}
        </div>
    );
};

export default Battle;