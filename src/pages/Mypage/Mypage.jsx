import React from 'react';
import UserSetting from './UserSetting/UserSetting';
import MyPoint from './MyPoint/MyPoint';
import MyCamping from './MyCamping/MyCamping';
import styled from 'styled-components';
import { flexSort } from '../../styles/mixin';

const Mypage = () => {
  return (
    <Container>
      <UserSetting />
      <MyPoint />
      <MyCamping />
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  ${flexSort('center', 'center')}
  flex-direction: column;
  gap: 100px;

  @media screen and (max-width: 768px) {
    gap: 50px;
  }
`;
