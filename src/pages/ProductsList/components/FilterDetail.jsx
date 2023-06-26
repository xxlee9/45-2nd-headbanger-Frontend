import React from 'react';
import styled from 'styled-components';
import OptionChecked from './OptionChecked';
import { boxSize, fontMix } from '../../../styles/mixin';

const FilterDetail = ({ id, name, option }) => {
  return (
    <>
      <FilterTitle>
        <HighlightedText>{name}</HighlightedText>
      </FilterTitle>
      <Line />
      {option.map(item => (
        <OptionChecked key={item.id} item={item}>
          {item.content}
        </OptionChecked>
      ))}
    </>
  );
};

const FilterTitle = styled.div`
  padding: 59px 0px 10px 0px;
  ${fontMix(16)}
  position: relative;
  overflow: hidden;
`;

const HighlightedText = styled.span`
  background: linear-gradient(
    90deg,
    transparent 0%,
    #ebebd2 80%,
    transparent 100%
  );
  line-height: 1.2;
  display: inline-block;
`;

const Line = styled.div`
  ${boxSize('240', '2')}
  margin-bottom: 16px;
  background-color: #f5f5f5;
`;

export default FilterDetail;
