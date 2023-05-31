import React, { useState } from 'react';
import styled from 'styled-components';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const HeartIcon = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleHeart = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ButtonContainer className={isChecked ? 'red' : ''} onClick={handleHeart}>
      {isChecked ? <HeartFilled /> : <HeartOutlined />}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  cursor: pointer;
  transition: transform 300ms ease;
  font-size: 20px;
  color: #252525;

  &.red {
    color: red;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export default HeartIcon;
