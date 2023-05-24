import React, { useEffect, useState } from 'react';
import { flexSort } from '../../../../../styles/mixin';
import styled from 'styled-components';
import theme from '../../../../../styles/theme';
import Review from './Review/Review';

const BookingLog = () => {
  const [logList, setLogList] = useState([]);

  useEffect(() => {
    fetch('/data/LogData.json')
      .then(res => res.json())
      .then(data => {
        setLogList(data);
      });
  }, []);

  return (
    <Container>
      <ViewBox>
        {logList.map(
          ({
            id,
            reservationNumber,
            camp,
            thumbnail,
            startDate,
            endDate,
            zone,
            peopleCount,
            totalPrice,
          }) => {
            return (
              <LogItem key={id}>
                <LogDescription>
                  <LogImg src={thumbnail} alt="캠핑장 사진" />
                  <LogInfo>
                    <InfoTitle>{camp}</InfoTitle>
                    <InfoText>
                      {startDate} ~ {endDate} / {peopleCount} 명
                    </InfoText>
                    <InfoZone>캠핑존 : {zone}</InfoZone>
                  </LogInfo>
                  <CampPrice>
                    {Math.floor(totalPrice).toLocaleString()} 원
                  </CampPrice>
                  <ReviewBox>리뷰 남기기</ReviewBox>
                </LogDescription>
              </LogItem>
            );
          }
        )}
      </ViewBox>
      <Review />
    </Container>
  );
};

export default BookingLog;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ViewBox = styled.ul`
  ${flexSort('start', 'center')}
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogItem = styled.li`
  ${flexSort('center', 'start')}
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 8px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${props => theme.borderGrey};
`;

const LogDescription = styled.div`
  position: relative;
  ${flexSort('space-between', 'center')}
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const LogImg = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    :hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
`;

const LogInfo = styled.div`
  ${flexSort('start', 'start')}
  flex-direction: column;
  padding-left: 12px;
  gap: 24px;
  font-size: 16px;
  width: 80%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InfoTitle = styled.h3`
  font-size: 24px;
`;

const InfoText = styled.p`
  font-size: 16px;
`;

const InfoZone = styled.p`
  font-size: 16px;
`;

const CampPrice = styled.p`
  width: 40%;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    text-align: right;
    width: 100%;
    text-align: right;
  }
`;

const ReviewBox = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: max-content;
  background-color: transparent;
  border: 0;
  line-height: 28px;
  font-size: 16px;
  :hover {
    color: deepskyblue;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
