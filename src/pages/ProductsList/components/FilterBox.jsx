import React from 'react';
import FilterDetail from './FilterDetail';

const FilterBox = ({ product }) => {
  return (
    <>
      {FILTER_TITLE.map(title => (
        <FilterDetail
          key={title.id}
          name={title.name}
          option={title.option}
          product={product}
        />
      ))}
    </>
  );
};

export default FilterBox;

const ENV_OPTION = [
  { id: 1, category: 'themeId', type: 'mountain', content: '산' },
  { id: 2, category: 'themeId', type: 'sea', content: '바다' },
  { id: 3, category: 'themeId', type: 'city', content: '도심' },
  { id: 4, category: 'themeId', type: 'lake', content: '호수' },
];

const AMEN_OPTION = [
  { id: 1, category: 'amenityId', type: 'swim', content: '샤워장' },
  { id: 2, category: 'amenityId', type: 'shower', content: '수영장' },
  { id: 3, category: 'amenityId', type: 'store', content: '상점' },
  { id: 4, category: 'amenityId', type: 'parking', content: '주차장' },
  { id: 5, category: 'amenityId', type: 'cook', content: '취사장' },
  { id: 6, category: 'amenityId', type: 'pet', content: '반려동물' },
  { id: 7, category: 'amenityId', type: 'kid', content: '키즈존' },
];

const FILTER_TITLE = [
  { id: 0, name: '환경 별 검색', option: ENV_OPTION },
  { id: 1, name: '편의시설 별 검색', option: AMEN_OPTION },
];
