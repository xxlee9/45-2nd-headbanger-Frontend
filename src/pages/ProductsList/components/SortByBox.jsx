import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { flexSort } from '../../../styles/mixin';

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
      <SortBy onClick={toggleDropdown}>Sort by</SortBy>
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
  padding-top: 60px;
  position: relative;
`;

const SortBy = styled.button`
  padding: 8px 16px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #e1e1e1;
  }
`;

const Dropdown = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 110px;
  right: 0;
  background-color: ${props => props.theme.mainYellow};
  border-radius: 4px;
  padding: 8px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    right: 10px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${props => props.theme.mainYellow};
  }
`;

const DropdownOption = styled.button`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 8px 16px;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  width: 100px;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export default SortByBox;

const SORT_MENU = [
  { id: 0, content: '인기순', sort: 'liked' },
  { id: 1, content: '가격순', sort: 'priceDesc' },
];
