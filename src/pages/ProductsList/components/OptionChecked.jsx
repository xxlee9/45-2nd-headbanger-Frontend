import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const OptionChecked = ({ item: { id, category, type, content } }) => {
  const [checked, setChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (checked) {
      searchParams.append(category, id);
      setSearchParams(searchParams);
    } else {
      let deletedParams = searchParams.toString();
      deletedParams = deletedParams.split('&');
      deletedParams = deletedParams
        .filter(param => param !== `${category}=${id}`)
        .join('&');
      setSearchParams(deletedParams);
    }
  }, [checked]);

  return (
    <OptionCheckedBoxWrapper>
      <OptionCheckedBox
        type="checkbox"
        id={type}
        name={type}
        checked={checked}
        onChange={() => setChecked(prev => !prev)}
      />
      <OptionCheckedBoxLabel htmlFor={type}>{content}</OptionCheckedBoxLabel>
    </OptionCheckedBoxWrapper>
  );
};

const OptionCheckedBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`;

const OptionCheckedBox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid #ebebd2;
  margin-right: 8px;
  cursor: pointer;

  &:checked {
    background-color: #ebebd2;
    border-color: #c2c2aa;
    &::after {
      content: '✔';
      font-size: 12px;
      margin-left: 2px;
      color: #24613b;
    }
  }
`;

const OptionCheckedBoxLabel = styled.label`
  font-size: 14px;
  cursor: pointer;

  &:checked + ::after {
    content: '✔';
    font-size: 12px;
  }
`;

export default OptionChecked;
