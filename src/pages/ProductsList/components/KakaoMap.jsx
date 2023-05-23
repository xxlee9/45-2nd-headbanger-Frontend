import React from 'react';
import styled from 'styled-components';
import { flexSort, fontMix } from '../../../styles/mixin';

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
  border-radius: 12px;
  margin-bottom: 16px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: url('../images/Map/mapEntry.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const MapButton = styled.button`
  ${flexSort('center', 'center')}
  width: 90px;
  ${fontMix(13)}
  height: 36px;
  border-radius: 12px;
  background-color: #ebebd2;
  outline: none;
  border: none;
  color: ${props => props.theme.mainBlack};
`;

export default KakaoMap;
