export const SET_PRODUCT_DATA = 'SET_PRODUCT_DATA';
export const SET_DATES = 'SET_DATES';

export const setProductData = data => {
  return {
    type: SET_PRODUCT_DATA,
    payload: data,
  };
};

export const setDates = (startDay, endDay) => ({
  type: SET_DATES,
  payload: { startDay, endDay },
});
