import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { flexSort } from '../../../styles/mixin';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

const SortByBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = sort => {
    searchParams.set('orderBy', sort);
    setSearchParams(searchParams);
  };

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <SortByFilter>
      <SortBy onClick={toggleDropdown}>
        <SortByText>정렬 기준</SortByText>
        {isOpen ? <CaretUpIcon /> : <CaretDownIcon />}
      </SortBy>
      <Dropdown isOpen={isOpen}>
        {SORT_MENU.map(({ id, content, sort }) => (
          <DropdownOption key={id} onClick={() => handleSort(sort)}>
            {content}
          </DropdownOption>
        ))}
      </Dropdown>
    </SortByFilter>
  );
};

const SortByFilter = styled.div`
  ${flexSort('flex-end', 'center')}
  padding-top: 16px;
  position: relative;
`;

const SortBy = styled.button`
  position: relative;
  background-color: #ebebd2;
  border: none;
  width: 100px;
  height: 38px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
`;

const SortByText = styled.span`
  margin-right: 8px;
`;

const Dropdown = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 65px;
  width: 120px;
  right: 0;
  background-color: #c2c2aa;
  border-radius: 12px;
  padding: 3px 3.5px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -7px;
    right: 10px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #c2c2aa;
  }
`;

const DropdownOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 8px 16px;
  border: 3px solid #c2c2aa;
  outline: none;
  font-size: 13px;
  width: 113px;
  border-radius: 12px;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    background-color: #fefef8;
    transform: scale(1.01);
  }
`;

const CaretDownIcon = styled(CaretDownOutlined)`
  transition: transform 0.3s;

  ${SortByText}:hover & {
    transform: rotate(180deg);
  }
`;

const CaretUpIcon = styled(CaretUpOutlined)`
  transition: transform 0.3s;

  ${SortByText}:hover & {
    transform: rotate(180deg);
  }
`;

export default SortByBox;

const SORT_MENU = [
  { id: 0, content: '인기순', sort: 'wishDesc' },
  { id: 1, content: '높은 가격순', sort: 'priceDesc' },
  { id: 2, content: '낮은 가격순', sort: 'priceAsc' },
];
