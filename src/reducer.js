import {
  SET_PRODUCT_DATA,
  SET_ZONE_DATA,
  SET_START_DAY,
  SET_END_DAY,
  SET_REVIEW_DATA,
  ADD_SELECTED_ZONE,
  REMOVE_SELECTED_ZONE,
  CLEAR_SELECTED_ZONES,
  SET_ADULT_COUNT,
  SET_BABY_COUNT,
  SET_PET_COUNT,
  SET_CHILD_COUNT,
  SET_TOTAL_PRICE,
} from './actions';
const initialState = {
  productData: {
    message: 'SUCCESS',
    data: [
      {
        campId: 1,
        campName: '서울 팔당 캠핑장',
        address: '서울 강동구 팔당동 1-23',
        pictures: 'picture 1,picture 2,picture 3,picture 4',
        price: '50000.00',
        description: '아름다운 자연환경과 깨끗한 공기가 특징입니다.',
        thumbnail:
          'https://github.com/Geun9/CVG-project/blob/main/image/camping1.jpg?raw=true',
        amenities: '반려동물,샤워장,주차장,취사장,키즈존',
        theme: '산',
        region: '수도권',
      },
    ],
  },
  startDay: 'Wed Jun 21 2023 00:09:32 GMT+0900 (한국 표준시)',
  endDay: 'Mon Jun 26 2023 00:09:32 GMT+0900 (한국 표준시)',
  zoneData: [],
  reviewData: [],
  selectedZones: [
    {
      campId: 1,
      zoneName: 'A1',
      maxPeople: '2',
      coordinates: {
        x1: 60,
        x2: 60,
        x3: 113,
        x4: 113,
        y1: 70,
        y2: 138,
        y3: 138,
        y4: 70,
      },
      campingZoneId: 1,
      additionalPrice: 30000,
      size: '7x9',
    },
    {
      campId: 1,
      zoneName: 'A2',
      maxPeople: '4',
      coordinates: {
        x1: 60,
        x2: 60,
        x3: 113,
        x4: 113,
        y1: 70,
        y2: 138,
        y3: 138,
        y4: 70,
      },
      campingZoneId: 2,
      additionalPrice: 50000,
      size: '7x9',
    },
  ],
  adultCount: 4,
  babyCount: 0,
  petCount: 0,
  childCount: 1,
  totalPrice: 80000,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ZONE_DATA:
      return {
        ...state,
        zoneData: action.payload,
      };
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    case ADD_SELECTED_ZONE:
      return {
        ...state,
        selectedZones: [...state.selectedZones, action.payload],
      };
    case REMOVE_SELECTED_ZONE:
      return {
        ...state,
        selectedZones: state.selectedZones.filter(
          zone => zone.campingZoneId !== action.payload
        ),
      };
    case CLEAR_SELECTED_ZONES:
      return {
        ...state,
        selectedZones: [],
      };
    case SET_PRODUCT_DATA:
      return {
        ...state,
        productData: action.payload,
      };
    case SET_START_DAY:
      return {
        ...state,
        startDay: action.payload,
      };
    case SET_END_DAY:
      return {
        ...state,
        endDay: action.payload,
      };
    case SET_REVIEW_DATA:
      return {
        ...state,
        reviewData: action.payload,
      };
    case SET_ADULT_COUNT:
      return { ...state, adultCount: action.count };
    case SET_BABY_COUNT:
      return { ...state, babyCount: action.count };
    case SET_PET_COUNT:
      return { ...state, petCount: action.count };
    case SET_CHILD_COUNT:
      return { ...state, childCount: action.count };
    default:
      return state;
  }
};
export default reducer;
