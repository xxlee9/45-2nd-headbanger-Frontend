import React, { useState } from 'react';
import axios from 'axios';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import SuccessModal from './SuccessModal';
import StarRating from './StarRating';
import styled from 'styled-components';
import { flexSort } from '../../../../../../styles/mixin';

export default NiceModal.create(({ id }) => {
  const [totalReview, setTotalReview] = useState({
    campId: id,
    view: '',
    safety: '',
    cost: '',
    clean: '',
    convenience: '',
    content: '',
  });
  const TOKEN = localStorage.getItem('token');
  const modal = useModal();

  const closeModal = () => {
    modal.remove();
    document.body.style.overflow = 'unset';
  };

  const showSuccessModal = () => {
    NiceModal.show(SuccessModal, { name: 'Success' });
    closeModal();
  };

  const saveTextReview = e => {
    setTotalReview({ ...totalReview, content: e.target.value });
  };

  const handleRatingChange = (engTitle, rating) => {
    setTotalReview(prevTotalReview => ({
      ...prevTotalReview,
      [engTitle]: rating,
    }));
  };

  const addReview = () => {
    axios
      .post('http://10.58.52.227:3000/reviews', totalReview, {
        headers: {
          'Content-Type': 'application/json',
          authorization: TOKEN,
        },
      })
      .then(showSuccessModal());
    showSuccessModal();
  };

  return (
    <Container>
      <ViewBox>
        <RatingSection>
          {REVIEW_LIST.map(({ id, title, engTitle }) => {
            return (
              <RatingBox key={id}>
                <RatingTitle>{title}</RatingTitle>
                <StarBox engTitle={engTitle}>
                  <StarRating
                    onSaveRating={rating =>
                      handleRatingChange(engTitle, rating)
                    }
                  />
                </StarBox>
              </RatingBox>
            );
          })}
        </RatingSection>
        <TextSection>
          <ReviewText
            placeholder="소중한 리뷰를 공유해주세요"
            onChange={saveTextReview}
            rows={5}
          />
        </TextSection>
        <ButtonBox>
          <CancelBtn onClick={closeModal}>취소</CancelBtn>
          <ConfirmBtn onClick={addReview}>확인</ConfirmBtn>
        </ButtonBox>
      </ViewBox>
    </Container>
  );
});

const REVIEW_LIST = [
  { id: 1, title: '경관', engTitle: 'view' },
  { id: 2, title: '안전함', engTitle: 'safety' },
  { id: 3, title: '가성비', engTitle: 'cost' },
  { id: 4, title: '청결도', engTitle: 'clean' },
  { id: 5, title: '편리함', engTitle: 'convenience' },
];

const Container = styled.div`
  ${flexSort('center', 'center')}
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(40, 40, 40, 0.8);
  @media screen and (max-width: 768px) {
  }
`;

const ViewBox = styled.div`
  ${flexSort('space-between', 'center')}
  flex-direction: column;
  gap: 32px;
  width: 30%;
  height: max-content;
  background-color: ${props => props.theme.mainMediumGreen};
  border-radius: 25px;
  padding: 40px 40px;
  @media screen and (max-width: 1300px) {
    width: 35%;
  }
  @media screen and (max-width: 1050px) {
    width: 40%;
  }
  @media screen and (max-width: 900px) {
    width: 45%;
  }

  @media screen and (max-width: 768px) {
    padding: 24px 24px;
    width: 70%;
    height: 80%;
  }
  @media screen and (max-width: 500px) {
    height: 60%;
    gap: 8px;
  }
`;

const RatingSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const RatingBox = styled.div`
  ${flexSort('space-between', 'center')}
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 70%;
    width: 100%;
  }
`;

const RatingTitle = styled.p`
  ${flexSort('start', 'center')}
  height: 100%;
  width: 50%;
  font-size: 24px;
  color: ${props => props.theme.mainGreen};
  @media screen and (max-width: 900px) {
    font-size: 20px;
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 100%;
    width: 40%;
    font-size: 16px;
  }
`;

const StarBox = styled.ul`
  ${flexSort('end', 'center')}
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const TextSection = styled.div`
  width: 100%;
  height: max-content;
`;

const ReviewText = styled.textarea`
  padding: 24px;
  width: 1200px;
  max-width: 100%;
  height: 160px;
  resize: none;
  font-size: 16px;
  border-radius: 25px;
  overflow: hidden;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.white};
  @media screen and (max-width: 500px) {
    height: 120px;
    font-size: 12px;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  ${flexSort('space-between', 'center')}
  gap: 12px;
  @media screen and (max-width: 500px) {
    margin-top: -4px;
    gap: 8px;
  }
`;

const CancelBtn = styled.button`
  width: 100%;
  font-size: 16px;
  line-height: 40px;
  background-color: ${props => props.theme.white};
  border: 0;
  border-radius: 12px;
  color: ${props => props.theme.mainGreen};
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.modalButtonBrown};
    color: ${props => props.theme.white};
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
    line-height: 32px;
  }
`;

const ConfirmBtn = styled.button`
  width: 100%;
  font-size: 16px;
  line-height: 40px;
  background-color: ${props => props.theme.white};
  border: 0;
  border-radius: 12px;
  color: ${props => props.theme.mainGreen};
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.modalButtonBrown};
    color: ${props => props.theme.white};
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
    line-height: 32px;
  }
`;
