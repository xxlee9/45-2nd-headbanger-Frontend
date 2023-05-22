import React from 'react';
import styled from 'styled-components';
import KakaoSocialLogin from './components/KakaoSocialLogin';
import { boxSize, fontMix, flexSort } from '../../styles/mixin';

const Login = () => {
  return (
    <StyledLogin>
      <LoginContent>
        <LoginTitle>
          <CvgLogo />
          로그인 및 회원가입
        </LoginTitle>
        <InputEmail type="email" placeholder="이메일을 입력해주세요." />
        <VerifyButton onClick="/">이메일로 계속하기</VerifyButton>
        <KakaoSocialLogin />
      </LoginContent>
    </StyledLogin>
  );
};

export default Login;

const CvgLogo = styled.div`
  background-image: url('../images/Login/logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  width: 43px;
  height: 43px;
  display: flex;
  margin-right: 13px;
`;

const StyledLogin = styled.div`
  ${flexSort('center', 'center')}
  flex-direction: column;
  height: 100vh;
`;

const LoginContent = styled.div`
  ${flexSort('flex-start', 'center')}
  flex-direction: column;
  width: 460px;
  padding: 10px;
  margin: 0 auto;
`;

const LoginTitle = styled.div`
  ${fontMix(26, 'black')}
  ${flexSort('center', 'center')};
  margin-right: 34%;
  color: ${props => props.theme.mainBlack};
`;

const VerifyButton = styled.button`
  ${boxSize(400, 46)};
  background-color: ${props => props.theme.mainBlack};
  color: ${props => props.theme.white};
  font-size: 14px;
  border-radius: 10px;
  margin-top: 22px;
  border: none;
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;

const InputEmail = styled.input`
  ${boxSize(400, 46)};
  ${fontMix(13, props => props.theme.deepGrey)};
  margin-top: 50px;
  padding-left: 12px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  position: relative;

  &:focus {
    border-bottom-color: #ccc;
  }

  &::placeholder {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    font-size: 13px;
    color: #ccc;
    transition: top 0.2s ease-out;
  }

  &:focus::placeholder {
    top: -30px;
    font-size: 12px;
  }
`;
