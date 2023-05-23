import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { PRODUCT_LIST_API } from '../../../config';

const HeartIcon = ({ campId }) => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    fetch(`${PRODUCT_LIST_API}/wish/${campId}`, {
      method: 'GET',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(res => {
        setIsChecked(res.isChecked);
      })
      .catch(error => {});
  }, [campId, navigate]);

  const handleHeart = campId => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const requestBody = {
      campId: campId,
    };

    fetch(`${PRODUCT_LIST_API}/wish/${campId}`, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(requestBody),
    })
      .then(res => res.json())
      .then(res => {
        setIsChecked(prevIsChecked => !prevIsChecked);
      })
      .catch(error => {});
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
