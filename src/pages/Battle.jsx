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
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            };

            const response = await fetch(
                "http://127.0.0.1:8000/api/register",
                options
            );
            const data = await response.json();
            console.log("data", data);
            if (data.status === "success") {
                // Récupérer le nom du système planétaire choisi

                localStorage.setItem("token", JSON.stringify(data.authorisation.token));
                localStorage.setItem("user", JSON.stringify(data.user.firstname));
                localStorage.setItem(
                    "planet",
                    JSON.stringify(data.user.planetary_system_name)
                );
                localStorage.setItem("avatar", JSON.stringify(data.user.picture)); // Save the avatar path in local storage

                swal(
                    "Registration successful!",
                    `Your Planetary System ${data.user.planetary_system_name} was created!`,
                    "success"
                );
                navigate("/");
            } else {
                swal("Registration failed!", data.message, "error");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            swal("Error", "An error occurred during registration", "error");
        }
    };

    return (

        <div className=" row ">

            <div>
                <div className="row mt-5 pt-2">
                    <div className="col d-flex justify-content-center">
                        <h1 className="orbitron">Battle!</h1>
                    </div>
                </div>

                <button className="btn btn-dark border border-warning" onClick={handleBattle}>Start Battle</button>
                {battleResult && <p>Result Battle : {battleResult}</p>}

                <h3 className="orbitron">Attackers :</h3>
                {attackerShips.map((ship, index) => (
                    <BattleItem className="orbitron" key={index} type={ship.type} quantity={ship.quantity} />
                ))}

                <h3 className="orbitron">Defenders:</h3>
                {defenderShips.map((ship, index) => (
                    <BattleItem className="orbitron" key={index} type={ship.type} quantity={ship.quantity} />
                ))}
            </div>
        </div>

    );
};

export default Battle;