import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flexSort } from '../../../../../styles/mixin';
import theme from '../../../../../styles/theme';

const BookingList = () => {
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    fetch('/data/BookingData.json')
      .then(res => res.json())
      .then(data => {
        setBookingList(data);
      });
  }, []);

  return (
    <Container>
      <ViewBox>
        {bookingList.map(
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
              <BookingView key={id}>
                <BookingNumber>예약번호 : {reservationNumber}</BookingNumber>
                <BookingDescription>
                  <BookingImg src={thumbnail} alt="캠핑장 사진" />
                  <BookingInfo>
                    <InfoTitle>{camp}</InfoTitle>
                    <InfoText>
                      {startDate} ~ {endDate} / {peopleCount} 명
                    </InfoText>
                    <InfoZone>캠핑존 : {zone}</InfoZone>
                  </BookingInfo>
                  <BookingPrice>
                    {Math.floor(totalPrice).toLocaleString()} 원
                  </BookingPrice>
                </BookingDescription>
              </BookingView>
            );
          }
        )}
      </ViewBox>
    </Container>
  );
};

export default BookingList;

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
  ${flexSort('center', 'start')}
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 8px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${props => theme.borderGrey};
`;

const BookingNumber = styled.h2`
  font-size: 20px;
`;

const BookingDescription = styled.div`
  ${flexSort('space-between', 'center')}
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const BookingImg = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const BookingInfo = styled.div`
  ${flexSort('start', 'start')}
  flex-direction: column;
  padding-left: 12px;
  gap: 24px;
  font-size: 16px;
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 0;
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

const BookingPrice = styled.p`
  width: 40%;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
