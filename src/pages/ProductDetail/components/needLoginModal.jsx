import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexSort, fontMix } from '../../../styles/mixin';
import theme from '../../../styles/theme';

const NeedLoginModal = ({ onClose }) => {
  const navigate = useNavigate();
  const modalRef = useRef();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleOutsideClick = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <ModalContainer onClick={handleOutsideClick}>
      <ModalContent ref={modalRef}>
        <ModalText>
          결제를 하기 위해서는 로그인이 필요합니다. 로그인하시겠습니까?
        </ModalText>
        <Button onClick={handleLogin}>로그인하러 이동하기</Button>
      </ModalContent>
    </ModalContainer>
  );
};

export default NeedLoginModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalContent = styled.div`
  ${flexSort('center', 'center')}
  flex-direction: column;
  gap: 30px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
`;

const ModalText = styled.p`
  ${fontMix(16, theme.mainBlack)}
`;

const Button = styled.button`
  background-color: ${theme.mainYellow};
  border: none;
  border-radius: 15px;
  height: 40px;
  width: 200px;
`;
