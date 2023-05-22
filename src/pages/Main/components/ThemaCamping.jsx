import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { fontMix, flexSort } from '../../../styles/mixin';

const ThemaCamping = () => {
  const [currentId, setCurrentId] = useState(0);
  const [thema, setThema] = useState([]);

  useEffect(() => {
    fetch('/data/Themacamping.json')
      .then(res => res.json())
      .then(data => {
        setThema(data);
      });
  }, []);

  return (
    <div>
      <ThemaCampingTitle># 테마별 캠핑장</ThemaCampingTitle>
      <ThemeWrap>
        <div>
          <ThemaCampingItem>
            <ThemaCampingImg
              src={thema[currentId]?.image}
              alt="테마별 캠핑장"
            />
            <ThemaCampingText>{thema[currentId]?.name}</ThemaCampingText>
          </ThemaCampingItem>
        </div>

        <ThemaList>
          <div>
            <ThemaContent>
              <ThemaItem onMouseEnter={() => setCurrentId(0)}>도심</ThemaItem>
              <ThemaItem onMouseEnter={() => setCurrentId(1)}>산</ThemaItem>
              <ThemaItem onMouseEnter={() => setCurrentId(2)}>바다</ThemaItem>
              <ThemaItem onMouseEnter={() => setCurrentId(3)}>호수</ThemaItem>
            </ThemaContent>
          </div>
        </ThemaList>
      </ThemeWrap>
    </div>
  );
};

export default ThemaCamping;

const ThemaCampingTitle = styled.h6`
  ${fontMix(36, 'black')}
  margin : 100px 0px 20px 190px;
`;

const ThemaList = styled.dl`
  ${(fontMix(21), 'black')};
  margin: 10px 10px 100px 100px;
`;

const ThemaContent = styled.div`
  margin: 0px 10px 30px 0px;
`;

const ThemaItem = styled.dd`
  ${fontMix(24, 'black')}
  margin: 40px 50px 30px 0px;

  &:hover {
    background-color: ${theme.mainBlack};
    color: ${theme.mainYellow};
    cursor: pointer;
  }
`;

const ThemaCampingImg = styled.img`
  width: 500px;
  height: 400px;
  opacity: 1;
  border-radius: 5px;
  margin: 0px 5px 5px 230px;
`;

const ThemeWrap = styled.div`
  ${flexSort('space-around', 'center')}
  margin: 10px 10px 5px -55px;
  width: 1000px;
  height: 400px;
`;

const ThemaCampingItem = styled.div`
  position: relative;
`;

const ThemaCampingText = styled.div`
  ${fontMix(32, 'white')}
  position: absolute;
  top: 15%;
  left: 45%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
