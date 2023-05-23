import React from 'react';
import styled, { keyframes } from 'styled-components';
import KakaoSocialLogin from './components/KakaoSocialLogin';
import { fontMix, flexSort, boxSize } from '../../styles/mixin';

const Login = () => {
  return (
    <StyledLogin>
      <LoginContent>
        <LoginBox>
          <Logo />
          <LoginTitle>
            <span>
              진짜 나다운 캠핑<span>을</span>
            </span>
            <div>시작 해보세요!</div>
          </LoginTitle>
        </LoginBox>
        <KakaoSocialLogin />
        <Naver>
          <NaverLoginButton />
        </Naver>
      </LoginContent>
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled.div`
  ${flexSort('center', 'center')}
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const LoginContent = styled.div`
  ${flexSort('flex-start', 'center')}
  flex-direction: column;
  width: 420px;
  height: 420px;
`;

const LoginBox = styled.div`
  flex-direction: column;
  justify-content: center;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: ease;
  }
  100% {
    transform: rotate(360deg);
    animation-timing-function: ease-in;
  }
`;

const Logo = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto;
  background-image: url('../images/Login/cvgLogo.svg');
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${rotateAnimation} 6s linear infinite;
  transform-origin: 50% 50%;
`;

const LoginTitle = styled.div`
  width: 350px;
  flex-direction: column;
  text-align: center;
  line-height: 36px;
  margin-top: 17px;
  margin-bottom: 54px;
  ${fontMix(26, 'black')};
  ${flexSort('center', 'center')};
  color: ${props => props.theme.mainBlack};

  > span {
    color: #68a67d;
    display: inline;
  }

  > span > span {
    color: #252525;
  }
`;

const Naver = styled.div`
  ${boxSize(380, 57)};
`;

const NaverLoginButton = styled.button`
  ${boxSize(380, 57)};
  background-image: url('/images/Login/naverBtn.svg');
  border: none;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 8px;
  margin-top: 9px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
