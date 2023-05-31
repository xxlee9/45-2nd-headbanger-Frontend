import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NiceModal from '@ebay/nice-modal-react';
import LogoutModal from './LogoutModal';
import { TiArrowSortedUp } from 'react-icons/ti';
import styled from 'styled-components';
import { flexSort } from '../../../styles/mixin';
const HeaderMenu = ({ setIsMenuOpen, isMenuOpen }) => {
  const showLogoutModal = () => {
    NiceModal.show(LogoutModal, { name: 'LogoutModal' });
  };

  const handleLogout = id => {
    setIsMenuOpen(false);
    id === 4 && showLogoutModal();
  };

  return (
    <Container>
      {isMenuOpen && (
        <ViewBox>
          <ArrowUpIcon />
          <MenuList>
            {MORE_LIST.map(({ id, title, url }) => {
              return (
                <div onClick={() => handleLogout(id)} key={id}>
                  <Link to={id === 4 ? '' : url}>
                    <MenuItem>{title}</MenuItem>
                  </Link>
                </div>
              );
            })}
          </MenuList>
        </ViewBox>
      )}
    </Container>
  );
};

export default HeaderMenu;

const MORE_LIST = [
  { id: 1, title: '마이페이지', url: '/mypage' },
  { id: 2, title: '회원정보수정', url: '/mypage' },
  { id: 3, title: '고객센터', url: '/mypage' },
  { id: 4, title: '로그아웃', url: '' },
];

const Container = styled.div`
  z-index: 9000;
  position: absolute;
  top: 53px;
  right: -48px;
  width: max-content;
  height: max-content;
  padding: 4px;
  border-radius: 12px;
  background-color: #ebebd2;

  @media screen and (max-width: 768px) {
  }
`;

const ViewBox = styled.div`
  position: relative;
`;

const ArrowUpIcon = styled(TiArrowSortedUp)`
  z-index: 9999;
  position: absolute;
  top: -22px;
  right: 50%;
  transform: translateX(50%);
  width: 32px;
  height: 32px;
  color: #ebebd2;
`;

const MenuList = styled.ul`
  ${flexSort('space-between', 'center')}
  flex-direction: column;
  gap: 8px;
  width: max-content;
  height: 100%;
  padding: 8px;
`;

const MenuItem = styled.li`
  text-align: center;
  background-color: #fff;
  border-radius: 12px;
  line-height: 40px;
  width: 130px;
  :hover {
    cursor: pointer;
    background-color: #fefef8;
    font-weight: 400;
  }
`;
