import React from 'react';
import styled from 'styled-components';
import { flexSort } from '../../../../styles/mixin';
const Pay = () => {
  return (
    <Container>
      <ViewBox>
        <RuleSection>
          <RuleTitle>기본 규칙</RuleTitle>
          <RuleBox>
            {RULE_DATA.map(({ id, text }) => {
              return (
                <RuleText key={id}>
                  {id}. {text}
                </RuleText>
              );
            })}
          </RuleBox>
        </RuleSection>
        <RefundSection>
          <RefundTitle>환불 정책</RefundTitle>
          <RefundBox>
            {REFUND_DATA.map(({ id, text }) => {
              return (
                <RefundText key={id}>
                  {id}. {text}
                </RefundText>
              );
            })}
          </RefundBox>
        </RefundSection>
        <PaySection>
          <PayTitle>결제 방법</PayTitle>
          <PayBox>
            {PAY_DATA.map(({ id, title, url }) => {
              return (
                <PayBy key={id}>
                  <HowToPay type="radio" id={title} name="howToPay" />
                  <label htmlFor={title}>{title}</label>
                  <PayIcon src={url} />
                </PayBy>
              );
            })}
          </PayBox>
        </PaySection>
      </ViewBox>
    </Container>
  );
};

export default Pay;

const PAY_DATA = [
  { id: 1, title: '신용/체크카드', url: '/images/Payment/pay-card.png' },
  { id: 2, title: '토스페이', url: '/images/Payment/pay-toss.png' },
  { id: 3, title: '카카오페이', url: '/images/Payment/pay-kakao.png' },
  { id: 4, title: '네이버페이', url: '/images/Payment/pay-naver.png' },
];

const RULE_DATA = [
  {
    id: 1,
    text: '쓰레기를 치우세요: 자연을 보호하기 위해 캠핑장에서는 반드시 쓰레기를 올바르게 처리해야 합니다.',
  },
  {
    id: 2,
    text: '불을 안전하게 다루세요: 캠핑장에서는 불을 안전하게 다뤄야 합니다.',
  },
  {
    id: 3,
    text: '조용하게 지내세요: 다른 캠핑객들의 평화를 존중하기 위해 조용히 지내세요.',
  },
  {
    id: 4,
    text: '야생동물을 존중하세요: 캠핑장에서는 야생동물과 공존해야 합니다.',
  },
  {
    id: 5,
    text: '캠핑장 규칙을 준수하세요: 캠핑장은 각각의 규칙과 규정을 가지고 있습니다. 입장 시에는 캠핑장의 규칙을 읽고 숙지하세요.',
  },
];

const REFUND_DATA = [
  {
    id: 1,
    text: '취소 정책 확인: 캠핑장을 예약하기 전에 취소 정책을 확인하세요.대부분의 캠핑장은 취소에 대한 규정을 명시하고 있습니다. 예약시기와 취소 시기에 따라 환불 정책이 다를 수 있으므로, 정책을 주의 깊게 읽고 이해하세요.',
  },
  {
    id: 2,
    text: '취소 기한: 캠핑장의 취소 정책은 일반적으로 취소 기한을 명시합니다. 이 기한 내에 예약을 취소해야 원활한 환불이 이루어질 수 있습니다. 취소 기한을 초과하면 일부 또는 전액의 예약 비용이 환불되지 않을 수 있습니다.',
  },
  {
    id: 3,
    text: '취소 수수료: 몇몇 캠핑장은 취소에 대한 수수료를 부과할 수 있습니다. 예약을 취소할 경우에는 수수료가 적용될 수 있으므로, 이 역시 취소 정책을 확인하여 사전에 알고 계시기 바랍니다.',
  },
  {
    id: 4,
    text: '비상사항 및 예외 규정: 캠핑장은 예외적인 상황이나 긴급 사태에 대한 취소 규정을 가지고 있을 수 있습니다. 천재지변이나 캠핑장 운영상의 문제로 인해 예약을 취소해야 하는 경우, 예외 규정에 따라 환불이나 예약 변경이 이루어질 수 있습니다.',
  },
  {
    id: 5,
    text: '취소 절차: 예약을 취소할 때에는 캠핑장에서 요구하는 절차를 따르셔야 합니다. 주어진 취소 절차를 따르지 않으면 취소가 완료되지 않거나 환불이 이루어지지 않을 수 있으므로, 캠핑장의 정책을 정확히 이해하고 절차를 따르세요.',
  },
  {
    id: 6,
    text: '반드시 캠핑장의 공식 웹사이트나 예약 시스템을 통해 해당 캠핑장의 취소 규정을 확인하고, 자세한 내용을 알아두시기 바랍니다.',
  },
];

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ViewBox = styled.div`
  ${flexSort('space-between', 'start')}
  flex-direction: column;
  width: 600px;
  max-width: 600px;
  height: 100%;
  padding: 12px;
`;

const PaySection = styled.div`
  width: 100%;
  height: 100%;
  padding: 36px 0;
`;

const PayTitle = styled.h1`
  height: 100%;
  width: 100%;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.4;
`;

const PayBox = styled.div`
  ${flexSort('center', 'center')};
  flex-direction: column;
  height: 100%;
  gap: 24px;
  padding-top: 24px;
`;

const PayBy = styled.div`
  ${flexSort('start', 'center')}
  gap: 8px;
  width: 100%;
  height: 100%;
  line-height: 48px;
`;

const HowToPay = styled.input`
  height: 100%;
  font-size: 24px;
`;

const PayIcon = styled.img`
  width: 60px;
  height: 100%;
`;

const RefundSection = styled.div`
  padding: 36px 0;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${props => props.theme.middleGrey};
`;

const RefundTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  padding-bottom: 8px;
  line-height: 1.4;
`;

const RefundBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  padding-top: 24px;
`;

const RefundText = styled.p`
  height: 100%;
  font-size: 16px;
  line-height: 1.4;
`;

const RuleSection = styled.div`
  padding-bottom: 36px;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${props => props.theme.middleGrey};
`;

const RuleTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  padding-bottom: 8px;
  line-height: 1.4;
`;

const RuleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 240px;
  padding-top: 24px;
`;

const RuleText = styled.p`
  font-size: 16px;
  line-height: 1.4;
`;
