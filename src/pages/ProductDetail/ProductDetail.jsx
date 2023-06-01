import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { setProductData, setReviewData, setZoneData } from '../../actions';
import useFetchData from '../../components/customhooks/useFetchData';
import TitleLine from './components/TitleLine';
import PentagonGraph from './components/PentagonGraph';
import Pictures from './components/Pictures';
import ViewMap from '../../components/ViewMap/ViewMap';
import ProductNav from './components/ProductNav';
import EmojiDescription from './components/EmojiDescription';
import TxtDescription from './components/TxtDescription';
import RemoteCon from './components/RemoteCon';
import Facilities from './components/Facilities';
import CalendarProduct from './components/CalendarProduct';
import ProductReview from './components/ProductReview';
import KakaoMap from './components/KakaoMap';
const ProductDetail = () => {
  const overviewRef = useRef();
  const featuresRef = useRef();
  const facilitiesRef = useRef();
  const calendarRef = useRef();
  const viewMapRef = useRef();
  const reviewRef = useRef();
  const mapRef = useRef();
  const dispatch = useDispatch();
  const params = useParams();
  const campId = params.campId;
  const reviewData = useSelector(state => state.reviewData.result);
  const startDay = useSelector(state => state.startDay);
  const endDay = useSelector(state => state.endDay);
  const zoneData = useSelector(state => state.zoneData);

  let formattedStartDate = '';
  let formattedEndDate = '';

  if (startDay && endDay) {
    const startYear = startDay.getFullYear();
    const startMonth = startDay.getMonth() + 1;
    const startDayOfMonth = startDay.getDate();
    const formattedStartMonth = startMonth < 10 ? `0${startMonth}` : startMonth;
    const formattedStartDay =
      startDayOfMonth < 10 ? `0${startDayOfMonth}` : startDayOfMonth;
    formattedStartDate = `${startYear}-${formattedStartMonth}-${formattedStartDay}`;

    const endYear = endDay.getFullYear();
    const endMonth = endDay.getMonth() + 1;
    const endDayOfMonth = endDay.getDate();
    const formattedEndMonth = endMonth < 10 ? `0${endMonth}` : endMonth;
    const formattedEndDay =
      endDayOfMonth < 10 ? `0${endDayOfMonth}` : endDayOfMonth;
    formattedEndDate = `${endYear}-${formattedEndMonth}-${formattedEndDay}`;
  }

  useFetchData(
    `http://10.58.52.227:3000/products/camps?campId=${campId}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
    dispatch,
    setZoneData
  );

  useFetchData(
    `http://10.58.52.227:3000/products/camps/${campId}`,
    dispatch,
    setProductData
  );

  useFetchData(
    `http://10.58.52.227:3000/reviews/${campId}`,
    dispatch,
    setReviewData
  );

  if (
    !reviewData ||
    !reviewData.total_grade ||
    reviewData.total_grade.length === 0
  ) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Pictures />
      <ProductNavWrapper>
        <ProductNav
          overviewRef={overviewRef}
          featuresRef={featuresRef}
          facilitiesRef={facilitiesRef}
          calendarRef={calendarRef}
          reviewRef={reviewRef}
          mapRef={mapRef}
        />
      </ProductNavWrapper>
      <Section ref={overviewRef}>
        <FlexBox
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #DDDedd"
        >
          <FlexBox justifyContent="center" alignItems="center" gap="30px">
            <PentagonGraph graphSize={90} {...reviewData.total_grade[0]} />
            <TitleLine />
          </FlexBox>
        </FlexBox>
      </Section>
      <ContentWrapper>
        <LeftSection>
          <EmojiDescription />
          <Section ref={featuresRef}>
            <TxtDescription />
          </Section>
          <Section ref={facilitiesRef}>
            <Facilities />
          </Section>
          <Section ref={calendarRef}>
            <CalendarProduct />
          </Section>
          <Section ref={viewMapRef}>
            <ViewMap />
          </Section>
        </LeftSection>

        <RightSection>
          <RemoteCon calendarRef={calendarRef} viewMapRef={viewMapRef} />
        </RightSection>
      </ContentWrapper>
      <Section ref={reviewRef}>
        <ProductReview />
      </Section>
      <Section ref={mapRef}>
        <KakaoMap />
      </Section>
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  gap: ${({ gap }) => gap || '0px'};
  border-bottom: ${({ borderBottom }) => borderBottom || 'none'};
  padding: 10px;
`;

const Section = styled.div`
  width: 100%;
`;

const ProductNavWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 999;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 55%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 45%;
  position: sticky;
  top: 80px;
  height: 100%;
`;
