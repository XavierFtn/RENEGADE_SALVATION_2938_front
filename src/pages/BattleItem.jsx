import React from "react";

const BattleItem = ({ type, quantity }) => {
    return (
        <div>
            <p>Type de vaisseau : {type}</p>
            <p>Quantité : {quantity}</p>
        </div>
    );
};

export default BattleItem;