import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fontMix } from '../../../styles/mixin';

const MainLocal = () => {
  const [mainlocal, setMainlocal] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [currentregionId, setCurrentRegionId] = useState(
    queryParams.get('regionId')
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newRegionId = queryParams.get('regionId');
    setCurrentRegionId(newRegionId);
  }, [location.search, currentregionId]);

  useEffect(() => {
    fetch('/data/mainlocaldata.json')
      .then(res => res.json())
      .then(data => {
        setMainlocal(data);
      });
  }, []);
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleTourButtonClick = regionId =>
    navigate(`/region?regionId=${regionId}&limit=10&offset=0`);
  return (
    <div>
      <Styledwrap>
        <Local># 지역별 캠핑장</Local>
        <StyledSlider {...settings}>
          {mainlocal.map((item, index) => (
            <SliderItem key={index}>
              <ImageWrapper>
                <img src={item.image} alt="각 지역에 있는 캠핑장" />
              </ImageWrapper>
              <ImageOverlay>
                <Imagename>
                  {item.name}
                  <br />
                </Imagename>
                <Imagecount>{item.count} 개의 캠핑 상품.</Imagecount>
                <TourButton
                  onClick={() => handleTourButtonClick(item.region_id)}
                >
                  둘러보기
                </TourButton>
              </ImageOverlay>
            </SliderItem>
          ))}
        </StyledSlider>
      </Styledwrap>
    </div>
  );
};
export default MainLocal;

const NextArrow = ({ onClick }) => {
  const nextArrowImage = '/images/Main/toleft.png';
  return (
    <NextArrowButton onClick={onClick} type="button">
      <NextArrowImage src={nextArrowImage} alt="next" />
    </NextArrowButton>
  );
};

const PrevArrow = ({ onClick }) => {
  const prevArrowImage = '/images/Main/toright.png';
  return (
    <PrevArrowButton onClick={onClick} type="button">
      <PrevArrowImage src={prevArrowImage} alt="prev" />
    </PrevArrowButton>
  );
};

const NextArrowButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 45%;
  left: 0;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 24px;
  margin-top: 0px;
`;

const NextArrowImage = styled.img`
  width: 100%;
  height: 100%;
`;

const PrevArrowButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 45%;
  right: 0;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 20px;
  margin-top: 0px;
`;

const PrevArrowImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Local = styled.h6`
  ${fontMix(36, 'black')}
  margin : 10px 0px 5px 0px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    margin: 0 5px;
    width: 100%;
    height: auto;
  }
`;

const SliderItem = styled.div`
  margin: 0 10px;
  margin-top: 100px;
  position: relative;
  padding: 30px 30px 15px 0;
  height: 330px;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    border-radius: 25px;
    cursor: pointer;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 45px;
  left: 10px;
  padding: 10;
`;

const Imagename = styled.div`
  ${fontMix(36, 'white')}
  padding-top: 10px;
`;

const Imagecount = styled.div`
  ${fontMix(24, 'white')}
  margin-top: 30px;
  padding-top: 10px;
`;

const TourButton = styled.button`
  ${fontMix(16, 'black')}
  background-color: white;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 90px;
  font-weight: 700;
  margin-top: 130px;
  cursor: pointer;
`;

const Styledwrap = styled.div`
  width: 1000;
  height: 500;
`;

const ImageWrapper = styled.div`
  height: -10px;
`;
