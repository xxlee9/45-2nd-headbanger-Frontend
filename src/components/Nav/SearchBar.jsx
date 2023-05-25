import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStartDay, setEndDay, setSelectedLocation } from '../../actions';
import { ko } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { flexSort, fontMix } from '../../styles/mixin';
import theme from '../../styles/theme';
import { useParams, useNavigate } from 'react-router-dom';
import '../../pages/ProductDetail/components/calendarProduct.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const startDay = useSelector(state => state.startDay);
  const endDay = useSelector(state => state.endDay);
  const selectedLocation = useSelector(state => state.selectedLocation);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const onStartDayChange = dates => {
    const selectedStartDay = dates;
    const selectedEndDay =
      endDay < selectedStartDay ? selectedStartDay : endDay;

    dispatch(setStartDay(selectedStartDay));
    dispatch(setEndDay(selectedEndDay));
  };

  const onEndDayChange = dates => {
    const selectedEndDay = dates;
    const selectedStartDay =
      selectedEndDay < startDay ? selectedEndDay : startDay;

    dispatch(setStartDay(selectedStartDay));
    dispatch(setEndDay(selectedEndDay));
  };

  const handleLocationSelect = location => {
    dispatch(setSelectedLocation(location));
    setDropdownOpen(false);
  };

  const handleSearch = () => {
    let queryParams = new URLSearchParams(window.location.search);
    if (selectedLocation !== '전체') {
      switch (selectedLocation) {
        case '수도권':
          queryParams.set('region', '1');
          break;
        case '강원도':
          queryParams.set('region', '2');
          break;
        case '충청도':
          queryParams.set('region', '3');
          break;
        case '전라도':
          queryParams.set('region', '4');
          break;
        case '경상도':
          queryParams.set('region', '5');
          break;
        case '제주':
          queryParams.set('region', '6');
          break;
        default:
          break;
      }
    } else {
      queryParams.set('region', '');
    }
    navigate(`/productslist?${queryParams.toString()}`);
  };

  const locationMenuItems = [
    { label: '전체', value: '' },
    { label: '수도권', value: '1' },
    { label: '강원도', value: '2' },
    { label: '충청도', value: '3' },
    { label: '전라도', value: '4' },
    { label: '경상도', value: '5' },
    { label: '제주', value: '6' },
  ];

  return (
    <SearchBarBackground>
      <SearchBarWrap>
        <LocationButton onClick={() => setDropdownOpen(!dropdownOpen)}>
          {selectedLocation === '' ? '전체' : selectedLocation}
        </LocationButton>

        {dropdownOpen && (
          <DropdownMenu>
            {locationMenuItems.map(item => (
              <MenuItem
                key={item.value}
                onClick={() => handleLocationSelect(item.label)}
              >
                {item.label}
              </MenuItem>
            ))}
          </DropdownMenu>
        )}

        <DatePickerWrapper>
          <div className="description">체크인 날짜</div>
          <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            selected={startDay}
            onChange={onStartDayChange}
            startDate={startDay}
            minDate={new Date()}
            monthsShown={1}
            locale={ko}
          />
        </DatePickerWrapper>

        <DatePickerWrapper>
          <div className="description">체크아웃 날짜</div>
          <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            selected={endDay}
            onChange={onEndDayChange}
            endDate={endDay}
            minDate={startDay}
            monthsShown={1}
            locale={ko}
          />
        </DatePickerWrapper>
        <SearchButton onClick={handleSearch}>검색</SearchButton>
      </SearchBarWrap>
    </SearchBarBackground>
  );
};

const SearchBarBackground = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border: none;
  outline: none;
  background-color: #68a67d;
`;

const SearchBarWrap = styled.div`
  ${flexSort('center', 'center')}
  width: 1100px;
  height: 46px;
  border: 1px solid #68a67d;
`;

const LocationButton = styled.button`
  width: 30%;
  height: 100%;
  padding: 0 8px;
  border: none;
  outline: none;
  ${fontMix(14, 'black')}
  cursor: pointer;
  background-color: #fff;
  border-radius: 12px;
`;

const SearchButton = styled.button`
  width: 8%;
  height: 100%;
  border: none;
  outline: none;
  background-color: ${props => props.theme.mainBlack};
  border-radius: 12px;
  font-size: ${fontMix(14, 'white')};
  padding: 0 16px;
  cursor: pointer;
  margin-left: 6px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 30%;
  background-color: #fafafa;
  border-radius: 12px;
  overflow: hidden;
  z-index: 999;
`;

const MenuItem = styled.div`
  height: 40px;
  text-align: center;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const DatePickerWrapper = styled.button`
  ${flexSort('center', 'center')}
  border-radius: 12px;
  width: 30%;
  height: 100%;
  padding: 0 8px;
  border: none;
  outline: none;
  cursor: pointer;
  ${fontMix(14, 'black')}
  background-color: #fff;
  margin-left: 6px;
  &:hover {
    cursor: pointer;
  }
  .description {
    ${fontMix(8, theme.mainBlack)};
    font-weight: bold;
    width: 30%;
  }
  input {
    width: 100%;
    height: 44px;
    border: none;
    text-align: center;
    &:focus {
      border: none;
      outline: none;
      caret-color: transparent;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .react-datepicker {
    width: 100%;

    display: flex;
    justify-content: space-between;
    border: none;
  }

  .react-datepicker__month-container {
    width: 280px;
    z-index: 99909999999;
  }
  /* .react-datepicker__day {
    z-index: 99909999999;
  } */
`;

export default SearchBar;
