import React from 'react';
import { darken, lighten } from 'polished';
import styled from 'styled-components';

const ClickableZone = ({
  zone,
  color,
  isHovered,
  isSelected,
  handleBoxHover,
  handleBoxClick,
}) => {
  return (
    <g onClick={() => handleBoxClick(zone)}>
      <ClickableBox
        points={`${zone.coordinates.x1},${zone.coordinates.y1} ${zone.coordinates.x2},${zone.coordinates.y2} ${zone.coordinates.x3},${zone.coordinates.y3} ${zone.coordinates.x4},${zone.coordinates.y4}`}
        color={color}
        isHovered={isHovered}
        isSelected={isSelected}
        onMouseEnter={() => handleBoxHover(zone)}
        onMouseLeave={() => handleBoxHover(null)}
      />
    </g>
  );
};

const ClickableBox = styled.polygon`
  fill: ${props =>
    props.isHovered || props.isSelected ? '#FFC107' : props.color};
  stroke: ${props => props.color};
  stroke-width: 0;
  transition: fill 0.2s;

  &:hover {
    fill: '#FFC107';
    cursor: pointer;
  }
`;

export default ClickableZone;
