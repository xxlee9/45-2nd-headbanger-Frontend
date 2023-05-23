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
  productData: null,
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
