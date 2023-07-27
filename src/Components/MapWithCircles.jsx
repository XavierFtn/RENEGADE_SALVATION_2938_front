import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const MapWithCircles = ({ circlesData, backgroundImage }) => {
    return (
        <ComposableMap
            projection="geoMercator"
            width={800}
            height={600}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Geographies geography={YOUR_GEOJSON_DATA}>
                {({ geographies }) =>
                    geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
                }
            </Geographies>

            {circlesData.map((circle, index) => (
                <circle
                    key={index}
                    cx={circle.x}
                    cy={circle.y}
                    r={circle.radius}
                    fill={circle.fill}
                    stroke={circle.stroke}
                    strokeWidth={circle.strokeWidth}
                />
            ))}
        </ComposableMap>
    );
};

export default MapWithCircles;
