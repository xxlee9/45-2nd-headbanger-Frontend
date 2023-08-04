import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingMotion from '../../../components/Common/LoadingMotion';
import { boxSize, fontMix } from '../../../styles/mixin';
import { PRODUCT_LIST_API } from '../../../config';

const ImagesContainer = ({ id, searchParams, campId }) => {
  const [product, setProduct] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [limit] = useState(8);
  const navigate = useNavigate();
  const queryString = searchParams.toString();

  let timerId;

  const loadedProductIds = new Set();

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

      const filteredProducts = newProducts.filter(
        product => !loadedProductIds.has(product.id)
      );

      if (offset === 0) {
        setProduct(filteredProducts);
      } else {
        setProduct(prevProducts => [...prevProducts, ...filteredProducts]);
      }

      newProducts.forEach(product => loadedProductIds.add(product.id));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const debouncedFetch = () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fetchProducts(product.length);
    }, 500);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      debouncedFetch();
    }
  };

  useEffect(() => {
    fetchProducts();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

const LoadingText = styled.div`
  font: 1rem;
  text-align: center;
`;

const BackgroundBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default ImagesContainer;
