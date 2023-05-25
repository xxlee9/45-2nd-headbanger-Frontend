import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import theme from '../../../styles/theme';
import { flexSort, fontMix } from '../../../styles/mixin';

const ProductNav = ({
  overviewRef,
  featuresRef,
  facilitiesRef,
  calendarRef,
  reviewRef,
  mapRef,
}) => {
  const sections = [
    { label: '개요', ref: overviewRef },
    { label: '특징', ref: featuresRef },
    { label: '편의시설', ref: facilitiesRef },
    { label: '예약', ref: calendarRef },
    { label: '이용후기', ref: reviewRef },
    { label: '주변지도', ref: mapRef },
  ];

  const handleSectionClick = ref => {
    if (ref) {
      scrollToRef(ref);
    }
  };

  return (
    <Container>
      {sections.map((section, index) => (
        <SectionButton
          key={index}
          onClick={() => handleSectionClick(section.ref)}
        >
          {section.label}
        </SectionButton>
      ))}
      <RightSection />
    </Container>
  );
};

const Container = styled.div`
  width: 1100px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${theme.borderGrey};
  padding: 0 20px;
`;

const SectionButton = styled.button`
  background: none;
  border: none;
  color: #000;
  padding: 8px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #ffcc00;
    border-bottom: 2px solid #ffcc00;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const scrollToRef = ref => {
  ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};

export default ProductNav;
