import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { flexSort, fontMix } from '../../../styles/mixin';

const Amenities = ({ amenitiesData }) => {
  const navigate = useNavigate();

  const handleImageClick = id => {
    navigate(`productslist?amenityId=${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <AmenitiesTitle> 편의시설 리스트</AmenitiesTitle>
      <AmenitiesImage>
        {amenitiesData.map(({ id, name }) => (
          <AmenityContainer key={id} onClick={() => handleImageClick(id)}>
            <StyledImageContainer>
              <StyledImage
                src={`/images/Main/Amenity${id}.png`}
                alt="편의시설 리스트"
              />
            </StyledImageContainer>
            <Imagename>{name}</Imagename>
          </AmenityContainer>
        ))}
        <AmenityContainer onClick={() => handleImageClick(0)}>
          <StyledImageContainer>
            <StyledImage
              src="/images/Main/Amenity8.png"
              alt="편의시설 리스트"
            />
          </StyledImageContainer>
          <Imagename>전체보기</Imagename>
        </AmenityContainer>
      </AmenitiesImage>
    </Container>
  );
};

export default Amenities;

const Container = styled.div`
  ${flexSort('center', 'start')}
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  height: 100%;
`;

const AmenitiesTitle = styled.h1`
  ${fontMix(24, 'black')}
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const AmenitiesImage = styled.div`
  ${flexSort('center', 'center')}
  gap: 12px;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  max-width: 1100px;
`;

const StyledImageContainer = styled.div`
  width: 266px;
  height: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  cursor: pointer;
`;

const AmenityContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const Imagename = styled.div`
  position: absolute;
  color: white;
  font-size: 18px;
  font-weight: 700;
  top: 24px;
  left: 24px;
  padding: 10px;
`;
