import React from 'react';
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
          <UserBtn>
            <UserImg src="/images/Mypage/campicon.png" alt="유저아이콘" />
          </UserBtn>
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
  height: 40vw;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40vw;
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
  top: 50%;
  right: 50%;
  transform: translate(50%, -80%);
  @media screen and (max-width: 768px) {
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;

const UserBtn = styled.button`
  width: 120px;
  height: 120px;
  border: 0;
  border-radius: 50%;
  padding: 24px;
  :hover {
    cursor: pointer;
    background-color: ${props => theme.borderGrey};
  }
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  border: none;
`;
