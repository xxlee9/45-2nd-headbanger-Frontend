import React, { useState } from 'react';
import EmailVerification from './components/EmailVerification';
import styled from 'styled-components';

import { fontMix, flexSort } from '../../styles/mixin';

const Login = () => {
  const [isEmailVerified, setIsEmailVerified] = useState('');

  return (
    <StyledLogin>
      <LoginContent>
        <LoginTitle>
          {isEmailVerified === ''
            ? '로그인 또는 회원가입'
            : isEmailVerified
            ? '로그인'
            : '회원가입'}
        </LoginTitle>
        {console.log(isEmailVerified)}
        <EmailVerification
          isEmailVerified={isEmailVerified}
          setIsEmailVerified={setIsEmailVerified}
        />
      </LoginContent>
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled.div`
  ${flexSort('center', 'center')}
  flex-direction: column;
  height: 100vh;
`;

const LoginContent = styled.div`
  ${flexSort('center', 'flex-start')}
  flex-direction: column;
  width: 640px;
`;

const LoginTitle = styled.div`
  ${fontMix(36, 'black')}
  ${flexSort('center', 'center')};
`;
