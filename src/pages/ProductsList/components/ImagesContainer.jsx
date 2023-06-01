import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import HeartIcon from '../../ProductsList/components/HeartIcon';
import LoadingMotion from '../../../components/Common/LoadingMotion';
import { boxSize, fontMix } from '../../../styles/mixin';
import { PRODUCT_LIST_API } from '../../../config';

const ImagesContainer = ({ id, searchParams, campId }) => {
  const [product, setProduct] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [limit, setLimit] = useState(4);
  const navigate = useNavigate();
  const queryString = searchParams.toString();

  const fetchProducts = async (offset = 0) => {
    try {
      const response = await fetch(
        `${PRODUCT_LIST_API}/products?${queryString}&offset=${offset}&limit=${limit}`
      );

      const data = await response.json();
      const newProducts = data.result;

      if (newProducts.length === 0) {
        setHasMore(false);
      }

      if (offset === 0) {
        setProduct(newProducts);
      } else {
        setProduct(prevProducts => [...prevProducts, ...newProducts]);
      }
    } catch (error) {}
  };

  console.log(product);

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  return (
    <InfiniteScroll
      dataLength={product?.length}
      next={() => fetchProducts(product?.length)}
      hasMore={hasMore}
      loader={<LoadingText />}
      endMessage={
        <BackgroundBox>
          <LoadingMotion />
        </BackgroundBox>
      }
      style={{ overflow: 'visible', scrollBehavior: 'smooth' }}
    >
      <ImageContainers>
        {product?.map(content => (
          <FirstImage key={content.id}>
            <Image
              src={content.thumbnail}
              onClick={() => navigate(`/productdetail/${content.id}`)}
            />
            <HeartIconWrapper>
              <HeartIcon campId={content.campId} />
            </HeartIconWrapper>
            <TextContainer>
              <CampName>{content.campsite_name}</CampName>
              <CampRegion>{content.region_name}</CampRegion>
              <CampPrice>
                {Math.floor(Number(content.price)).toLocaleString()} 원
              </CampPrice>
            </TextContainer>
          </FirstImage>
        ))}
      </ImageContainers>
    </InfiniteScroll>
  );
};

const ImageContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

const HeartIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 12px;
  right: 12px;
`;

const FirstImage = styled.div`
  ${boxSize(360, 400)}
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;

const Image = styled.img`
  ${boxSize(360, 400)}
  object-fit: cover;
  transition: transform 0.5s;
  cursor: pointer;
  ${FirstImage}:hover & {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  position: absolute;
  margin-top: -85px;
  margin-left: 36px;
  color: #f5efe7;
`;

const CampName = styled.div`
  ${boxSize(280, 30)}
  ${fontMix(16)}
  margin-top: -20px;
`;

const CampRegion = styled.div`
  ${boxSize(280, 30)}
  ${fontMix(14)}
  margin-top: -3px;
`;

const CampPrice = styled.div`
  ${boxSize(280, 30)}
  ${fontMix(14)}
  margin-top: -8px;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffa9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  font: 1rem;
  text-align: center;
`;

const BackgroundBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default ImagesContainer;
