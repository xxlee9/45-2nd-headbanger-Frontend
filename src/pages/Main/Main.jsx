import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainLocal from './components/MainLocal';
import ThemaCamping from './components/ThemaCamping';
import Amenities from './components/Amenities';
import SearchBar from '../../components/Nav/SearchBar';
import LikeList from './components/LikeList';
import { flexSort } from '../../styles/mixin';
import ResponsiveMedia from './components/ResponsiveMedia';
import { PRODUCT_LIST_API } from '../../config';

const Main = () => {
  const [regionCampingData, setRegionCampingData] = useState([]);
  const [themaCampingData, setThemaCampingData] = useState([]);
  const [amenitiesData, setAmenitiesData] = useState([]);

  useEffect(() => {
    fetch(`${PRODUCT_LIST_API}/products/categories`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        const regionCamping = data.data[0].region_result;
        const themaCamping = data.data[0].theme_result;
        const amenities = data.data[0].amenity_result;

        const regionCampingData = regionCamping.map(item => ({
          id: item.region_id,
          name: item.region_name,
          count: item.region_count,
        }));
        const themaCampingData = themaCamping.map(item => ({
          id: item.theme_id,
          name: item.theme_name,
          count: item.theme_count,
        }));
        const amenitiesData = amenities.map(item => ({
          id: item.amenity_id,
          name: item.amenity_name,
          count: item.amenity_count,
        }));
        setRegionCampingData(regionCampingData);
        setThemaCampingData(themaCampingData);
        setAmenitiesData(amenitiesData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!regionCampingData || !themaCampingData || !amenitiesData) {
    return <div>Loading...</div>;
  }
  return (
    <MainContainer>
      <MainPlayerWrapper>
        <ResponsiveMedia />
      </MainPlayerWrapper>
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      <ViewBox>
        <MainLocal regionCampingData={regionCampingData} />
        <ThemaCamping themaCampingData={themaCampingData} />
        <Amenities amenitiesData={amenitiesData} />
        <LikeList />
      </ViewBox>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainPlayerWrapper = styled.div`
  width: 100%;
  height: 600px;
  z-index: -1;
  display: flex;
  align-items: center;
`;

const SearchBarWrapper = styled.div`
  ${flexSort('center', 'center')}
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
`;

const ViewBox = styled.div`
  ${flexSort('center', 'center')}
  flex-direction: column;
  gap: 60px;
`;
