import { SET_PRODUCT_DATA, SET_DATES } from './actions';

const initialState = {
  productData: null,
  dates: {
    startDay: new Date(),
    endDay: new Date(Date.now() + 24 * 60 * 60 * 1000),
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;
