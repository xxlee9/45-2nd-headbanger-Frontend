import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { fontMix } from '../../../styles/mixin';

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
    <OptionCheckedBox>
      <input
        type="checkbox"
        id={type}
        name={type}
        checked={checked}
        onChange={() => setChecked(prev => !prev)}
      />
      <label htmlFor={type}>{content}</label>
    </OptionCheckedBox>
  );
};

const OptionCheckedBox = styled.div`
  ${fontMix(16, 'black')}
  display: block;
  margin-bottom: 6px;

  input {
    //appearance: none;
    width: 12px;
    height: 12px;
    background-color: lightgrey;
  }

  label {
    font-size: 14px;
    margin-left: 8px;

    cursor: pointer;
  }
`;

export default OptionChecked;
