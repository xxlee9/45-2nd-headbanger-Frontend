import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import starImg from '../../../assets/images/ProductDetail/star.svg';
import { boxSize, flexSort } from '../../../styles/mixin';
import { Divider } from './TitleLine';
import theme from '../../../styles/theme';
import { Title } from './TxtDescription';
import PentagonGraph from './PentagonGraph';

const ProductReview = () => {
  const reviewData = useSelector(state => state.reviewData.result);
  const productData = useSelector(state => state.productData);
  const [currentPage, setCurrentPage] = useState(1);
  const [barWidths, setBarWidths] = useState({});
  const infoGraphRef = useRef(null);

  let average_grades = 0;
  let grades = {};
  let reviews = [];
  let reviewCount = 0;

  const hasProductData = productData !== undefined;
  const hasReviewData = reviewData !== undefined;
  const hasReviews = hasReviewData && reviewData.reviews !== undefined;

  average_grades = hasReviewData
    ? reviewData.total_grade[0].total_avg_grade.toFixed(1)
    : 0;
  grades = hasReviewData ? reviewData.total_grade[0] : {};
  reviews = hasReviews ? reviewData.reviews : [];
  reviewCount = hasReviews ? reviews.length : 0;

  const labels = [
    'avg_view',
    'avg_safety',
    'avg_cost',
    'avg_clean',
    'avg_convenience',
  ];
  const labelTranslation = {
    avg_view: '경관',
    avg_safety: '안전성',
    avg_cost: '가성비',
    avg_clean: '청결도',
    avg_convenience: '편리함',
  };

  useEffect(() => {
    if (productData) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            setBarWidths(entry.isIntersecting ? grades : {});
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );

      if (infoGraphRef.current) {
        observer.observe(infoGraphRef.current);
      }

      return () => {
        if (infoGraphRef.current) {
          observer.unobserve(infoGraphRef.current);
        }
      };
    }
  }, [infoGraphRef, productData, grades]);

  if (!reviewData || !productData) {
    return <div>Loading...</div>;
  }

  const reviewsPerPage = 4;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const changePage = pageNumber => {
    setCurrentPage(pageNumber);
  };
  if (!reviewData || !productData) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <RatingContainer>
        <Title>이용객 평점</Title>
        <div>
          <img src={starImg} alt="star-rating" />
          <AverageGrade>{average_grades}</AverageGrade>
          <Divider>|</Divider>
          <ReviewCount>후기 {reviewCount}개</ReviewCount>
        </div>
      </RatingContainer>
      <InfoGraph ref={infoGraphRef}>
        {labels.map((label, i) => (
          <Row key={i}>
            <Label>{labelTranslation[label]}</Label>
            <BarContainer>
              <Bar
                style={{
                  width: `${barWidths[label] ? barWidths[label] * 19.6 : 0}%`,
                }}
              />
            </BarContainer>
            <Grade>{parseFloat(grades[label]).toFixed(1)}</Grade>
          </Row>
        ))}
      </InfoGraph>
      <ReviewList>
        {reviews
          .slice(
            (currentPage - 1) * reviewsPerPage,
            currentPage * reviewsPerPage
          )
          .map(review => (
            <Review key={review.id}>
              <PentagonGraph
                graphSize={70}
                avg_view={review.grade.view_score}
                avg_safety={review.grade.safety_score}
                avg_cost={review.grade.cost_score}
                avg_clean={review.grade.clean_score}
                avg_convenience={review.grade.convenience_score}
              />
              <div className="reviewer">
                <ReviewerName>{review.name}</ReviewerName>
                <ReviewComment>{review.content}</ReviewComment>
              </div>
            </Review>
          ))}
      </ReviewList>
      <ReviewPage>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => changePage(pageNumber)}
            style={
              pageNumber === currentPage
                ? { fontWeight: 'bold', fontSize: '16px' }
                : {}
            }
          >
            {pageNumber}
          </button>
        ))}
      </ReviewPage>
    </Container>
  );
};

export default ProductReview;

const Container = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${theme.borderGrey};
`;

const RatingContainer = styled.div`
  margin-top: 40px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  Img {
    ${boxSize(12, 12)}
  }
`;

const AverageGrade = styled.span`
  margin-right: 8px;
`;
const ReviewCount = styled.span`
  margin-right: 8px;
`;
const InfoGraph = styled.div`
  margin-top: 60px;
  flex-wrap: wrap;
  gap: 40px;
  display: flex;
`;
const Row = styled.div`
  display: flex;
  width: 40%;
`;

const Label = styled.div`
  width: 70%;
`;

const BarContainer = styled.div`
  width: 75%;
  height: 4px;
  background-color: #dddddd;
`;

const Bar = styled.div`
  height: 100%;
  width: 0;
  background-color: #000;
  transition: width 1s ease-in-out;
  border-radius: 20px;
`;

const Grade = styled.span`
  font-size: 12px;
  margin-left: 8px;
`;
const ReviewList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid ${theme.borderGrey};
  margin-top: 40px;
  height: 300px;
`;

const Review = styled.div`
  ${flexSort('flex-start', 'center')}
  height: 150px;
  width: 49%;
  gap: 20px;
  .reviewer {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const ReviewerName = styled.h3`
  font-weight: bold;
`;

const ReviewComment = styled.p``;

const ReviewPage = styled.div`
  ${flexSort('center', 'center')}
  gap: 30px;
  button {
    border: none;
    background-color: transparent;
    &:hover {
      cursor: pointer;
    }
  }
`;
