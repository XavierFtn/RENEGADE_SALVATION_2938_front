import { map } from "leaflet";
import { ListGroup } from "react-bootstrap";
import { Stage, Layer, Circle, Image as KonvaImage } from "react-konva";
import { json } from "react-router-dom";
//import radarImage from "../assets/radar.jpg";

function Map() {
  return (
    <Stage width={999} height={999}>
      <Layer>
        {/* <KonvaImage
          image={radarImage} 
          width={1000} 
          height={1000} 
        /> */}
        <Circle
          x={532}
          y={128}
          radius={10}
          fill="red"
          stroke="green"
          strokeWidth={1}
        />
        <Circle
          x={487}
          y={128}
          radius={10}
          fill="blue"
          stroke="black"
          strokeWidth={1}
        />
      </Layer>
    </Stage>
  );
}

export default Map;
