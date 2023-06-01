import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { boxSize, flexSort, fontMix } from '../../../styles/mixin';

const MainLocal = ({ regionCampingData }) => {
  const navigate = useNavigate();

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

  const handleTourButtonClick = regionid => {
    navigate(`/productslist?regionId=${regionid}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MainWrap>
      <Styledwrap>
        <Local> 지역별 캠핑장</Local>
        <StyledSlider {...settings}>
          {regionCampingData.map(({ id, name, count }) => (
            <SliderItem key={id} onClick={() => handleTourButtonClick(id)}>
              <ImageContainer>
                <ImageOverlay />
                <ItemImage
                  src={`/images/Main/region${id}.jpg`}
                  alt="각 지역에 있는 캠핑장"
                />
              </ImageContainer>
              <Imagename>{name}</Imagename>
              <Imagecount>{count} 개의 캠핑 상품.</Imagecount>
              <TourButton onClick={() => handleTourButtonClick(id)}>
                둘러보기
              </TourButton>
            </SliderItem>
          ))}
        </StyledSlider>
      </Styledwrap>
    </MainWrap>
  );
};

export default MainLocal;

const MainWrap = styled.div`
  ${flexSort('center', 'start')}
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  height: 100%;
`;

const NextArrow = ({ onClick }) => {
  const nextArrowImage = '/images/Main/toright.png';
  return (
    <PrevArrowButton onClick={onClick} type="button">
      <PrevArrowImage src={nextArrowImage} alt="next" />
    </PrevArrowButton>
  );
};

const PrevArrow = ({ onClick }) => {
  const prevArrowImage = '/images/Main/toleft.png';
  return (
    <NextArrowButton onClick={onClick} type="button">
      <NextArrowImage src={prevArrowImage} alt="prev" />
    </NextArrowButton>
  );
};

const NextArrowButton = styled.button`
  position: absolute;
  top: 45%;
  left: -25px;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 100;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }
`;
const NextArrowImage = styled.img`
  width: 50%;
  height: 50%;
`;

const PrevArrowImage = styled.img`
  width: 50%;
  height: 50%;
`;

const PrevArrowButton = styled.button`
  position: absolute;
  top: 45%;
  right: 0px;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }
`;

const Local = styled.h1`
  ${fontMix(24, 'black')}
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-top: 60px;
  font-weight: bold;
`;

const StyledSlider = styled(Slider)`
  width: 1130px;
  .slick-slide div {
    width: 100%;
    height: auto;
  }
`;

const SliderItem = styled.div`
  position: relative;
  padding: 30px 30px 15px 0;
  height: 200px;
  cursor: pointer;
`;

const ImageOverlay = styled.div`
  ${flexSort('space-between', 'center')}
  flex-direction : column;
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
`;
const Imagename = styled.div`
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  top: 70px;
  padding-left: 20px;
  color: white;
  cursor: pointer;
`;

const Imagecount = styled.div`
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  padding-left: 20px;
  top: 120px;
  color: white;
  cursor: pointer;
`;

const TourButton = styled.button`
  background-color: white;
  color: black;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 88px;
  height: 40px;
  margin-left: 20px;
  margin-top: -100px;
  position: absolute;
`;

const Styledwrap = styled.div`
  width: 1100px;
  height: 500px;
`;

const ImageContainer = styled.div`
  ${boxSize(250, 333)}
  position: relative;
  overflow: hidden;
  border-radius: 25px;
  + &:hover ${ImageOverlay} {
    cursor: pointer;
  }
`;

const ItemImage = styled.img`
  ${boxSize(250, 333)}
  object-fit: cover;
  border-radius: 25px;
  transition: transform 5s;

  ${SliderItem}:hover & {
    transform: scale(1.1);
  }
`;
