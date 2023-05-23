import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { REDIRECT_URI } from './LoginData';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = new URLSearchParams(location.search).get('code');
  const [accessToken, setAccessToken] = useState('');

  const exchangeKakaoToken = async accessToken => {
    const url = 'http://10.58.52.227:3000/users/kakao';
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
        navigate('/');
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (!KAKAO_CODE) {
      navigate('/main');
      return;
    }

    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
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

  return <div>kakao login</div>;
};

export default Auth;
