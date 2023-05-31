import React, { useState } from 'react';
import styled from 'styled-components';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const HeartIcon = ({ campId }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleHeart = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ButtonContainer
      className={isChecked ? 'red' : ''}
      onClick={() => handleHeart(campId)}
    >
      {isChecked ? <HeartFilled /> : <HeartOutlined />}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  cursor: pointer;
  transition: transform 300ms ease;
  font-size: 20px;
  color: #f5efe7;
  &.red {
    color: red;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export default HeartIcon;
