import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { flexSort } from '../../../../styles/mixin';

const Kakao = () => {
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

  const start = new Date(startDay).toISOString().split('T')[0];
  const startDate = new Date(new Date(start).getTime() + 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];
  const end = new Date(endDay).toISOString().split('T')[0];
  const endDate = new Date(new Date(end).getTime() + 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  const campName = productData.data[0].campName;
  const totalPeopleCount = adultCount + childCount + babyCount;

  const totalCampZone = [];
  for (const zoneItem of selectedZones) {
    totalCampZone.push(zoneItem.campingZoneId);
  }

  const orderInfo = {
    startDate: startDate,
    endDate: endDate,
    campingZoneId: totalCampZone,
    totalMembers: totalPeopleCount,
    totalPrice: totalPrice,
    tid: '',
  };

  console.log('서버로', orderInfo);

  const readyPaprams = {
    cid: 'TC0ONETIME',
    partner_order_id: 'partner_order_id',
    partner_user_id: 'partner_user_id',
    item_name: campName,
    quantity: totalCampZone.length,
    total_amount: totalPrice,
    tax_free_amount: 0,
    approval_url: `http://cvg-headbanger.s3-website.ap-northeast-2.amazonaws.com/paying?tid=${orderInfo.tid}&totalMembers=${orderInfo.totalMembers}&campingZoneId=${orderInfo.campingZoneId}&startDate=${orderInfo.startDate}&endDate=${orderInfo.endDate}&totalPrice=${orderInfo.totalPrice}
    `,
    fail_url:
      'http://cvg-headbanger.s3-website.ap-northeast-2.amazonaws.com/payfail',
    cancel_url:
      'http://cvg-headbanger.s3-website.ap-northeast-2.amazonaws.com/paycancel',
  };

  console.log('카카오로', readyPaprams);

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
        setNextRedirectPcUrl(next_redirect_pc_url);
        orderInfo.tid = res.data.tid;
      });
  }, []);

  return nextRedirectPcUrl;
  // (
  //   <PayButton href={nextRedirectPcUrl}>
  //     <PayImg src="/images/Payment/pay-arrow.png" />
  //     <PayTitle>결제</PayTitle>
  //   </PayButton>
  // );
};

export default Kakao;

const PayButton = styled.a`
  ${flexSort('center', 'center')}
  flex-direction: column;
  text-decoration-line: none;
  color: initial;
  gap: 12px;
  width: 80%;
  max-width: 120px;
  height: 120px;
  border: 0;
  border-radius: 20px;
  background-color: ${props => props.theme.mainDeepGreen};
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
