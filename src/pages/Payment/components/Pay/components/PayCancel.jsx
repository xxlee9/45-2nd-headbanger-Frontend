import React from 'react';
import styled from 'styled-components';
import { flexSort } from '../../../../../styles/mixin';

const PayCancel = () => {
  return (
    <Container>
      <div>결제가 취소되었습니다.</div>
      <button>다시 결제하기</button>
    </Container>
  );
};

export default PayCancel;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${flexSort('center', 'center')}
  flex-direction: column;
`;
