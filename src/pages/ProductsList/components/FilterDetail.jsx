import React from 'react';
import styled from 'styled-components';
import OptionChecked from './OptionChecked';
import { boxSize, fontMix } from '../../../styles/mixin';

const FilterDetail = ({ id, name, option }) => {
  return (
    <>
      <FilterTitle>{name}</FilterTitle>
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
  ${boxSize('240')}
  padding: 59px 0px 10px 0px;
  ${fontMix(16)}
`;

const Line = styled.div`
  ${boxSize('240', '2')}
  margin-bottom: 16px;
  background-color: #f5efe7;
`;

export default FilterDetail;
