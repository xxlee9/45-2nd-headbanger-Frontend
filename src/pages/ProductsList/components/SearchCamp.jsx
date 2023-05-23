import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { boxSize, fontMix } from '../../../styles/mixin';

const SearchCamp = ({ product }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCampingData, setFilteredCampingData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    searchParams.set('campName', searchTerm);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (product) {
      const filteredData = product?.filter(campsite =>
        campsite.campsite_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCampingData(filteredData.slice(0, 6));
    }
  }, [product, searchTerm]);

  return (
    <>
      <SearchCampingInput
        placeholder="다음 여행지는 어디신가요?"
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
  ${fontMix(13, props => props.theme.deepGrey)}
  margin: 0 auto;
  outline: none;
  border: none;
  padding: 0 0 0 16px;
  border-radius: 12px;
  color: ${props => props.theme.deepGrey};
  background-color: #f5efe7;
`;

const SearchBtn = styled.button`
  ${boxSize(22, 22)}
  cursor: pointer;
  position: absolute;
  margin-left: -34px;
  margin-top: 8px;
  border: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../images/ProductsList/search.png');
  background-color: #f5efe7;
`;

const Camp = styled.div`
  ${boxSize(240)}
  ${fontMix(12, 252525)} 
  padding: 10px 0px 12px 16px;
  background-color: rgba(245, 239, 231, 0.2);
`;

export default SearchCamp;
