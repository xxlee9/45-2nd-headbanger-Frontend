import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { fontMix, flexSort } from '../../styles/mixin';

const Signup = () => {
  return (
    <div>
      Signup
      <Wrapper>ㅇㅁㄹㅇㄴ메ㅑㅐ</Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  ${fontMix(16, 'black')}
  ${flexSort('center', 'center')}
  background-color: ${theme.mainYellow};
`;

export default Signup;
