import React from 'react';
import PayFlow from './components/PayFlow/PayFlow';
import Pay from './components/Pay/Pay';
import styled from 'styled-components';
import { flexSort } from '../../styles/mixin';

const Payment = () => {
  return (
    <Container>
      <ViewBox>
        <PayTitle>확인 및 결제</PayTitle>
        <PayBox>
          <Pay />
          <PayFlow />
        </PayBox>
      </ViewBox>
    </Container>
  );
};

export default Payment;

const Container = styled.div`
  ${flexSort('center', 'center')}
  width: 100%;
  height: 100%;
  padding-top: 80px;
`;

const ViewBox = styled.div`
  ${flexSort('center', 'space-between')}
  flex-direction: column;
  gap: 60px;
  width: 1100px;
  height: 100%;
  max-width: 1100px;
`;

const PayTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
`;

const PayBox = styled.div`
  ${flexSort('space-between', 'center')}
  align-items: flex-start;
`;
