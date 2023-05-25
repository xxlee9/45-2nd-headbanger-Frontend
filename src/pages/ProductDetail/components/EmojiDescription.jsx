import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { boxSize, flexSort, fontMix } from '../../../styles/mixin';
import {
  GRADE_DESCRIPTIONS,
  LOCATION_DESCRIPTIONS,
  ENVIRONMENT_DESCRIPTIONS,
} from './GRADE_DESCRIPTIONS';

const EmojiDescription = () => {
  const reviewData = useSelector(state => state.reviewData);
  const locationCategory = useSelector(state => state.productData.data.region);
  const environment = useSelector(state => state.productData.data.theme);

  if (
    !reviewData ||
    !reviewData.result.total_grade ||
    reviewData.result.total_grade.length === 0
  ) {
    return <div>Loading...</div>;
  }
  const grades = reviewData.result.total_grade[0];

  const maxGrade = Math.max(...Object.values(grades));
  const maxGradeDescription =
    GRADE_DESCRIPTIONS[
      Object.keys(grades).find(key => grades[key] === maxGrade)
    ];

  const locationDescription = LOCATION_DESCRIPTIONS[locationCategory];
  const environmentDescription = ENVIRONMENT_DESCRIPTIONS[environment];

  if (!reviewData || !locationCategory || !environment) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <FlexCenter>
        <Box>
          <Emoji>{maxGradeDescription.emoji}</Emoji>
          <Label>{maxGradeDescription.label}</Label>
        </Box>
        <Box>
          <Emoji>{locationDescription.emoji}</Emoji>
          <Label>{locationDescription.label}</Label>
        </Box>
        <Box>
          <Emoji>{environmentDescription.emoji}</Emoji>
          <Label>{environmentDescription.label}</Label>
        </Box>
      </FlexCenter>
    </Container>
  );
};

export default EmojiDescription;

const Container = styled.div`
  width: 600px;
  height: 100%;
  line-height: 1.5;
`;
const FlexCenter = styled.div`
  ${flexSort('space-between', 'center')}
`;

const Box = styled.div`
  ${flexSort('space-between', 'center')}
  ${boxSize(188, 88)}
  border: 1px solid ${theme.borderGrey};
  border-radius: 12px;
  padding: 16px 24px;
  word-break: keep-all;
  line-break: strict;
`;

const Emoji = styled.span`
  font-size: 24px;
  margin-right: 16px;
`;

const Label = styled.span`
  font-size: 16px;
`;
