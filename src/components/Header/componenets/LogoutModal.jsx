import React from 'react';
import { Link } from 'react-router-dom';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import styled from 'styled-components';
import { flexSort } from '../../../styles/mixin';

export default NiceModal.create(({ LogoutModal }) => {
  const modal = useModal();

  const closeModal = () => {
    modal.remove(LogoutModal);
    document.body.style.overflow = 'unset';
  };

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
  };

  return (
    <Container>
      <View>
        <ModalImg src="/images/Mypage/tent-modal.png" />
        <TextBox>
          <Title>로그아웃 하시겠어요?</Title>
        </TextBox>
        <BtnBox>
          <ConfirmBtn onClick={closeModal}>취소</ConfirmBtn>
          <ConfirmBtn onClick={logOut}>확인</ConfirmBtn>
        </BtnBox>
      </View>
    </Container>
  );
});

const Container = styled.div`
  ${flexSort('center', 'center')}
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(40, 40, 40, 0.8);
`;

const View = styled.div`
  ${flexSort('center', 'center')}
  flex-direction: column;
  position: relative;
  gap: 20px;
  background-color: ${props => props.theme.mainMediumGreen};
  width: 400px;
  height: 240px;
  border-radius: 20px;
  @media screen and (max-width: 500px) {
    width: 80%;
    height: 30%;
  }
`;

const ModalImg = styled.img`
  position: absolute;
  top: -32px;
  background-color: ${props => props.theme.white};
  width: 72px;
  height: 72px;
  padding: 12px;
  border-radius: 50%;
`;

const TextBox = styled.div`
  ${flexSort('end', 'center')}
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.mainBlack};
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const BtnBox = styled.div`
  ${flexSort('center', 'center')}
  gap: 12px;
  width: 90%;
  height: 100%;
`;

const ConfirmBtn = styled.button`
  width: 50%;
  height: 48px;
  border: 0;
  border-radius: 12px;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.mainGreen};
  :hover {
    background-color: ${props => props.theme.modalButtonBrown};
    color: ${props => props.theme.white};
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    width: 50%;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.mainBlack};
  }
`;
