//reducer.js

import {
  SET_PRODUCT_DATA,
  SET_ZONE_DATA,
  SET_DATES,
  SET_REVIEW_DATA,
  ADD_SELECTED_ZONE,
  REMOVE_SELECTED_ZONE,
} from './actions';

const initialState = {
  productData: null,
  dates: {
    startDay: new Date(),
    endDay: new Date(Date.now() + 24 * 60 * 60 * 1000),
  },
  zoneData: null,
  reviewData: null,
  selectedZones: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ZONE_DATA:
      return {
        ...state,
        zoneData: action.payload,
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
          zone => zone.id !== action.payload
        ),
      };
    case SET_PRODUCT_DATA:
      return {
        ...state,
        productData: action.payload,
      };
    case SET_DATES:
      return {
        ...state,
        startDay: action.payload.startDay,
        endDay: action.payload.endDay,
      };
    case SET_REVIEW_DATA:
      return {
        ...state,
        reviewData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
