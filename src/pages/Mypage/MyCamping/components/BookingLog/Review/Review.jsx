import React from 'react';
import styled from 'styled-components';
import { flexSort, fontMix } from '../../../../../../styles/mixin';
import theme from '../../../../../../styles/theme';

const REVIEW_LIST = [
  { id: 1, title: '안락함' },
  { id: 2, title: '편리함' },
  { id: 3, title: '쾌적함' },
  { id: 4, title: '가성비' },
  { id: 5, title: '뷰' },
];

const Review = () => {
  return (
    <Container>
      <ViewBox>
        {REVIEW_LIST.map(({ id, title }) => {
          return (
            <ReviewSection key={id}>
              <ReviewTitle>{title}</ReviewTitle>
              <StarBox>
                <ReviewStar src="/images/Mypage/fullstar.png" />
                <ReviewStar src="/images/Mypage/star.png" />
                <ReviewStar src="/images/Mypage/star.png" />
                <ReviewStar src="/images/Mypage/star.png" />
                <ReviewStar src="/images/Mypage/star.png" />
              </StarBox>
            </ReviewSection>
          );
        })}
        <ConfirmBox>확인</ConfirmBox>
      </ViewBox>
    </Container>
  );
};

export default Review;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ViewBox = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  ${flexSort('center', 'center')}
  flex-direction: column;
  gap: 32px;
  border: 1px solid black;
  border-radius: 25px;
  padding: 40px 40px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 120vw;
    padding: 0;
    gap: 0;
  }
`;

const ReviewSection = styled.div`
  ${flexSort('center', 'center')}
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    gap: 4px;
  }
`;

const ReviewTitle = styled.p`
  height: 100%;
  font-size: 32px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    height: 50%;
    font-size: 24px;
  }
`;

const StarBox = styled.ul`
  height: 100%;
  display: flex;
  gap: 16px;
  @media screen and (max-width: 768px) {
    gap: 8px;
    height: 50%;
  }
`;

const ReviewStar = styled.img`
  width: 40px;
  height: 40px;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const ConfirmBox = styled.button`
  width: max-content;
  font-size: 20px;
  color: deepskyblue;
  background-color: transparent;
  border: 0;
  :hover {
    cursor: pointer;
  }
`;
