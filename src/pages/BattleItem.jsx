import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";


const BattleItem = ({ type, quantity, onClick, className }) => {
    return (
        <div className={className} onClick={onClick}>
            <p>{type}</p>
            <p>Quantity: {quantity}</p>
        </div>
    );
};

export default BattleItem;
