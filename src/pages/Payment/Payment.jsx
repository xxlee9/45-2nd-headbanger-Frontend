import React from 'react';
import PayFlow from './componenets/PayFlow/PayFlow';
import Pay from './componenets/Pay/Pay';
import styled from 'styled-components';
import { flexSort } from '../../styles/mixin';

const Payment = () => {
  return (
    <Container>
      <ViewBox>
        <PayFlow />
        <Pay />
      </ViewBox>
    </Container>
  );
};

export default Payment;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ViewBox = styled.div`
  ${flexSort('center', 'center')}
  flex-direction: column;
  gap: 60px;
  width: 100%;
  height: 100%;
`;
