import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import ReviewModal from './Review/ReviewModal';
import styled from 'styled-components';
import { flexSort } from '../../../../../styles/mixin';

const BookingLogcopy = () => {
  const [logList, setLogList] = useState([]);
  const TOKEN = localStorage.getItem('token');

  const reviewModal = useModal(ReviewModal);
  const showReviewModal = () => {
    reviewModal.show({ id: logList[0].campId });
  };

  const toDetail = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    axios
      .get('http://10.58.52.227:3000/users/reservation-lists', {
        headers: {
          authorization: TOKEN,
        },
      })
      .then(res => setLogList(res.data.pastList));
  }, []);

  return (
    <Container>
      <ViewBox>
        {logList &&
          logList.map(
            ({
              campId,
              campingZoneNames,
              campsiteName,
              endDate,
              startDate,
              thumbnail,
              totalMembers,
              totalPrice,
              reservationNumber,
            }) => {
              return (
                <BookingView key={campId}>
                  <Link to={`/productdetail/${campId}`} onClick={toDetail}>
                    <ImgBox>
                      <BookingImg src={thumbnail} alt="캠핑장 사진" />
                    </ImgBox>
                  </Link>
                  <BookingDescription>
                    <BookingNumber>
                      예약번호 : {reservationNumber}
                    </BookingNumber>
                    <BookingInfo>
                      <div>
                        <InfoTitle>
                          {campsiteName}
                          이름
                        </InfoTitle>
                      </div>
                      <InfoText>
                        {startDate} ~ {endDate}
                        <InfoZone>캠핑존 : {campingZoneNames}</InfoZone>
                      </InfoText>
                      <p>예약인원 : {totalMembers} 명</p>
                    </BookingInfo>
                  </BookingDescription>
                  <BookingPrice>
                    {Math.floor(totalPrice).toLocaleString()} 원
                  </BookingPrice>
                  <ReviewBox onClick={showReviewModal}>리뷰 작성</ReviewBox>
                </BookingView>
              );
            }
          )}
      </ViewBox>
    </Container>
  );
};

export default BookingLogcopy;

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

const BookingView = styled.li`
  ${flexSort('center', 'center')};
  position: relative;
  width: 100%;
  height: 100%;
  gap: 8px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${props => props.theme.borderGrey};
`;

const BookingNumber = styled.h2`
  font-size: 16px;
  color: ${props => props.theme.middleGrey};
`;

const BookingDescription = styled.div`
  ${flexSort('space-between', 'space-between')}
  flex-direction: column;
  gap: 16px;
  padding-left: 12px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const ImgBox = styled.div`
  width: 150px;
  height: 190px;
`;

const BookingImg = styled.img`
  width: 150px;
  height: 190px;
  border-radius: 12px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const BookingInfo = styled.div`
  ${flexSort('center', 'start')}
  flex-direction: column;
  gap: 8px;
  height: 100%;
  width: 80%;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

const InfoTitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
`;

const InfoText = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const InfoZone = styled.p`
  font-size: 16px;
  line-height: 32px;
`;

const BookingPrice = styled.p`
  display: flex;
  justify-content: end;
  width: 50%;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
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
