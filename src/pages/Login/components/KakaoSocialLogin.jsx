import React from 'react';
import styled from 'styled-components';
import { fontMix, boxSize } from '../../../styles/mixin';
import { REDIRECT_URI } from './LoginData';
const KakaoSocialLogin = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleSocialLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <KakaoLoginButton onClick={handleSocialLogin}>
      카카오 계정으로 시작하기
    </KakaoLoginButton>
  );
};

export default KakaoSocialLogin;

const KakaoLoginButton = styled.button`
  ${boxSize(400, 46)};
  ${fontMix(14, props => props.theme.mainYellow)};
  background-color: #fee500;
  border: none;
  border-radius: 10px;
  margin-top: 11px;
  &:hover {
    cursor: pointer;
  }
`;
