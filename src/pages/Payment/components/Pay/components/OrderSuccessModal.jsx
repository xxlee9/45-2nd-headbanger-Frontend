import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import styled from 'styled-components';
import { flexSort } from '../../../../../styles/mixin';

export default NiceModal.create(({ OrderSuccessModal }) => {
  const [orderInfo, setOrderInfo] = useState({});
  const modal = useModal();

  const closeModal = () => {
    modal.remove(OrderSuccessModal);
    document.body.style.overflow = 'unset';
    window.location.replace(
      'http://cvg-headbanger.s3-website.ap-northeast-2.amazonaws.com/mypage'
    );
  };
  return (
    <Container>
      <View>
        <ModalImg src="/images/Mypage/tent-modal.png" />
        <TextBox>
          <Title>결제가 완료되었습니다..</Title>
          <ThanksComment>감사합니다</ThanksComment>
        </TextBox>
        <BtnBox>
          <OkBtn onClick={closeModal}>확인</OkBtn>
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
  gap: 40px;
  background-color: ${props => props.theme.mainMediumGreen};
  width: 400px;
  height: 280px;
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
  width: 100%;
  height: 100%;
  ${flexSort('end', 'center')}
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: 16px;
  color: ${props => props.theme.mainBlack};
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const ThanksComment = styled.p`
  font-size: 12px;
  color: ${props => props.theme.mainBlack};
  @media screen and (max-width: 500px) {
    font-size: 8px;
  }
`;

const BtnBox = styled.div`
  ${flexSort('center', 'start')}
  width: 100%;
  height: 100%;
`;

const OkBtn = styled.button`
  width: 200px;
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
    width: 60%;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.mainBlack};
  }
`;
