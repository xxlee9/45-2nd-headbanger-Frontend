import React from 'react';
import styled from 'styled-components';
import { fontMix, flexSort } from '../../styles/mixin';

const Footertop = () => {
  return (
    <FooterInfo>
      <CompanyInfoLink to="/companyInfo">회사정보</CompanyInfoLink>
      <UseInfo>이용약관</UseInfo>
      <PersonalInfo>개인정보처리방침</PersonalInfo>
    </FooterInfo>
  );
};

export default Footertop;

const FooterInfo = styled.div`
  ${fontMix(12, 'white')}
  ${flexSort('space-around', 'center')}
  background-color: ${props => props.theme.mainBlack};
  height: 20px;
`;

const CompanyInfoLink = styled.p`
  ${fontMix(12, 'white')}
  padding-bottom: 5px;
  margin: 15px 0px 0px 10px;
  flex: 1;
`;

const UseInfo = styled.p`
  padding-bottom: 5px;
  margin: 15px 0px 0px 10px;
  flex: 1;
`;

const PersonalInfo = styled.p`
  padding-bottom: 5px;
  margin: 15px 0px 0px 10px;
  flex: 7;
  text-decoration: underline;
`;
