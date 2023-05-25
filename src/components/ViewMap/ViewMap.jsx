import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedZone, addSelectedZone } from '../../actions';
import styled from 'styled-components';
import ZoneBoxes from './components/ZoneBoxes';

const ViewMap = () => {
  const [hoveredBox, setHoveredBox] = useState(null);
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const productData = useSelector(state => state.productData);
  const zoneData = useSelector(state => state.zoneData);
  const availableZones = useSelector(state => state.zoneData.availableZones);
  const unavailableZones = useSelector(
    state => state.zoneData.unavailableZones
  );

  const dispatch = useDispatch();

  const handleBoxHover = box => {
    if (!box || box.possible !== 'unable') {
      setHoveredBox(box);
    }
  };

  const handleBoxClick = box => {
    if (
      selectedBoxes.some(selectedBox => selectedBox.zoneName === box.zoneName)
    ) {
      dispatch(removeSelectedZone(box.campingZoneId));
      setSelectedBoxes(
        selectedBoxes.filter(
          selectedBox => selectedBox.zoneName !== box.zoneName
        )
      );
    } else {
      dispatch(addSelectedZone(box));
      setSelectedBoxes(prevBoxes => [...prevBoxes, box]);
    }
  };

  if (!zoneData || !productData) {
    return <div>Loading...</div>;
  }
  const totalPrice = hoveredBox
    ? parseInt(productData.data.price) + hoveredBox.additionalPrice
    : 0;
  return (
    <Container>
      <ImageContainer hoveredBox={hoveredBox}>
        <Image src={productData.data.viewMap} alt="조감도" />
        <Svg>
          <ZoneBoxes
            zoneData={zoneData}
            hoveredBox={hoveredBox}
            handleBoxHover={handleBoxHover}
            handleBoxClick={handleBoxClick}
            selectedBoxes={selectedBoxes}
            availableZones={availableZones}
            unavailableZones={unavailableZones}
          />
        </Svg>
        {hoveredBox && (
          <HoveredBoxInfo>
            {hoveredBox
              ? `가격 : ${totalPrice.toLocaleString()} 권장인원 : ${
                  hoveredBox.maxPeople
                }`
              : '가격과 인원 정보를 확인할 수 없습니다.'}
          </HoveredBoxInfo>
        )}
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div``;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Image = styled.img`
  width: 580px;
  height: auto;
`;

const HoveredBoxInfo = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 10px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  font-weight: bold;
`;

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 569px;
  height: 350px;
`;

export default ViewMap;
