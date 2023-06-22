import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { REDIRECT_URI } from './LoginData';
import LoadingMotion from '../../../components/Common/LoadingMotion';
import { PRODUCT_LIST_API } from '../../../config';
const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = new URLSearchParams(location.search).get('code');
  const [accessToken, setAccessToken] = useState('');

  const exchangeKakaoToken = async accessToken => {
    const url = `${PRODUCT_LIST_API}/users/kakao`;
    const body = JSON.stringify({
      accessToken: accessToken,
    });
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });

      if (response.ok) {
        const data = await response.json();
        const jwtToken = data.webToken;
        window.localStorage.setItem('token', jwtToken);

        console.log(jwtToken);
        navigate('/');
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (!KAKAO_CODE) {
      navigate('/');
      return;
    }

    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=4eec4b80edfa89085db55154e371c57f&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        const receivedAccessToken = data.access_token;
        setAccessToken(receivedAccessToken);
        exchangeKakaoToken(receivedAccessToken);
      })
      .catch(error => {
        navigate('/');
      });
  }, []);

  return (
    <Background>
      <LoadingMotion />
      <LoadingText>Loading ...</LoadingText>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`;

export default Auth;
