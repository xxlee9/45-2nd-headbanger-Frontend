export const SET_PRODUCT_DATA = 'SET_PRODUCT_DATA';
export const SET_START_DAY = 'SET_START_day';
export const SET_END_DAY = 'SET_END_day';
export const SET_ZONE_DATA = 'SET_ZONE_DATA';
export const SET_REVIEW_DATA = 'SET_REVIEW_DATA';
export const ADD_SELECTED_ZONE = 'ADD_SELECTED_ZONE';
export const REMOVE_SELECTED_ZONE = 'REMOVE_SELECTED_ZONE';
export const CLEAR_SELECTED_ZONES = 'CLEAR_SELECTED_ZONES';
export const SET_ADULT_COUNT = 'SET_ADULT_COUNT';
export const SET_BABY_COUNT = 'SET_BABY_COUNT';
export const SET_PET_COUNT = 'SET_PET_COUNT';
export const SET_CHILD_COUNT = 'SET_CHILD_COUNT';
export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
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
export const setStartDay = startday => ({
  type: SET_START_DAY,
  payload: startday,
});
export const setEndDay = endday => ({
  type: SET_END_DAY,
  payload: endday,
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
export const removeSelectedZone = campingZoneId => ({
  type: REMOVE_SELECTED_ZONE,
  payload: campingZoneId,
});
export const clearSelectedZones = () => ({
  type: CLEAR_SELECTED_ZONES,
});
export function setAdultCount(count) {
  return { type: SET_ADULT_COUNT, count };
}
export function setBabyCount(count) {
  return { type: SET_BABY_COUNT, count };
}
export function setPetCount(count) {
  return { type: SET_PET_COUNT, count };
}
export function setChildCount(count) {
  return { type: SET_CHILD_COUNT, count };
}
export const setTotalPrice = price => {
  return {
    type: SET_TOTAL_PRICE,
    payload: price,
  };
};
