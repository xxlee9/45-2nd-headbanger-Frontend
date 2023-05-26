import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

const SETTING_ITEM = [
  { id: 1, title: '테마 변경' },
  { id: 2, title: '이미지 변경' },
  { id: 3, title: '회원 정보' },
  { id: 4, title: '고객 센터' },
  { id: 5, title: '로그아웃' },
];

const SettingModal = () => {
  return (
    <Contaeiner>
      <SettingList>
        {SETTING_ITEM.map(({ id, title }) => {
          return <SettingItem key={id}>{title}</SettingItem>;
        })}
      </SettingList>
    </Contaeiner>
  );
};

export default SettingModal;

const Contaeiner = styled.div`
  width: 100%;
  height: max-content;
  padding: 16px;
  border-radius: 5px;
  background-color: ${props => theme.mainBlack};
  ::before {
    content: '';
    position: absolute;
    top: 70px;
    right: 50px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${props => props.theme.mainBlack};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SettingList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const SettingItem = styled.li`
  color: ${props => theme.mainYellow};
  :hover {
    cursor: pointer;
    font-weight: 700;
  }
`;
