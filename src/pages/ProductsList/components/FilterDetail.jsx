import React from 'react';
import OptionChecked from './OptionChecked';
import styled from 'styled-components';
import { boxSize } from '../../../styles/mixin';

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
  padding-top: 22px;
  margin-bottom: 16px;
`;

const Line = styled.div`
  ${boxSize('240', '2')}
  margin-bottom: 16px;
  background-color: ${props => props.theme.hoverGrey};
`;

export default FilterDetail;
