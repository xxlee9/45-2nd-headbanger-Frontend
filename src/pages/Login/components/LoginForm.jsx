import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { fontMix, flexSort, boxSize } from '../../../styles/mixin';
import {
  FormContainer,
  GoBackButton,
  TitleWrapper,
  FormTitle,
  FormInput,
} from './SignupForm';

const LoginForm = ({ email, handleGoBackToEmailInput }) => {
  const [emailValue, setEmailValue] = useState(email);
  const [passwordValue, setPasswordValue] = useState('');

  const handleLogin = () => {
    // 로그인 로직 작성
    // 서버에 이메일과 비밀번호 값을 보내고 로그인 처리
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <FormContainer>
      <TitleWrapper>
        <FormTitle>비밀번호를 입력하세요</FormTitle>
        <GoBackButton onClick={handleGoBackToEmailInput} />
      </TitleWrapper>
      <FormInput type="email" value={emailValue} disabled />
      <FormInput
        type="password"
        value={passwordValue}
        onChange={e => setPasswordValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <LoginButton onClick={handleLogin}>Login</LoginButton>
      <FlexCenter>
        <ForgotTxt>비밀번호를 잊으셨나요?</ForgotTxt>
      </FlexCenter>
    </FormContainer>
  );
};

export default LoginForm;

const LoginButton = styled.button`
  ${boxSize(640, 76)}
  background-color: ${theme.mainBlack};
  color: ${theme.white};
  border-radius: 10px;
  margin-top: 40px;
  border: none;
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;
const FlexCenter = styled.div`
  ${flexSort('center', 'center')}
`;
const ForgotTxt = styled.div`
  ${fontMix(16, theme.mainBlack)}
  margin-top:40px
`;
