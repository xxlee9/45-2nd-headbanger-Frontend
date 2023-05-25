import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ko } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { setStartDay, setEndDay, clearSelectedZones } from '../../../actions';
import { Title } from './TxtDescription';
import './calendarProduct.css';
import { flexSort } from '../../../styles/mixin';

const Calendar = () => {
  const productData = useSelector(state => state.productData.data);
  const startDay = useSelector(state => state.startDay);
  const endDay = useSelector(state => state.endDay);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(startDay);
  const [endDate, setEndDate] = useState(endDay);

  useEffect(() => {
    dispatch(clearSelectedZones());
  }, [startDate, endDate, dispatch]);

  const onChange = dates => {
    const [startDate, endDate] = dates;
    setStartDate(startDate);
    setEndDate(endDate);
    dispatch(setStartDay(startDate));
    dispatch(setEndDay(endDate));
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <CalendarWrapper>
      <Title>{productData.campName}</Title>
      <DateRange>
        <h2 className="range">
          {startDate &&
            startDate.toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
          ~{' '}
          {endDate &&
            endDate.toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
        </h2>
        <h2 className="night">
          {endDate &&
            startDate &&
            `${Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))}박
          ${Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1}일`}
        </h2>
      </DateRange>
      <DatePickerWrapper>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          monthsShown={2}
          selectsRange
          inline
          locale={ko}
        />
      </DatePickerWrapper>
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.div`
  width: 100%;
`;

const DateRange = styled.h2`
  /* ${flexSort('flex-start', 'center')} */
  display: flex;
  flex-direction: column;
  height: 40px;
  gap: 16px;
  margin-top: 40px;
  .range {
    font-size: 20px;
  }
  .night {
    font-size: 16px;
  }
`;

export const DatePickerWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  .react-datepicker {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: none;
  }

  .react-datepicker__month-container {
    width: 280px;
  }
`;
