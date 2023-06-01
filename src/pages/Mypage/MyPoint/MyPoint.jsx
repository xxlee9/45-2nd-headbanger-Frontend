import React from 'react';
import styled from 'styled-components';
import { flexSort, fontMix } from '../../../styles/mixin';
import theme from '../../../styles/theme';

const SERVICE_DATA = [
  { id: 1, title: '쿠폰', url: '/images/Mypage/couponicon.png' },
  { id: 2, title: '이벤트', url: '/images/Mypage/eventicon.png' },
  { id: 3, title: '빈자리 예약', url: '/images/Mypage/tent.png' },
];

const MyPoint = () => {
  return (
    <Container>
      <ViewBox>
        <WelcomeBox>
          <WelcomeTitle>
            <p>오늘은 왠지</p>
            <p>어디로든 떠나고 싶은 날이네요!</p>
          </WelcomeTitle>
        </WelcomeBox>
        <PointBox>
          <PointSection>
            <PointTitle>내 포인트</PointTitle>
            <PointText>600,000P</PointText>
          </PointSection>
          <ServiceSection>
            {SERVICE_DATA.map(({ id, title, url }) => {
              return (
                <ServiceBox key={id}>
                  <ServiceIcon src={url} />
                  <ServiceTitle>{title}</ServiceTitle>
                </ServiceBox>
              );
            })}
          </ServiceSection>
        </PointBox>
      </ViewBox>
    </Container>
  );
};

export default MyPoint;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }
`;

const ViewBox = styled.div`
  ${flexSort('center', 'center')}
  width: 100%;
  height: 100%;
  gap: 48px;
  margin: 0 auto;
  padding: 40px 50px;
  background-color: #eeeeee;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 40px 0;
  }
`;

const WelcomeBox = styled.div`
  ${flexSort('center', 'center')}
  flex-direction: column;
  width: 100%;
  height: 350px;
  background-color: #fff;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 120px;
  }
`;

const WelcomeTitle = styled.h3`
  ${flexSort('center', 'center')}
  flex-direction: column;
  gap: 36px;
  width: 100%;
  height: 100%;
  font-size: 24px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const PointBox = styled.div`
  ${flexSort('space-between', 'center')}
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 100%;
  }
`;
const PointSection = styled.div`
  ${flexSort('space-between', 'center')}
  flex-direction: column;
  width: 100%;
  height: 160px;
  padding: 40px;
  background-color: #fff;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    padding: 20px;
    height: 80px;
  }
`;

const PointTitle = styled.h3`
  ${fontMix(24)};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const PointText = styled.p`
  ${fontMix(21)};
  color: deepskyblue;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ServiceSection = styled.div`
  ${flexSort('space-around', 'center')}
  width: 100%;
  height: 160px;
  padding: 40px;
  background-color: #fff;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    padding: 20px;
    height: 80px;
  }
`;

const ServiceBox = styled.div`
  ${flexSort('center', 'center')};
  width: 100%;
  flex-direction: column;
  gap: 12px;
  :hover {
    cursor: pointer;
  }
`;

const ServiceTitle = styled.h3`
  ${fontMix(16)};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ServiceIcon = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
