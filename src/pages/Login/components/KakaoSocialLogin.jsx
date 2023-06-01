import React from 'react';
import styled from 'styled-components';
import { fontMix, boxSize } from '../../../styles/mixin';
import { REDIRECT_URI } from './LoginData';
const KakaoSocialLogin = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=4eec4b80edfa89085db55154e371c57f&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleSocialLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return <KakaoLoginButton onClick={handleSocialLogin} />;
};

export default KakaoSocialLogin;

const KakaoLoginButton = styled.button`
  ${boxSize(380, 57)};
  background-image: url('../images/Login/kakao_login_large_wide.png');
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
