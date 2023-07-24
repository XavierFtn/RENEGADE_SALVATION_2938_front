import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const BattleItem = ({ type, quantity }) => {
    return (
        <div className="col-md-6">
            <Card className="text-center">
                <Card.Body className="py-0 ">
                    <p>Ships : {type}</p>
                    <p>Quantity : {quantity}</p>
                </Card.Body>

            </Card>
        </div>

    );
};

export default BattleItem;