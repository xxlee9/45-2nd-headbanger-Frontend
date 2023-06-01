import React, { useState } from 'react';
import WishList from './components/WishList/WishList';
import BookingList from './components/BookingList/BookingList';
import BookingLog from './components/BookingLog/BookingLog';
import CancleBooking from './components/CancleBooking/CancleBooking';
import styled from 'styled-components';
import { flexSort, fontMix } from '../../../styles/mixin';

const MyCamping = () => {
  const [menuTab, setMenuTab] = useState('BookingList');
  const TOKEN = localStorage.getItem('token');

  return (
    <Container>
      <ViewBox>
        <Title>나의 캠핑</Title>
        <Info>
          <CampingListBox>
            {CAMPING_LOG.map(({ id, title, engTitle }) => {
              return (
                <ListText key={id} onClick={() => setMenuTab(engTitle)}>
                  {title}
                </ListText>
              );
            })}
          </CampingListBox>
          <CampingDetailBox>{MAPPING_OBJ[menuTab]}</CampingDetailBox>
        </Info>
      </ViewBox>
    </Container>
  );
};

export default MyCamping;

const CAMPING_LOG = [
  { id: 1, title: '예정된 캠핑', engTitle: 'BookingList' },
  { id: 2, title: '위시리스트', engTitle: 'WishLish' },
  { id: 3, title: '지난 캠핑', engTitle: 'BookingLog' },
  { id: 4, title: '취소된 캠핑', engTitle: 'CancleBooking' },
];

const MAPPING_OBJ = {
  BookingList: <BookingList />,
  WishLish: <WishList />,
  BookingLog: <BookingLog />,
  CancleBooking: <CancleBooking />,
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
`;

const ViewBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 24px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${props => props.theme.hoverGrey};
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const Info = styled.div`
  ${flexSort('center', 'start')}
  width: 100%;
  padding-top: 20px;
  gap: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const CampingListBox = styled.ul`
  width: 20%;
  height: 100%;
  border: 1px solid ${props => props.theme.borderGrey};

  @media screen and (max-width: 768px) {
    ${flexSort('space-between', 'cetner')};
    flex-direction: row;
    width: 100%;
  }
`;

const ListText = styled.li`
  ${fontMix(16)}
  line-height: 60px;
  width: max-content;
  padding-left: 15px;
  position: relative;
  :hover {
    cursor: pointer;
    ::before {
      content: '';
      height: 100%;
      display: block;
      position: absolute;
      margin-left: -16px;
      border-left: 4px solid ${props => props.theme.mainLightGreen};
    }
  }
  @media screen and (max-width: 768px) {
    ${flexSort('center', 'center')};
    width: 100%;
    font-size: 12px;
    padding: 0;
    :hover {
      ::before {
        content: none;
      }
      ::after {
        content: '';
        width: 100%;
        height: 1px;
        display: block;
        position: absolute;
        margin-top: 56px;
        border-bottom: 4px solid ${props => props.theme.mainYellow};
      }
    }
  }
`;

const CampingDetailBox = styled.div`
  ${flexSort('center', 'center')}
  width: 80%;
  height: 100%;
  padding: 0 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
`;
