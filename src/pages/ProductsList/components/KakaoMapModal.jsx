import React, { useEffect, useRef } from 'react';

const KakaoMapModal = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const kakao = window.kakao;

    let mapOption = {
      center: new kakao.maps.LatLng(37.795, 128.91),
      level: 5,
    };

    let map = new kakao.maps.Map(mapContainer.current, mapOption);

    let positions = [
      {
        title: '서울 팔당 캠핑장',
        latlng: new kakao.maps.LatLng(37.795, 128.91),
      },
      {
        title: '경기도 고양 캠핑숲',
        latlng: new kakao.maps.LatLng(37.8, 128.912),
      },
      {
        title: '인천 연희 캠핑장',
        latlng: new kakao.maps.LatLng(37.808, 128.906),
      },
      {
        title: '서울 강서 캠핑장',
        latlng: new kakao.maps.LatLng(37.793, 128.917),
      },
      {
        title: '경기도 의왕 캠핑숲',
        latlng: new kakao.maps.LatLng(37.784, 128.912),
      },
    ];

    let imageSrc = '../images/Map/mapImg.png';

    for (let i = 0; i < positions.length; i++) {
      let imageSize = new kakao.maps.Size(40, 40);
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      let marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
        title: positions[i].title,
        image: markerImage,
      });
    }
  }, []);

  return (
    <div
      id="map"
      onClick={e => e.stopPropagation()}
      ref={mapContainer}
      style={{ width: '900px', height: '700px' }}
    />
  );
};

export default KakaoMapModal;
