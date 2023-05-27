import React, { useState } from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import styled from 'styled-components';

const DEFAULT_START_RATE = -1;

const StarRating = ({ onSaveRating }) => {
  const [selectedStar, setSelectedStar] = useState(DEFAULT_START_RATE);
  const [hoveredStar, setHoveredStar] = useState(DEFAULT_START_RATE);
  const handleStarClick = index => {
    setSelectedStar(index);
    onSaveRating(index + 1);
  };

  const handleStarHover = index => {
    setHoveredStar(index);
  };

  const handleStarLeave = () => {
    setHoveredStar(DEFAULT_START_RATE);
  };

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          filled={selectedStar !== DEFAULT_START_RATE && index <= selectedStar}
          hovered={hoveredStar !== DEFAULT_START_RATE && index <= hoveredStar}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => handleStarHover(index)}
          onMouseLeave={handleStarLeave}
        />
      ))}
    </div>
  );
};

export default StarRating;

const StarIcon = styled(TiStarFullOutline)`
  font-size: 36px;
  color: ${({ filled, hovered, theme }) =>
    filled || hovered ? theme.ratingYellow : theme.white};
  cursor: pointer;
  @media screen and (max-width: 900px) {
    font-size: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
