import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { facilitiesData } from './FACILITIES_DATA';
import { Title } from './TxtDescription';
import { flexSort, fontMix } from '../../../styles/mixin';
import theme from '../../../styles/theme';

const FacilitiesComponent = () => {
  const productData = useSelector(state => state.productData);
  const { checkIn, checkOut, amenities } = productData.data;

  const includedFacilities = facilitiesData.filter(facility =>
    amenities.includes(facility.name)
  );

  const excludedFacilities = facilitiesData.filter(
    facility => !amenities.includes(facility.name)
  );

  const sortedFacilities = [...includedFacilities, ...excludedFacilities];

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <FacilitiesContainer>
      <Title>편의시설/서비스</Title>
      <CheckTime>
        <p>체크인: {checkIn}</p>
        <p>체크아웃: {checkOut}</p>
      </CheckTime>
      <SpaceBetween>
        {sortedFacilities.map(facility => (
          <FacilityItem
            key={facility.name}
            available={amenities.includes(facility.name)}
          >
            {amenities.includes(facility.name) ? (
              <>
                <FacilityIcon>
                  <Emoji>{facility.emoji}</Emoji>
                </FacilityIcon>
                <FacilityName>{facility.name}</FacilityName>
              </>
            ) : (
              <>
                <CancellationIcon>&#10060;</CancellationIcon>
                <FacilityName>
                  <CancellationText>{facility.name}</CancellationText>
                </FacilityName>
              </>
            )}
          </FacilityItem>
        ))}
      </SpaceBetween>
    </FacilitiesContainer>
  );
};

export default FacilitiesComponent;

const FacilitiesContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-bottom: 1px solid ${theme.borderGrey};
`;

const CheckTime = styled.div`
  line-height: 1.5;
  ${fontMix(16, theme.mainBlack)}
`;

const FacilityItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  text-decoration: ${({ available }) => (available ? 'none' : 'line-through')};
  opacity: ${({ available }) => (available ? '1' : '0.5')};
`;

const SpaceBetween = styled.div`
  ${flexSort('space-between', 'center')}
  margin-bottom: 20px;
`;

const FacilityIcon = styled.span`
  margin-right: 5px;
`;

const FacilityName = styled.span`
  display: flex;
  align-items: center;
  font-weight: ${({ available }) => (available ? 'bold' : 'normal')};
  margin-right: 5px;
`;

const CancellationText = styled.span`
  display: flex;
  align-items: center;
  text-decoration: line-through;
`;

const CancellationIcon = styled.span`
  margin-right: 5px;
`;

const Emoji = styled.span`
  margin-right: 5px;
`;
