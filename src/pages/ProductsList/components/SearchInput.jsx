import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { boxSize, fontMix } from '../../../styles/mixin';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [campingData, setCampingData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const fetchCampingData = async () => {
    try {
      const response = await axios.get('../data/campData.json');
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCampingData();
      setCampingData(data);
    };
    fetchData();
  }, []);

  const handleSearchSubmit = () => {
    searchParams.set('searchKeyword', searchTerm);
    setSearchParams(searchParams);
    const checkedOptions = campingData
      .filter(campsite => searchParams.has(campsite.id))
      .map(campsite => campsite.id);
  };
  const filteredCampingData = campingData.filter(campsite =>
    campsite.campsite_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchCampingInput
        placeholder="캠핑장 검색"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <SearchBtn onClick={handleSearchSubmit} />
      {searchTerm !== '' &&
        filteredCampingData.map(campsite => (
          <Camp key={campsite.campsite_name}>
            <div>{campsite.campsite_name}</div>
          </Camp>
        ))}
    </>
  );
};

const SearchCampingInput = styled.input`
  ${boxSize(240, 40)}
  ${fontMix(14)}
  margin: 0 auto;
  outline: none;
  border: none;
  padding-left: 16px;
  color: ${props => props.theme.deepGrey};
  background-color: ${props => props.theme.inputGrey};
`;

const SearchBtn = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  margin-left: -34px;
  margin-top: 8px;
  border: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../images/ProductsList/search.png');
`;

const Camp = styled.div`
  width: 240px;
  outline: none;
  border: none;
  color: ${props => props.theme.deepGrey};
  padding: 10px 0px 12px 16px;
  background-color: ${props => props.theme.inputGrey};
  ${fontMix(14)}
`;

export default SearchInput;
