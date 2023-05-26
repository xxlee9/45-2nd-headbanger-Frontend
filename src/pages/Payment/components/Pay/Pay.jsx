import React from 'react';
import styled from 'styled-components';
import { flexSort } from '../../../../styles/mixin';

const PAY_DATA = [
  { id: 1, title: '신용/체크카드', url: '/images/Payment/pay-card.png' },
  { id: 2, title: '토스페이', url: '/images/Payment/pay-toss.png' },
  { id: 3, title: '카카오페이', url: '/images/Payment/pay-kakao.png' },
  { id: 4, title: '네이버페이', url: '/images/Payment/pay-naver.png' },
];

const Pay = () => {
  return (
    <Container>
      <ViewBox>
        <PayTitle>결제 방법</PayTitle>
        <PayBox>
          {PAY_DATA.map(({ id, title, url }) => {
            return (
              <PayBy key={id}>
                <HowToPay type="radio" id={title} name="howToPay" />
                <label for={title}>{title}</label>
                <PayIcon src={url} />
              </PayBy>
            );
          })}
        </PayBox>
      </ViewBox>
    </Container>
  );
};

export default Pay;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
`;

const ViewBox = styled.div`
  ${flexSort('center', 'start')}
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 0 50px;
  margin: 0 auto;
`;

const PayTitle = styled.h1`
  height: 100%;
  width: 100%;
  font-size: 28px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${props => props.theme.mainYellow};
`;

const PayBox = styled.div`
  ${flexSort('center', 'center')};
  flex-direction: column;
  height: 100%;
  gap: 24px;
  padding-top: 24px;
`;

const PayBy = styled.div`
  ${flexSort('start', 'center')}
  gap: 8px;
  width: 100%;
  height: 100%;
  line-height: 48px;
`;

const HowToPay = styled.input`
  height: 100%;
  font-size: 24px;
`;

const PayIcon = styled.img`
  width: 60px;
  height: 100%;
`;
