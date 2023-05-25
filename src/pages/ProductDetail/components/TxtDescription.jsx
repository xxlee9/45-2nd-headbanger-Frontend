import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';
import { fontMix } from '../../../styles/mixin';

const TxtDescription = () => {
  const description = useSelector(state => state.productData.data.description);
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('223px');

  useEffect(() => {
    setMaxHeight(expanded ? `${contentRef.current.scrollHeight}px` : '223px');
  }, [expanded]);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const formattedDescription = description.replace(/\/n/g, '<br>');
  if (!description) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Title>캠핑장 정보</Title>
      <Content
        ref={contentRef}
        expanded={expanded}
        maxHeight={maxHeight}
        dangerouslySetInnerHTML={{ __html: formattedDescription }}
      />
      {description.length > 180 && (
        <ToggleBtn onClick={handleToggleExpand}>
          {expanded ? '접기' : '더 보기'}
        </ToggleBtn>
      )}
    </Container>
  );
};

export default TxtDescription;

const Container = styled.div`
  width: 600px;
  position: relative;
  border-top: 1px solid ${theme.borderGrey};
  border-bottom: 1px solid ${theme.borderGrey};
  padding: 30px 0;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Content = styled.div`
  font-size: 16px;
  line-height: 2;
  margin-top: 40px;
  position: relative;
  max-height: ${({ maxHeight }) => maxHeight};
  overflow: hidden;
  transition: max-height 0.3s ease;
  ${({ expanded }) =>
    !expanded &&
    css`
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 90px;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1)
        );
      }
    `}
`;

const ToggleBtn = styled.button`
  ${fontMix(14, theme.mainBlack)};
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10;
  right: 0;
`;
