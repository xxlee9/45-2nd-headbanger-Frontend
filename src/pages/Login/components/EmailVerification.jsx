import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { fontMix, flexSort, boxSize } from '../../../styles/mixin';
import emailValidationData from './emailValidation.json';

const EmailVerification = ({ isEmailVerified, setIsEmailVerified }) => {
  const [email, setEmail] = useState('');

  const handleEmailVerification = () => {
    const isVerified = emailValidationData.message;
    setIsEmailVerified(isVerified);
  };

  const handleGoBackToEmailInput = () => {
    setIsEmailVerified('');
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleEmailVerification();
    }
  };

  return (
    <Container>
      {isEmailVerified === '' ? (
        <>
          <TitleLine>
            <Label>이메일 주소</Label>
          </TitleLine>
          <Input
            type="email"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <VerifyButton onClick={handleEmailVerification}>
            이메일로 계속하기
          </VerifyButton>
          <LineAndOptionWrapper>
            <Line />
            <Option>또는</Option>
            <Line />
          </LineAndOptionWrapper>
          <KakaoLoginButton>카카오로 로그인하기</KakaoLoginButton>
        </>
      ) : isEmailVerified === true ? (
        <LoginForm
          email={email}
          handleGoBackToEmailInput={handleGoBackToEmailInput}
        />
      ) : (
        <SignupForm
          email={email}
          handleGoBackToEmailInput={handleGoBackToEmailInput}
        />
      )}
    </Container>
  );
};

export default EmailVerification;

const Container = styled.div`
  margin-top: 48px;
  margin-bottom: 50px;
`;
const TitleLine = styled.div`
  ${flexSort('space-between', 'center')};
  margin-bottom: 20px;
`;
const Label = styled.div`
  ${fontMix(24, theme.deepGrey)}
  ${flexSort('center', 'center')};
`;

const Input = styled.input`
  ${boxSize(640, 76)};
  ${fontMix(16, theme.deepGrey)}
  border: 1px solid ${theme.lightGrey};
  border-radius: 10px;
  padding-left: 32px;
  &:focus {
    border-color: ${theme.deepGrey};
  }
`;

const VerifyButton = styled.button`
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

const LineAndOptionWrapper = styled.div`
  ${flexSort('center', 'center')};
  margin-top: 40px;
  gap: 32px;
`;

const Line = styled.div`
  ${boxSize(270, 0)}
  border: 1px solid ${theme.borderGrey};
`;
const Option = styled.div`
  ${fontMix(20, theme.deepGrey)}
  ${flexSort('center', 'center')};
`;
const KakaoLoginButton = styled.button`
  ${boxSize(640, 76)};
  ${fontMix(16, theme.mainBlack)};
  background-color: #f6e64d;
  border: none;
  border-radius: 10px;
  margin-top: 40px;

  &:hover {
    cursor: pointer;
  }
`;
