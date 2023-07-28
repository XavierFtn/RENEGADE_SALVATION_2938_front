import { Badge, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

function ModelShips(props) {
  return (
    <div>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold colorBisque">
            {" "}
            {props.type}{" "}
            <Badge bg="success" pill>
              {props.quantity}
            </Badge>
          </div>
        </div>
      </ListGroup.Item>
    </div>
  );
}
// évite les erreur de type: id is missing in props validation
ModelShips.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  quantity: PropTypes.string,
};

export default ModelShips;
