import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { flexSort } from '../../../../styles/mixin';

const PayFlow = () => {
  const [nextRedirectPcUrl, setNextRedirectPcUrl] = useState('');
  const {
    productData,
    selectedZones,
    startDay,
    endDay,
    adultCount,
    babyCount,
    childCount,
    petCount,
    totalPrice,
  } = useSelector(state => state);
  const TOKEN = localStorage.getItem('token');

  // 날짜 계산하는 식
  const start = new Date(startDay).toISOString().split('T')[0];
  const startDate = new Date(new Date(start).getTime() + 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];
  const end = new Date(endDay).toISOString().split('T')[0];
  const endDate = new Date(new Date(end).getTime() + 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  const totalNights =
    endDay >= startDay
      ? Math.ceil((endDay - startDay) / (1000 * 60 * 60 * 24))
      : 0;
  // ----------------
  const { campName, region, address, thumbnail } = productData.data;
  const totalPeopleCount = adultCount + childCount + babyCount;
  const totalCampZone = selectedZones.map(zoneItem => zoneItem.campingZoneId);
  const zoneList = selectedZones.map(zoneItem => zoneItem.zoneName);
  const maxPeoples = selectedZones.reduce(
    (accumulator, zoneItem) => accumulator + Number(zoneItem.maxPeople),
    0
  );

  const payPrice = Number(totalPrice).toLocaleString();

  let readyPaprams = {
    cid: 'TC0ONETIME',
    partner_order_id: 'partner_order_id',
    partner_user_id: 'partner_user_id',
    item_name: campName,
    quantity: totalCampZone.length,
    total_amount: totalPrice,
    tax_free_amount: 0,
    approval_url: `http://localhost:3000/paying?totalMembers=${totalPeopleCount}&campingZoneId=${totalCampZone}&startDate=${startDate}&endDate=${endDate}&totalPrice=${totalPrice}
    `,
    fail_url: 'http://localhost:3000/payfail',
    cancel_url: 'http://localhost:3000/paycancel',
  };

  useEffect(() => {
    axios
      .post('/v1/payment/ready', readyPaprams, {
        headers: {
          Authorization: 'KakaoAK edd72ff4d348df65098c647aaaddf5d3',
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      })
      .then(res => {
        const {
          data: { next_redirect_pc_url },
        } = res;
        localStorage.setItem('tid', res.data.tid);
        setNextRedirectPcUrl(next_redirect_pc_url);
      });
  }, []);

  return (
    <Container>
      <ViewBox>
        <FlowBar>
          <CampInfoBox>
            <CampImg src={thumbnail} alt="캠핑장 사진" />
            <CampInfo>
              <CampName>{campName}</CampName>
              <p>{address}</p>
              <CampRegion>{region}</CampRegion>
            </CampInfo>
          </CampInfoBox>
          <DataInfoBox>
            <StartDate>체크인 : {startDate}</StartDate>
            <EndDate>체크아웃 :{endDate}</EndDate>
            <Night>
              총 일수 : {totalNights}박 {totalNights + 1}일
            </Night>
          </DataInfoBox>
          <NextImg src="/images/Payment/right-arrow.png" />
          <ZoneBox>
            {zoneList.map(zone => {
              return <ZoneList key={zone}>사이트 : {zone}</ZoneList>;
            })}
          </ZoneBox>
          <TotalPrice>
            <PriceTitle>최종 결제금액</PriceTitle>
            <Price>{payPrice}원</Price>
          </TotalPrice>
          <PayButton href={nextRedirectPcUrl}>
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

const PayButton = styled.a`
  ${flexSort('center', 'center')}
  flex-direction: column;
  text-decoration-line: none;
  color: initial;
  gap: 12px;
  width: 80%;
  max-width: 120px;
  height: 120px;
  border-radius: 20px;
  background-color: ${props => props.theme.mainGreen};
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
  color: ${props => props.theme.white};
`;
