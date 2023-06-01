import React from 'react';
import ClickableZone from './ClickableZones';
import UnClickableZone from './UnclickableZones';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const getColor = zoneName => {
  switch (zoneName[0]) {
    case 'A':
      return '#252525';
    case 'B':
      return '#252525';
    case 'C':
      return '#252525';
    default:
      return '#252525';
  }
};

const ZoneBoxes = ({
  hoveredBox,
  handleBoxHover,
  handleBoxClick,
  availableZones = [],
  unavailableZones = [],
}) => {
  const selectedZones = useSelector(state => state.selectedZones);

  const allZones = [...availableZones, ...(unavailableZones || [])].map(
    zone => {
      const color = getColor(zone.zoneName);
      const centerX = (zone.coordinates.x1 + zone.coordinates.x3) / 2;
      const centerY = (zone.coordinates.y1 + zone.coordinates.y3) / 2;
      const isHovered = hoveredBox && zone.zoneName === hoveredBox.zoneName;
      const isPossible = availableZones.includes(zone);
      const isSelected = selectedZones.find(
        selectedBox => selectedBox.zoneName === zone.zoneName
      );

      return (
        <g key={zone.zoneName}>
          {isPossible ? (
            <ClickableZone
              zone={zone}
              color={color}
              isHovered={isHovered}
              isSelected={isSelected}
              handleBoxHover={handleBoxHover}
              handleBoxClick={handleBoxClick}
            />
          ) : (
            <UnClickableZone zone={zone} color={color} />
          )}
          <ZoneName
            x={centerX}
            y={centerY + 8}
            fill={isPossible ? 'white' : 'Black'}
            onClick={isPossible ? () => handleBoxClick(zone) : undefined}
            onMouseEnter={isPossible ? () => handleBoxHover(zone) : undefined}
            onMouseLeave={isPossible ? () => handleBoxHover(null) : undefined}
          >
            {zone.zoneName}
          </ZoneName>
        </g>
      );
    }
  );

  return allZones;
};

const ZoneName = styled.text`
  font-size: 16px;
  text-anchor: middle;

  cursor: pointer;
`;

export default ZoneBoxes;
