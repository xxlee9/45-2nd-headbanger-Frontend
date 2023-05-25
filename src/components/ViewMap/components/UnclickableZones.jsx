import React from 'react';
import styled from 'styled-components';

const UnClickableZone = ({ zone, color }) => {
  return (
    <g>
      <UnClickableBox
        points={`${zone.coordinates.x1},${zone.coordinates.y1} ${zone.coordinates.x2},${zone.coordinates.y2} ${zone.coordinates.x3},${zone.coordinates.y3} ${zone.coordinates.x4},${zone.coordinates.y4}`}
        color={color}
      />
      <pattern
        id={`${zone.zoneName}-pattern`}
        width="8"
        height="8"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M-1,1 l2,-2 M0,8 l8,-8 M7,9 l2,-2"
          strokeWidth="1"
          stroke="#B0B0B0"
        />
      </pattern>
      <polygon
        points={`${zone.coordinates.x1},${zone.coordinates.y1} ${zone.coordinates.x2},${zone.coordinates.y2} ${zone.coordinates.x3},${zone.coordinates.y3} ${zone.coordinates.x4},${zone.coordinates.y4}`}
        fill={`url(#${zone.zoneName}-pattern)`}
      />
    </g>
  );
};

const UnClickableBox = styled.polygon`
  fill: transparent;
  stroke: ${props => props.color};
  stroke-width: 0;
`;

export default UnClickableZone;
