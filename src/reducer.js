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
  SET_SELECTED_LOCATION,
} from './actions';

const initialState = {
  productData: {
    data: {
      campId: 4,
      campName: '서울 강서 캠핑장',
      address: '서울 강서구 등촌동 23-45',
      pictures: [
        'https://a0.muscache.com/im/pictures/70abe21c-8f05-488c-a360-a45d1edc4be0.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52590111/original/056362de-3963-400d-a36d-e75fb8edfe26.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-52590111/original/a1ac8271-8961-4dd6-8ddf-c9700633452d.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/6d73af6c-45fe-4fff-866b-e594ebe129fa.jpg?im_w=720',
      ],
      price: '70000.00',
      description:
        '숙소 설명/n안녕하세요. 저희는 다양한 휴식 공간을 연구하고 제공하는 Onda입니다. 이 곳에서 머무르실 모든 분들께서 편안하고 행복한 시간을 보내시길 바랍니다./n[숙소 소개]/n넓고 푸른 바다를 바라보며 수영을 즐기고 온전한 휴식을 취할 수 있는 숙소입니다./n/n[객실 유형]/n분리형(더블침대2)+화장실1+주방+거실* 입실하시는 인원을 정확히 설정하여 예약하셨다면 인원에 맞게 침구류를 제공해드립니다./n숙소/n※ 1박 1회에 2시간에 한해 객실 온수풀 물을 무료로 데워드립니다. 이용을 원하실 경우 숙소를 통해 원하시는 이용 시간을 미리 전달 부탁드립니다./n/n[추가 인원 비용]/n- 유아 10,000원, 아동 30,000원, 성인 50,000원 (1인당 인원 추가비용)/n/n[바베큐]',
      thumbnail:
        'https://a0.muscache.com/im/pictures/41068a30-eda7-48c2-8de8-1e7815fc71ee.jpg?im_w=1200',
      amenities: ['샤워장', '수영장', '주차장', '취사장', '반려동물'],
      theme: '바다',
      region: '수도권',
      checkIn: '16:00',
      checkOut: '12:00',
      latitude: '37.559876',
      longitude: '127.161234',
    },
  },
  startDay: new Date(),
  endDay: new Date(Date.now() + 24 * 60 * 60 * 1000),
  zoneData: [],
  reviewData: [],
  selectedZones: [],
  adultCount: 1,
  babyCount: 0,
  petCount: 0,
  childCount: 0,
  totalPrice: 0,
  selectedLocation: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_LOCATION':
      return {
        ...state,
        selectedLocation: action.payload,
      };
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
