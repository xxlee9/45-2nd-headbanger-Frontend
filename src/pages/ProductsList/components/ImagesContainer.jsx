import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import HeartIcon from '../../ProductsList/components/HeartIcon';
import { boxSize, fontMix } from '../../../styles/mixin';
import { PRODUCT_LIST_API } from '../../../config';

const ImagesContainer = ({ id, searchParams }) => {
  const [product, setProduct] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const queryString = searchParams.toString();
        const response = await fetch(
          `${PRODUCT_LIST_API}/products?${queryString}&offset=0&limit=5`
        );
        const data = await response.json();
        setProduct(data.result);
      } catch (error) {}
    };

    fetchProducts();
  }, [searchParams]);

  const fetchMoreProducts = async () => {
    try {
      const offset = product?.length;
      const queryString = searchParams.toString();
      const response = await fetch(
        `${PRODUCT_LIST_API}/products?${queryString}&offset=${offset}&limit=${limit}`
      );
      const data = await response.json();
      const newProducts = data.result;

      if (newProducts.length === 0) {
        setHasMore(false);
      }
      setProduct(prevProducts => [...prevProducts, ...newProducts]);
    } catch (error) {}
  };

  return (
    <InfiniteScroll
      dataLength={product?.length}
      next={fetchMoreProducts}
      hasMore={hasMore}
      loader={<div>로딩 중 ...</div>}
      endMessage={<div>다른 옵션 더 검색하기</div>}
      style={{ overflow: 'visible' }}
    >
      <ImageContainers>
        {product?.map(content => (
          <FirstImage key={content.id}>
            <Image src={content.thumbnail} />
            <HeartIconWrapper>
              <HeartIcon campId={content.campId} />
            </HeartIconWrapper>
            <TextContainer>
              <CampName>{content.campsite_name}</CampName>
              <CampRegion>{content.region_name}</CampRegion>
              <CampPrice>{content.price}</CampPrice>
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
  z-index: 1;
`;

const FirstImage = styled.div`
  ${boxSize(360, 400)}
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  ${boxSize(360, 400)}

  object-fit: cover;
  transition: transform 0.5s;

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

export default ImagesContainer;
