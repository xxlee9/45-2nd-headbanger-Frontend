import React from 'react';
import styled from 'styled-components';
import { fontMix } from '../../styles/mixin';

const SearchBar = () => {
  return (
    <SearchBarBackground>
      <SearchBarContainer>
        <SearchBarWrap>
          <LocationButton>장소</LocationButton>
          <CheckInButton>체크 인 날짜</CheckInButton>
          <CheckoutButton>체크 아웃 날짜</CheckoutButton>
          <SearchButton>검색</SearchButton>
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
  border: none;
  outline: none;
  background-color: #658864;
`;

const SearchBarContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

const SearchBarWrap = styled.div`
  height: 46px;
`;

const LocationButton = styled.button`
  width: 30%;
  height: 100%;
  padding: 0 8px;
  border: none;
  outline: none;
  ${fontMix(14, 'black')}
  cursor: pointer;
  background-color: #fff;
  border-radius: 14px;
`;

const CheckInButton = styled.button`
  border-radius: 14px;
  width: 30%;
  height: 100%;
  padding: 0 8px;
  border: none;
  outline: none;
  cursor: pointer;
  ${fontMix(14, 'black')}
  background-color: #fff;
  margin-left: 6px;
`;

const CheckoutButton = styled.button`
  width: 30%;
  height: 100%;
  ${fontMix(14, 'black')}
  padding: 0 8px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #fff;
  border-radius: 14px;
  margin-left: 6px;
`;

const SearchButton = styled.button`
  width: 8%;
  height: 100%;
  border: none;
  outline: none;
  background-color: ${props => props.theme.mainBlack};
  border-radius: 14px;
  font-size: ${fontMix(14, 'white')};
  padding: 0 16px;
  cursor: pointer;
  margin-left: 6px;
`;

export default SearchBar;
