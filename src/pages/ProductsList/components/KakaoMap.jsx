import React, { useState } from 'react';
import styled from 'styled-components';
import { flexSort } from '../../../styles/mixin';

const KakaoMap = props => {
  const { clickModal } = props;
  return (
    <div>
      <MapImage>
        <MapButton onClick={clickModal}>지도보기</MapButton>
      </MapImage>
    </div>
  );
};

const MapImage = styled.div`
  width: 240px;
  height: 140px;
  background-color: ${props => props.theme.mainYellow};
  margin-bottom: 16px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const MapButton = styled.button`
  ${flexSort('center', 'center')}
  text-align: center;
  width: 80px;
  height: 30px;
  border-radius: 11px;
  background: whitesmoke;
  outline: none;
  border: none;
`;

export default KakaoMap;
