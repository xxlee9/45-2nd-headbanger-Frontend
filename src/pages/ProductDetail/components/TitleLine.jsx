import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';
import { fontMix, flexSort } from '../../../styles/mixin';
import shareImg from '../../../assets/images/ProductDetail/share.svg';
import wishImg from '../../../assets/images/ProductDetail/wish.svg';
import starImg from '../../../assets/images/ProductDetail/star.svg';

const TitleLine = () => {
  const reviewData = useSelector(state => state.reviewData);
  const productData = useSelector(state => state.productData.data);

  if (!reviewData || !productData) {
    return <div>Loading...</div>;
  }

  const { campName, address } = productData;
  const { reviews, total_grade } = reviewData.result;
  const reviewCount = reviews ? reviews.length : 0;
  const totalAvgGrade = (total_grade[0]?.total_avg_grade || 0).toFixed(1);

  return (
    <Container>
      <div>
        <NameContainer>
          <Name>{campName}</Name>
        </NameContainer>

        <SubTitle>
          <Rating>
            <img src={starImg} alt="별점" />
            {totalAvgGrade} / 5.0 점
          </Rating>
          <Divider>|</Divider>
          <ReviewCount>{reviewCount}개의 후기</ReviewCount>
          <Divider>|</Divider>
          <Location>{address}</Location>
        </SubTitle>
      </div>
      <div>
        <ShareThings />
      </div>
    </Container>
  );
};

export default TitleLine;

const Container = styled.div`
  ${flexSort('space-between', 'flex-end')};
  width: 880px;
`;

const NameContainer = styled.div`
  ${flexSort('flex-start', 'center')};
`;

const Name = styled.div`
  ${fontMix(32, theme.mainBlack)};
  margin-bottom: 12px;
`;

const SubTitle = styled.h2`
  ${fontMix(16, theme.mainBlack)};
  display: flex;
  align-items: center;
`;

const Rating = styled.span`
  display: flex;
  gap: 4px;
  margin-right: 8px;
  img {
    width: 12px;
    height: 12px;
  }
`;

export const Divider = styled.span`
  margin: 0 4px;
  color: ${theme.mainYellow};
  font-weight: bold;
`;

const ReviewCount = styled.span`
  margin-right: 8px;
`;

const Location = styled.span``;

const ShareThings = styled.div`
  ${flexSort('center', 'center')}
  gap:30px;
  img {
    width: 16px;
    height: 16px;
  }
`;
