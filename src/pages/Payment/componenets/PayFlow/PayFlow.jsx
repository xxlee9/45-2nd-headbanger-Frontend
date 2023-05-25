import React from 'react';
import styled from 'styled-components';
import mixin, { fontMix, flexSort, boxSize } from '../../../../styles/mixin';

const PayFlow = () => {
  return (
    <Container>
      <ViewBox>
        <FlowBar>
          <CampInfoBox>
            <CampImg src="https://picsum.photos/100/100" alt="캠핑장 사진" />
            <CampInfo>
              <CampName>선릉 캠핑장</CampName>
              <CampRegion>서울</CampRegion>
            </CampInfo>
          </CampInfoBox>
          <DataInfoBox>
            <StartDate> 체크인 : 06월 01일</StartDate>
            <EndDate> 체크아웃 : 06월 10일</EndDate>
            <Night>총 일수 : 9박</Night>
          </DataInfoBox>
          <NextImg src="/images/Payment/right-arrow.png" />
          <ZoneBox>
            <ZoneList>사이트 : A-2</ZoneList>
            <ZoneList>사이트 : B-3</ZoneList>
          </ZoneBox>
          <TotalPrice>
            <PriceTitle>최종 결제금액</PriceTitle>
            <Price>50,000원</Price>
          </TotalPrice>
          <PayButton>
            <PayImg src="/images/Payment/pay-arrow.png" />
            <PayTitle>결제</PayTitle>
          </PayButton>
        </FlowBar>
      </ViewBox>
    </Container>
  );
};

export default PayFlow;

// @media screen and (max-width: 768px) {
//   flex-direction: column;
//   padding: 0 24px;
// }

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: sticky;
  bottom: 40px;
`;

const ViewBox = styled.div`
  width: 100%;
  height: 100%;
`;

const FlowBar = styled.div`
  width: 100%;
  height: 100%;
  ${flexSort('space-between', 'center')}
  gap: 20px;
  padding: 16px 40px;
  background-color: ${props => props.theme.mainBlack};
`;

const CampInfoBox = styled.div`
  ${flexSort('center', 'start')}
  position: relative;
  gap: 8px;
  width: 100%;
  max-width: 280px;
  height: 100%;

  ::after {
    content: '';
    width: 100%;
    height: 80px;
    position: absolute;
    top: 20px;
    border-right: 2px solid ${props => props.theme.mainYellow};
  }
`;

const CampImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
`;

const CampInfo = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 8px;
`;

const CampName = styled.p`
  width: 100%;
  font-size: 16px;
  color: ${props => props.theme.white};
`;

const CampRegion = styled.p`
  font-size: 12px;
  color: ${props => props.theme.white};
`;

const DataInfoBox = styled.div`
  ${flexSort('center', 'start')}
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 200px;
  height: 120px;
`;

const StartDate = styled.p`
  font-size: 16px;
  color: ${props => props.theme.white};
`;

const EndDate = styled.p`
  font-size: 16px;
  color: ${props => props.theme.white};
`;

const Night = styled.p`
  font-size: 16px;
  color: ${props => props.theme.white};
`;

const NextImg = styled.img`
  width: 48px;
  height: 48px;
`;

const ZoneBox = styled.div`
  ${flexSort('center', 'center')};
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 160px;
  height: 120px;
  gap: 8px;
  ::after {
    content: '';
    width: 100%;
    height: 80px;
    position: absolute;
    top: 20px;
    border-right: 2px solid ${props => props.theme.mainYellow};
  }
`;

const ZoneList = styled.p`
  width: 100%;
  font-size: 16px;
  color: ${props => props.theme.white};
`;

const TotalPrice = styled.div`
  ${flexSort('center', 'center')}
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 200px;
  height: 120px;
`;

const PriceTitle = styled.p`
  font-size: 20px;
  color: ${props => props.theme.white};
`;

const Price = styled.p`
  font-size: 20px;
  color: #bf2828;
`;

const PayButton = styled.div`
  ${flexSort('center', 'center')}
  flex-direction: column;
  gap: 12px;
  width: 80%;
  max-width: 120px;
  height: 120px;
  border-radius: 20px;
  background-color: ${props => props.theme.mainYellow};
  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const PayImg = styled.img`
  width: 40px;
  height: 40px;
`;

const PayTitle = styled.p`
  font-size: 24px;
  color: ${props => props.theme.black};
`;
