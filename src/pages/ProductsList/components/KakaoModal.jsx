import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const { kakao } = window;

const KakaoModal = props => {
  const { clickModal } = props;

  const lat = 33.450701;
  const lon = 126.570667;

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    let coords = new kakao.maps.LatLng(lat, lon);

    const imageSrc = '/images/Map/mapImg.png',
      imageSize = new kakao.maps.Size(60, 60),
      imageOption = { offset: new kakao.maps.Point(27, 69) };

    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    let marker = new kakao.maps.Marker({
      map: map,
      position: coords,
      image: markerImage,
    });

    let infowindow = new kakao.maps.InfoWindow({
      content:
        '<div style="color: #333; font-weight: bold;">Happy Camping!</div>',
    });
    infowindow.open(map, marker);
    infowindow.close();

    map.setCenter(coords);
  }, [windowSize]);

  return (
    <ModalBox>
      <Location id="map" onClick={e => e.stopPropagation()} />;
    </ModalBox>
  );
};

export default KakaoModal;

const ModalBox = styled.div`
  width: 1100px;
`;

const Location = styled.div`
  width: 100%;
  height: 40vw;
  border: 0.5px solid ${props => props.theme.hoverGrey};
`;
