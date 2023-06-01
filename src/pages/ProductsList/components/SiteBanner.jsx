import React from 'react';
import styled from 'styled-components';
import { boxSize, fontMix } from '../../../styles/mixin';

const SiteBanner = () => {
  return (
    <CampingBanner>
      <TentIcon />
      <BannerContent>
        다음 캠핑을 계획하시나요? 예약 전에 업데이트된 모든 관련 여행 요건을
        확인해 주시기 바랍니다.
      </BannerContent>
    </CampingBanner>
  );
};

const CampingBanner = styled.div`
  ${boxSize(770, 68)}
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
  }
`;
const BannerContent = styled.div`
  ${fontMix(15, '252525')}
  margin-left: 10px;
  font-weight: 400;
`;

const TentIcon = styled.div`
  ${boxSize(30, 30)}
  margin-left: 23px;
  background-image: url('../images/ProductsList/tentIcon.png');
  background-repeat: no-repeat;
  background-size: contain;
`;

export default SiteBanner;
