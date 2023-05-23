import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import KakaoMap from './components/KakaoMap';
import SearchBar from '../../components/Nav/SearchBar';
import SearchInput from './components/SearchInput';
import FilterBox from './components/FilterBox';
import SortByBox from './components/SortByBox';
import ImagesContainer from './components/ImagesContainer';
import KakaoModal from './components/KakaoModal';
import styled from 'styled-components';
import { flexSort } from '../../styles/mixin';

const ProductsList = () => {
  const PRODUCT_LIST_API = 'http://10.58.52.241:3000';
  const [product, setProduct] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams([]);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const clickModal = () => setShowModal(!showModal);

  useEffect(() => {
    fetch(`${PRODUCT_LIST_API}/products?${searchParams.toString()}`)
      .then(response => response.json())
      .then(response => {
        setProduct(response.data);
      });
  }, [id, searchParams]);

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
          <SearchInput />
          <FilterBox />
        </LeftSideContainer>
        <RightSideContainer>
          <SortByBox />
          <ImagesContainer product={product} id={id} />
        </RightSideContainer>
      </ContainerAll>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const ContainerAll = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  ${flexSort('center', 'start')}
  margin: 0 auto;
  position: relative;
  top: 80px;
`;
const FeedModal = styled.div`
  position: absolute;
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
  left: 0;
`;

const RightSideContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default ProductsList;
