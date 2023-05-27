import React, { useEffect, useState } from 'react';
import NiceModal from '@ebay/nice-modal-react';
import ReviewModal from './Review/ReviewModal';
import styled from 'styled-components';
import { flexSort } from '../../../../../styles/mixin';
import theme from '../../../../../styles/theme';

const BookingLog = () => {
  const [logList, setLogList] = useState([]);

  const showReviewModal = () => {
    NiceModal.show(ReviewModal, { name: 'Review' });
  };

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
                  <ReviewBox camp={camp} onClick={showReviewModal}>
                    리뷰 작성
                  </ReviewBox>
                </LogDescription>
              </LogItem>
            );
          }
        )}
      </ViewBox>
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
  border: 2px solid ${props => props.theme.mainGreen};
  color: ${props => props.theme.mainGreen};
  padding: 4px 8px;
  border-radius: 4px;
  line-height: 28px;
  font-size: 16px;
  :hover {
    box-shadow: ${props => props.theme.mainDeepGrey} 1px 1px;
    color: ${props => props.theme.mainMediumGreen};
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    background-color: #fff;
    color: deepskyblue;
  }
`;
