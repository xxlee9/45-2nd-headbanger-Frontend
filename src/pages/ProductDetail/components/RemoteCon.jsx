import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setStartDay,
  setEndDay,
  setAdultCount,
  setBabyCount,
  setChildCount,
  setPetCount,
  setTotalPrice,
} from '../../../actions';
import NeedLoginModal from './needLoginModal';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { boxSize, flexSort, fontMix } from '../../../styles/mixin';
import starImg from '../../../assets/images/ProductDetail/star.svg';
import plusIcon from '../../../assets/images/ProductDetail/plusIcon.svg';
import minusIcon from '../../../assets/images/ProductDetail/minusIcon.svg';
import dropUp from '../../../assets/images/ProductDetail/dropup.png';
import dropDown from '../../../assets/images/ProductDetail/dropdown.png';
import './calendarProduct.css';

const RemoteCon = ({ calendarRef, viewMapRef }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productData = useSelector(state => state.productData);
  const selectedZones = useSelector(state => state.selectedZones);
  const startDay = useSelector(state => state.startDay);
  const endDay = useSelector(state => state.endDay);
  const reviewData = useSelector(state => state.reviewData);
  const { price } = productData.data;
  const { reviews, total_grade } = reviewData.result || [];
  const reviewCount = reviews ? reviews.length : 0;
  const [withOutFeePrice, setwithOutFeePrice] = useState(0);
  const dropdownRef = useRef(null);
  const adultCount = useSelector(state => state.adultCount);
  const babyCount = useSelector(state => state.babyCount);
  const petCount = useSelector(state => state.petCount);
  const childCount = useSelector(state => state.childCount);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [arrowUp, setArrowUp] = useState(false);
  const { amenities } = productData.data;
  const withpets = amenities.includes('반려동물');
  const kidszone = amenities.includes('키즈존');
  const [showModal, setShowModal] = useState(false);
  const calculatewithOutFeePrice = () => {
    let withOutFeePrice = 0;
    if (selectedZones.length > 0) {
      withOutFeePrice = selectedZones.reduce((total, zone) => {
        const zonePrice = parseInt(price) + zone.additionalPrice;
        const totalNights =
          endDay >= startDay
            ? Math.ceil((endDay - startDay) / (1000 * 60 * 60 * 24))
            : 0;
        return total + zonePrice * totalNights;
      }, 0);
    }
    return withOutFeePrice;
  };
  useEffect(() => {
    const newWithoutFeePrice = calculatewithOutFeePrice();
    setwithOutFeePrice(newWithoutFeePrice);
  }, [selectedZones, startDay, endDay]);

  const selectedZoneNames = selectedZones
    .map(zone => zone.zoneName)
    .sort((a, b) => {
      const zoneA = a.toLowerCase();
      const zoneB = b.toLowerCase();
      if (zoneA < zoneB) {
        return -1;
      }
      if (zoneA > zoneB) {
        return 1;
      }
      return 0;
    });
  let maxPeople = selectedZones.reduce(
    (total, zone) => total + parseInt(zone.maxPeople),
    0
  );

  const calculatePricePerNight = () => {
    let priceString = '';
    let descriptionString = '';

    if (selectedZones.length === 0) {
      priceString = `₩${parseInt(price).toLocaleString('ko-KR')}`;
      descriptionString = '\u00A0\u00A0부터';
    } else {
      const perNightPrice = selectedZones.reduce((total, zone) => {
        const zonePrice = parseInt(price) + zone.additionalPrice;
        return total + zonePrice;
      }, 0);

      priceString = `₩${perNightPrice.toLocaleString('ko-KR')}`;
      descriptionString = ' / 박';
    }

    return (
      <>
        <Price>{priceString}</Price>
        <Description>{descriptionString}</Description>
      </>
    );
  };
  const handleReservation = () => {
    if (!localStorage.getItem('token')) {
      setShowModal(true);
    } else if (adultCount > maxPeople) {
      setShowTooltip(true);
    } else {
      dispatch(setTotalPrice(withOutFeePrice));
      navigate('/payment');
      window.scrollTo(0, 0);
    }
  };

  const decreaseCount = type => {
    switch (type) {
      case 'adult':
        if (adultCount > 1) dispatch(setAdultCount(adultCount - 1));
        break;
      case 'child':
        if (childCount > 0) dispatch(setChildCount(childCount - 1));
        break;
      case 'baby':
        if (babyCount > 0) dispatch(setBabyCount(babyCount - 1));
        break;
      case 'pet':
        if (petCount > 0) dispatch(setPetCount(petCount - 1));
        break;
      default:
        break;
    }
  };

  const increaseCount = type => {
    switch (type) {
      case 'adult':
        dispatch(setAdultCount(adultCount + 1));
        break;
      case 'child':
        dispatch(setChildCount(childCount + 1));
        break;
      case 'baby':
        dispatch(setBabyCount(babyCount + 1));
        break;
      case 'pet':
        dispatch(setPetCount(petCount + 1));
        break;
      default:
        break;
    }
  };

  const handleDropdownToggle = event => {
    event.stopPropagation();
    setDropdownOpen(prevOpen => !prevOpen);
    setArrowUp(prevOpen => !prevOpen);
  };
  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        dropdownRef &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
        setArrowUp(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [dropdownRef]);

  const handleDropdownBoxClick = event => {
    event.stopPropagation();
  };
  const scrollToCalendar = () => {
    if (calendarRef && calendarRef.current) {
      calendarRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToViewMap = () => {
    if (viewMapRef && viewMapRef.current) {
      viewMapRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };
  const handleCountChange = (type, operation) => {
    if ((type === 'child' || type === 'baby') && !kidszone) {
      return;
    }

    if (type === 'pet' && !withpets) {
      return;
    }

    if (operation === 'decrease') {
      decreaseCount(type);
    } else if (operation === 'increase') {
      increaseCount(type);
    }
  };

  const tooltipCondition =
    startDay &&
    endDay &&
    ((!selectedZones[0]?.zoneName && !adultCount) ||
      (selectedZones[0]?.zoneName && adultCount > maxPeople));

  if (!reviewData || !productData || !selectedZones) {
    return <div>Loading...</div>;
  }
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Title>
        <div>{calculatePricePerNight()}</div>
        <Rating>
          <div>
            <img src={starImg} alt="별점" />
            {total_grade[0].total_avg_grade.toFixed(1)}
          </div>
          <ReviewCount>{reviewCount}개의 후기</ReviewCount>
        </Rating>
      </Title>
      <Box>
        <Row onClick={scrollToCalendar}>
          <ContentBox border>
            <h1>
              <Label>체크인</Label>
              <Content>
                {startDay &&
                  startDay.toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
              </Content>
            </h1>
          </ContentBox>
          <ContentBox>
            <h1>
              <Label>체크아웃</Label>
              <Content>
                {endDay &&
                  endDay.toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
              </Content>
            </h1>
          </ContentBox>
        </Row>
        <Row border>
          <ContentBox onClick={handleDropdownToggle}>
            <h1>
              <FirstBox>
                <div>
                  <Label>인원</Label>
                  <Content>
                    {`성인 ${adultCount}명`}
                    {childCount > 0 && `, 어린이 ${childCount}명`}
                    {babyCount > 0 && `, 유아 ${babyCount}명`}
                    {petCount > 0 && `, 반려동물 ${petCount}마리`}
                  </Content>
                </div>
                <div className="arrow-icon">
                  <ArrowIcon src={dropDown} alt="위화살표" open={arrowUp} />
                </div>
              </FirstBox>
            </h1>

            {dropdownOpen && (
              <DropDownBox ref={dropdownRef} onClick={handleDropdownBoxClick}>
                <CountBox>
                  <div className="column">
                    <Content>성인</Content>
                    <div className="description">만 13세 이상</div>
                  </div>
                  <div className="gap">
                    <MinusButton onClick={() => decreaseCount('adult')}>
                      <img src={minusIcon} alt="Minus" />
                    </MinusButton>
                    <Count>{adultCount}</Count>
                    <PlusButton onClick={() => increaseCount('adult')}>
                      <img src={plusIcon} alt="Plus" />
                    </PlusButton>
                  </div>
                </CountBox>

                <CountBox disabled={!kidszone}>
                  <div className="column">
                    <Content style={{ color: kidszone ? 'black' : '#dbdbdb' }}>
                      어린이
                    </Content>
                    <div
                      className="description"
                      style={{ color: kidszone ? 'black' : '#dbdbdb' }}
                    >
                      만 2~12 세
                    </div>
                  </div>
                  <div className="gap">
                    <MinusButton
                      onClick={() => handleCountChange('child', 'decrease')}
                      disabled={!kidszone}
                    >
                      <img src={minusIcon} alt="Minus" />
                    </MinusButton>
                    <Count style={{ color: kidszone ? 'black' : '#dbdbdb' }}>
                      {childCount}
                    </Count>
                    <PlusButton
                      onClick={() => handleCountChange('child', 'increase')}
                      disabled={!kidszone}
                    >
                      <img src={plusIcon} alt="Plus" />
                    </PlusButton>
                  </div>
                </CountBox>

                <CountBox>
                  <div className="column">
                    <Content style={{ color: kidszone ? 'black' : '#dbdbdb' }}>
                      유아
                    </Content>
                    <div
                      className="description"
                      style={{ color: kidszone ? 'black' : '#dbdbdb' }}
                    >
                      만 2세미만
                    </div>
                  </div>
                  <div className="gap">
                    <MinusButton
                      onClick={() => handleCountChange('baby', 'decrease')}
                    >
                      <img src={minusIcon} alt="Minus" />
                    </MinusButton>
                    <Count style={{ color: kidszone ? 'black' : '#dbdbdb' }}>
                      {babyCount}
                    </Count>
                    <PlusButton
                      onClick={() => handleCountChange('baby', 'increase')}
                    >
                      <img src={plusIcon} alt="Plus" />
                    </PlusButton>
                  </div>
                </CountBox>

                <CountBox>
                  <Content style={{ color: withpets ? 'black' : '#dbdbdb' }}>
                    반려동물
                  </Content>
                  <div className="gap">
                    <MinusButton
                      onClick={() => handleCountChange('pet', 'decrease')}
                    >
                      <img src={minusIcon} alt="Minus" />
                    </MinusButton>
                    <Count style={{ color: withpets ? 'black' : '#dbdbdb' }}>
                      {petCount}
                    </Count>
                    <PlusButton
                      onClick={() => handleCountChange('pet', 'increase')}
                    >
                      <img src={plusIcon} alt="Plus" />
                    </PlusButton>
                  </div>
                </CountBox>
              </DropDownBox>
            )}
          </ContentBox>
        </Row>
        <Row last onClick={scrollToViewMap}>
          <ContentBox border>
            <h1>
              <Label>선택 존</Label>

              <Content>
                {selectedZoneNames.length > 0 ? (
                  selectedZoneNames.join(', ')
                ) : (
                  <span>눌러서 선택하기</span>
                )}
              </Content>
            </h1>
          </ContentBox>
        </Row>
      </Box>
      <Tooltip>
        {(!startDay || !endDay) && showTooltip && (
          <PayCondition>날짜를 선택해주세요.</PayCondition>
        )}
        {startDay && endDay && !selectedZones.length && showTooltip && (
          <PayCondition>존을 선택해주세요.</PayCondition>
        )}
        {tooltipCondition && showTooltip && (
          <PayCondition>선택된 인원이 수용 인원보다 많습니다.</PayCondition>
        )}
      </Tooltip>
      <NewBox onClick={handleReservation}>예약하기</NewBox>
      <PriceInfo>
        <TotalAmountItem>
          <TotalAmountItemLabel>총 합계</TotalAmountItemLabel>
          {showModal && <NeedLoginModal onClose={closeModal} />}
          <TotalAmountItemValue>
            ₩{withOutFeePrice.toLocaleString('ko-KR')}
          </TotalAmountItemValue>
        </TotalAmountItem>
      </PriceInfo>
    </Container>
  );
};

export default RemoteCon;

const Container = styled.div`
  width: 323px;
  height: 518px;
  border: 1px solid ${theme.borderGrey};
  border-radius: 5px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  background-color: white;
  z-index: 999;
`;

const Title = styled.div`
  ${flexSort('space-between', 'center')}
`;

const Price = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

const Rating = styled.div`
  ${flexSort('space-between', 'flex-end')}
  ${fontMix(12, theme.mainBlack)}
  gap: 10px;
  img {
    width: 12px;
    height: 12px;
  }
`;

const ReviewCount = styled.div``;

const Description = styled.span`
  ${fontMix(12, theme.deepGrey)};
`;

const Box = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  margin-top: 40px;
  border: 1px solid ${theme.borderGrey};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & :hover {
    cursor: pointer;
  }
`;
const NewBox = styled.button`
  color: #fefefe;
  background-color: #252525;
  width: 100%;
  height: 40px;
  margin-top: 16px;
  border-radius: 10px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  z-index: 999;

  &:hover {
    cursor: pointer;
  }
`;

const ContentBox = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  gap: 5px;

  border-right: ${props =>
    props.border ? `1px solid ${theme.borderGrey}` : 'none'};
  img {
    width: 30px;
    height: 30px;
  }
  h1 {
    padding: 0 10px;
  }
`;
const ArrowIcon = styled.img`
  width: 12px;
  height: 12px;
  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const FirstBox = styled.div`
  ${flexSort('space-between', 'center')}
  .arrow-icon {
    display: flex;
    align-items: center;
  }
`;
const DropDownBox = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 12px;
  gap: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  z-index: 900;
  img {
    width: 12px;
    height: 12px;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33.33%;
  border-bottom: ${props =>
    props.last ? 'none' : `1px solid ${theme.borderGrey}`};
  &:last-child ${ContentBox} {
    border-right: none;
  }
`;

const Label = styled.span`
  ${fontMix(10, theme.mainBlack)}
  font-weight: bold;
`;

const Content = styled.span`
  ${fontMix(14, theme.lightGrey)}
  ${flexSort('space-between', 'center')}
  white-space: pre-line;
  margin-top: 4px;
`;

const CountBox = styled.div`
  ${flexSort('space-between', 'center')}
  position: relative;
  width: 100%;
  height: 50px;
  .gap {
    ${flexSort('space-between', 'center')}

    width: 70px;
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .description {
    font-size: 12px;
  }
`;

const MinusButton = styled.button`
  ${flexSort('center', 'center')};
  ${boxSize(20, 20)};
  background-color: transparent;
  border: 1px solid ${theme.borderGrey};
  border-radius: 50%;
  cursor: pointer;
`;

const PlusButton = styled.button`
  ${flexSort('center', 'center')};
  ${boxSize(20, 20)};
  background-color: transparent;
  cursor: pointer;
  border: 1px solid ${theme.borderGrey};
  border-radius: 50%;
`;

const Count = styled.span`
  font-size: 14px;
  font-weight: bold;
  width: 20px;
  text-align: center;
`;
const Tooltip = styled.div`
  height: 20px;
`;
const PayCondition = styled.div`
  color: red;
  padding: 8px;
  border-radius: 4px;
  font-size: 12px;
  z-index: 800;
`;
const PriceInfo = styled.div`
  margin-top: 40px;
`;

const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TotalAmountItem = styled.div`
  ${flexSort('space-between', 'center')}
  margin-top: 20px;
  border-top: 1px solid ${theme.borderGrey};
  padding-top: 20px;
`;

const PriceLabel = styled.span`
  ${fontMix(14, theme.middleGrey)};
`;

const PriceValue = styled.span`
  ${fontMix(12, theme.deepGrey)};
`;

const TotalAmountItemLabel = styled.div`
  font-weight: bold;
`;

const TotalAmountItemValue = styled(PriceValue)`
  ${fontMix(21)};
  font-weight: bold;
`;
