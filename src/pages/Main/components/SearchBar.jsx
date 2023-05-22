import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { fontMix } from '../../../styles/mixin';
const SearchBar = () => {
  return (
    <SearchBarBackground>
      <SearchBarContainer>
        <SearchBarWrap>
          <LocationButton>장소</LocationButton>
          <CheckInButton>체크 인 날짜</CheckInButton>
          <CheckoutButton>체크 아웃 날짜</CheckoutButton>
          <SearchButton>Search</SearchButton>
        </SearchBarWrap>
      </SearchBarContainer>
    </SearchBarBackground>
  );
};
const SearchBarBackground = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${theme.mainYellow};
`;
const SearchBarContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
`;
const SearchBarWrap = styled.div`
  border: 1px solid ${theme.mainYellow};
  height: 46px;
`;
const LocationButton = styled.button`
  ${fontMix(14, 'black')}
  width: 30%;
  height: 100%;
  padding: 0 8px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #fff;
`;
const CheckInButton = styled.button`
  width: 30%;
  height: 100%;
  padding: 0 8px;
  border: none;
  outline: none;
  cursor: pointer;
  ${fontMix(14, 'black')}
  background-color: #fff;
  border-left: 6px solid ${theme.mainYellow};
`;
const CheckoutButton = styled.button`
  width: 30%;
  height: 100%;
  ${fontMix(14, 'black')}
  padding: 0 8px;
  border: none;
  outline: none;
  background-color: #fff;
  cursor: pointer;
  border-left: 6px solid ${theme.mainYellow};
  border-right: 6px solid ${theme.mainYellow};
`;
const SearchButton = styled.button`
  width: 10%;
  height: 100%;
  border: none;
  outline: none;
  background-color: ${theme.mainBlack};
  ${fontMix(14, 'white')}
  font-size: 16px;
  padding: 0 16px;
  cursor: pointer;
`;
export default SearchBar;
