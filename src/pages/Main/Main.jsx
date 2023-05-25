import React, { useRef } from 'react';
import styled from 'styled-components';
import MainLocal from './components/MainLocal';
import ThemaCamping from './components/ThemaCamping';
import Amenities from './components/Amenities';
import SearchBar from '../../components/Nav/SearchBar';
import { flexSort } from '../../styles/mixin';

const Main = () => {
  const videoRef = useRef(null);

  return (
    <MainContainer>
      <MainPlayer
        ref={videoRef}
        src="/images/Main/Camping.mov"
        autoPlay
        muted
        loop
      />
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      <MainLocalWrapper>
        <MainLocal />
      </MainLocalWrapper>
      <ThemaCamping />
      <Amenities />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
`;

const MainPlayer = styled.video`
  width: 100%;
  height: 100%;
`;

const SearchBarWrapper = styled.div`
  ${flexSort('center', 'center')}
  position: relative;
  top: 0;
  margin: -2% 0% 0% 10%;
  left: 0;
  width: 80%;
  height: 80%;
`;

const MainLocalWrapper = styled.div`
  margin: 7% 0% 0% 10%;
  width: 80%;
  height: 60%;
`;
export default Main;
