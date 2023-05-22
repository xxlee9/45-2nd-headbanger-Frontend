import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flexSort, fontMix } from '../../../styles/mixin';

const Amenities = () => {
  const [comfortable, setComfotable] = useState([]);

  useEffect(() => {
    fetch('/data/Amenities.json')
      .then(res => res.json())
      .then(data => {
        setComfotable(data);
      });
  }, []);
  return (
    <div>
      <AmenitiesTitle># 편의시설 리스트</AmenitiesTitle>
      <AmenitiesImage>
        {comfortable.map((item, index) => (
          <StyledImageContainer key={index}>
            <StyledImage src={item.image} alt="편의시설 리스트" />
            <StyledName>{item.name}</StyledName>
          </StyledImageContainer>
        ))}
      </AmenitiesImage>
    </div>
  );
};

export default Amenities;

const AmenitiesTitle = styled.h6`
  ${fontMix(36, 'black')}
  margin: 100px 0 5px 170px;
`;

const AmenitiesImage = styled.div`
  ${flexSort('space-between', 'flex-start')}
  flex-wrap: wrap;
  margin-left: 190px;
`;

const StyledImageContainer = styled.div`
  position: relative;
  margin-right: 2%;
  margin-bottom: 20px;
  padding: 0 10px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 310px;
  height: 270px;
  margin-left: -10px;
  margin-bottom: 50px;
  border-radius: 25px;
  opacity: 1;
  cursor: pointer;
  transform: scale(1);
  transition: all 2s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledName = styled.div`
  ${fontMix(36, 'white')}
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  margin-left: 10px;
  margin-top: 5px;
`;
