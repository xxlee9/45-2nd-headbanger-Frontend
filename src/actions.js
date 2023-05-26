//actions.js

export const SET_PRODUCT_DATA = 'SET_PRODUCT_DATA';
export const SET_DATES = 'SET_DATES';
export const SET_ZONE_DATA = 'SET_ZONE_DATA';
export const SET_REVIEW_DATA = 'SET_REVIEW_DATA';
export const ADD_SELECTED_ZONE = 'ADD_SELECTED_ZONE';
export const REMOVE_SELECTED_ZONE = 'REMOVE_SELECTED_ZONE';

export const setProductData = data => {
  return {
    type: SET_PRODUCT_DATA,
    payload: data,
  };
};
export const setZoneData = data => {
  return {
    type: SET_ZONE_DATA,
    payload: data,
  };
};
export const setDates = (startDay, endDay) => ({
  type: SET_DATES,
  payload: { startDay, endDay },
});
export const setReviewData = data => {
  return {
    type: SET_REVIEW_DATA,
    payload: data,
  };
};
export const addSelectedZone = zone => ({
  type: ADD_SELECTED_ZONE,
  payload: zone,
});

export const removeSelectedZone = zoneId => ({
  type: REMOVE_SELECTED_ZONE,
  payload: zoneId,
});
