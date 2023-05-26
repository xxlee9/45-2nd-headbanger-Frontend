import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import OrderSuccessModal from './OrderSuccessModal';
import LodaingMothin from '../../../../../components/Common/LoadingMotion';
import styled from 'styled-components';
import { flexSort } from '../../../../../styles/mixin';

const Paying = () => {
  const [orderSuccessData, setOrderSuccessData] = useState({});

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const PG_TOKEN = params.get('pg_token');
  const startDate = params.get('startDate');
  const endDate = params.get('endDate');
  const campingZoneId = params.get('campingZoneId');
  const totalMembers = Number(params.get('totalMembers'));
  const totalPrice = Number(params.get('totalPrice'));
  const tid = localStorage.getItem('tid');

  const totalZone = campingZoneId.split(',').map(Number);

  const orderData = {
    pgToken: PG_TOKEN,
    tid: tid,
    startDate: startDate,
    endDate: endDate,
    totalMembers: totalMembers,
    totalPrice: totalPrice,
    campingZoneId: totalZone,
  };

  const openSuccessModal = () => {
    NiceModal.show(OrderSuccessModal, { name: 'orderSuccess' });
  };

  useEffect(() => {
    axios
      .post('http://10.58.52.227:3000/payments', orderData, {
        headers: {
          'Content-Type': 'application/json',
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjg1NDQ4MTY2LCJleHAiOjE2ODU4ODAxNjYsImlzcyI6InRlc3QifQ.kRipmwMsE6dCdpmr9_JvWJwsWKhnhJ1c44Fa-Fm8HLc',
        },
      })
      .then(data => {
        setOrderSuccessData(data.data.paymentResult);
        openSuccessModal();
      })
      .then(localStorage.removeItem('tid'));
  }, []);

  return (
    <Container>
      <LodaingMothin />
      <LoadingTextBox>
        <PayTitle>
          결제가 <br />
          진행중 입니다.
          <PayText>잠시만 기다려 주세요.</PayText>
        </PayTitle>
      </LoadingTextBox>
    </Container>
  );
};

export default Paying;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${flexSort('center', 'center')}
  flex-direction: column;
  gap: 40px;
  text-align: center;
  transform: translateY(-80px);
`;

const LoadingTextBox = styled.div`
  ${flexSort('center', 'center')}
  flex-direction: column;
  gap: 24px;
`;

const PayTitle = styled.h1`
  font-size: 28px;
`;

const PayText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.borgerGrey};
`;
