import React from 'react';
import styled from 'styled-components';
import { boxSize } from '../../../styles/mixin';
import { useNavigate } from 'react-router-dom';

const ImagesContainer = ({ product, id }) => {
  const navigate = useNavigate();

  return (
    <ImageContainers>
      {product?.map(content => (
        <FirstImage
          key={content.id}
          onClick={() => navigate(`/products/${id}`)} // 제품 디테일 페이지로 이동
        >
          <Image src={content.thumbnail} />
          <TextContainer>
            <Text1>{content.region_name}</Text1>
            <Text2>{content.price}</Text2>
            <Text2>{content.campsite_name}</Text2>
          </TextContainer>
        </FirstImage>
      ))}
    </ImageContainers>
  );
};

const ImageContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FirstImage = styled.div`
  ${boxSize(360, 400)}
  margin-bottom: 60px;
  ${props => props.theme.mainYellow};
`;

const Image = styled.img`
  ${boxSize(360, 400)}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  position: absolute;
  margin-top: -86px;
  margin-left: 36px;
  color: black;
`;

const Text1 = styled.div`
  ${boxSize(280, 30)}
  margin-top: -20px;
`;

const Text2 = styled.div`
  ${boxSize(280, 30)}
  margin-top: -3px;
`;

export default ImagesContainer;
