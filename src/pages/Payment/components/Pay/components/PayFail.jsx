import React from 'react';
import { flexSort } from '../../../../../styles/mixin';
import styled from 'styled-components';

const PayFail = () => {
  return (
    <Container>
      <div>결제에 실패했습니다.</div>
      <button>돌아가기</button>
    </Container>
  );
};

export default PayFail;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${flexSort('center', 'center')}
  flex-direction: column;
`;
