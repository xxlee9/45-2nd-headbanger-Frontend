import React from 'react';
import SettingModal from './SettingModal/SettingModal';
import styled from 'styled-components';
import { flexSort } from '../../../styles/mixin';
import theme from '../../../styles/theme';
import BGI from '../../../assets/images/Mypage/BackgroundTheme/5.jpg';

let backgroundImgTheme = `../../../assets/images/Mypage/BackgroundTheme/${5}.jpg`;

const UserSetting = () => {
  return (
    <Container>
      <ViewBox>
        <BackgroundImgBox>
          <BackgroundImg />
        </BackgroundImgBox>
        <SettingBox>
          <UserInfo>
            <UserBtn>
              <UserImg src="/images/Mypage/campicon.png" alt="유저아이콘" />
            </UserBtn>
          </UserInfo>
          <SettingModal />
        </SettingBox>
      </ViewBox>
    </Container>
  );
};

export default UserSetting;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ViewBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const BackgroundImgBox = styled.div`
  width: 100%;
  height: 50vw;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50vw;
  }
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(${BGI});
  background-size: cover;
  background-repeat: no-repeat;
`;

const SettingBox = styled.div`
  position: absolute;
  top: 6%;
  right: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 768px) {
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;

const UserInfo = styled.div`
  ${flexSort('center', 'center')}
`;

const UserBtn = styled.button`
  width: 60px;
  height: 60px;
  border: 0;
  border-radius: 50%;
  :hover {
    cursor: pointer;
    background-color: ${props => theme.borderGrey};
  }
`;

const UserImg = styled.img`
  width: 28px;
  height: 28px;
  border: none;
`;
