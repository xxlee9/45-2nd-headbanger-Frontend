import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import KakaoMap from './components/KakaoMap';
import SearchBar from '../../components/Nav/SearchBar';
import SearchCamp from './components/SearchCamp';
import FilterBox from './components/FilterBox';
import SortByBox from './components/SortByBox';
import ImagesContainer from './components/ImagesContainer';
import KakaoModal from './components/KakaoModal';
import SiteBanner from './components/SiteBanner';
import { PRODUCT_LIST_API } from '../../../src/config';
import { flexSort } from '../../styles/mixin';

const ProductsList = () => {
  const [product, setProduct] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const clickModal = () => setShowModal(!showModal);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const queryString = searchParams.toString();
        console.log(queryString);
        const response = await fetch(
          `${PRODUCT_LIST_API}/products?${queryString}`
        );
        const data = await response.json();

        setProduct(data.result);
      } catch (error) {}
    };

    fetchProducts();
  }, [id, searchParams]);

  // useEffect(() => {
  //   setSearchParams(new URLSearchParams());
  // }, [setSearchParams]);

  return (
    <Wrap>
      <SearchBar />
      {showModal && (
        <FeedModal onClick={clickModal}>
          <KakaoModal />
        </FeedModal>
      )}
      <ContainerAll>
        <LeftSideContainer>
          <KakaoMap clickModal={clickModal} />
          <SearchCamp product={product} />
          <FilterBox product={product} />
        </LeftSideContainer>
        <RightSideContainer>
          <SiteBanner />
          <SortByBox />
          <ImagesContainer
            product={product}
            id={id}
            searchParams={searchParams}
          />
        </RightSideContainer>
      </ContainerAll>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const ContainerAll = styled.div`
  ${flexSort('center', 'start')}
  width: 100%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  top: 80px;
`;
const FeedModal = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftSideContainer = styled.div`
  width: 30%;
  position: sticky;
  top: 0;
`;

const RightSideContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default ProductsList;
