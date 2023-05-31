import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fontMix, flexSort } from '../../../styles/mixin';

const ThemaCamping = ({ themaCampingData }) => {
  const [currentId, setCurrentId] = useState(0);
  const [thema, setThema] = useState([]);
  const navigate = useNavigate();

  const handleCurrentIdClick = themeId => {
    navigate(`/products?themeId=${themeId}`);
  };

  useEffect(() => {
    if (themaCampingData.length > 0) {
      setThema(themaCampingData);
    }
  }, [themaCampingData]);
  if (thema.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <ThemaContainer>
      <ThemaCampingTitle> 테마별 캠핑장</ThemaCampingTitle>
      <Mainwrap>
        <ImgBox>
          <ThemaCampingItem>
            <ThemaCampingImg
              src={`/images/Main/Thema${currentId}.jpg`}
              alt="테마별 캠핑장"
            />
          </ThemaCampingItem>
        </ImgBox>
        <Theme>
          <ThemaList>
            <ThemaWrapper>
              <ThemaId>
                <ThemaWrap>
                  <ThemaItem
                    onMouseEnter={() => setCurrentId(thema[0].id)}
                    onClick={() => navigate(`/products?themeId=${thema[0].id}`)}
                  >
                    도심 체험 캠핑
                    <Place>#도심 #도시 #글램핑</Place>
                  </ThemaItem>
                </ThemaWrap>
              </ThemaId>
            </ThemaWrapper>
            <ThemaWrapper>
              <ThemaId>
                <ThemaWrap>
                  <ThemaItem
                    onMouseEnter={() => setCurrentId(thema[1].id)}
                    onClick={() => navigate(`/products?themeId=${thema[1].id}`)}
                  >
                    자연 모험 캠핑
                    <Place>#산 #등산 #트레킹</Place>
                  </ThemaItem>
                </ThemaWrap>
              </ThemaId>
            </ThemaWrapper>
            <ThemaWrapper>
              <ThemaId>
                <ThemaWrap>
                  <ThemaItem
                    onMouseEnter={() => setCurrentId(thema[2].id)}
                    onClick={() => navigate(`/products?themeId=${thema[2].id}`)}
                  >
                    해변 휴식 캠핑
                    <Place>#바다 #해변 #해변휴양</Place>
                  </ThemaItem>
                </ThemaWrap>
              </ThemaId>
            </ThemaWrapper>
            <ThemaWrapper>
              <ThemaId>
                <ThemaWrap>
                  <ThemaItem
                    onMouseEnter={() => setCurrentId(thema[3].id)}
                    onClick={() => navigate(`/products?themeId=${thema[3].id}`)}
                  >
                    맑은 자연 캠핑
                    <Place> #호수 #자연 #호수라이프</Place>
                  </ThemaItem>
                </ThemaWrap>
              </ThemaId>
            </ThemaWrapper>
          </ThemaList>
        </Theme>
      </Mainwrap>
    </ThemaContainer>
  );
};

export default ThemaCamping;

const ThemaContainer = styled.div`
  ${flexSort('center', 'start')}
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  height: 100%;
`;

const ThemaCampingTitle = styled.h1`
  ${fontMix(24, 'black')}
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-bottom: 30px;
  font-weight: bold;
`;

const Mainwrap = styled.div`
  ${flexSort('space-between', 'center')}
  max-width: 1100px;
  width: 100%;
  height: 100%;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Theme = styled.div`
  width: 50%;
  height: 80%;
`;

const ThemaList = styled.dl`
  ${flexSort('center', 'space-between')}
  ${(fontMix(28), 'black')};
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
`;

const ThemaWrap = styled.div`
  height: 100%;
  width: 100%;
`;

const ThemaWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ThemaId = styled.div`
  ${flexSort('center', 'space-between')}
  flex-direction: row;
  height: 100%;
`;

const ThemaItem = styled.dd`
  ${fontMix(18, '#222222')}
  font-weight: 700;
  height: 80px;
  width: 400px;
  padding: 30px 50px 19px 19px;
  border-bottom: 0.8px solid #f0f0f0;

  cursor: pointer;

  &:hover {
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid black;
    height: 80px;
    width: 400px;
    transition: height 0.3s ease;
  }
`;

const Place = styled.span`
  color: #666666;
  font-size: 14px;
  display: inline-block;
  padding-left: 40px;
`;

const ThemaCampingImg = styled.img`
  border-radius: 10px;
  height: 320px;
  width: 620px;
  object-fit: cover;
`;

const ThemaCampingItem = styled.div`
  width: 100%;
  height: 100%;
`;
