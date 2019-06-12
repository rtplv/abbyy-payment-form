import {
  SET_FREQ_TYPE,
  SET_FREQ_WEEK_VALUE,
  SET_FREQ_MONTH_VALUE,

  SET_QTY_TYPE,
  SET_QTY_VALUE,
  SET_QTY_BY_DATE_VALUE,

  SET_TIME
} from './paymentRepeatFormActionTypes';


export const handleSetFreqType = freqType => ({
  type: SET_FREQ_TYPE,
  payload: freqType,
});
export const handleSetFreqWeekValue = value => ({
  type: SET_FREQ_WEEK_VALUE,
  payload: value,
});
export const handleSetFreqMonthValue = value => ({
  type: SET_FREQ_MONTH_VALUE,
  payload: value,
});

export const handleSetQtyType = qtyType => ({
  type: SET_QTY_TYPE,
  payload: qtyType,
});
export const handleSetQtyValue = qtyValue => ({
  type: SET_QTY_VALUE,
  payload: qtyValue,
});
export const handleSetQtyByDateValue = qtyValue => ({
  type: SET_QTY_BY_DATE_VALUE,
  payload: qtyValue,
});

export const handleSetTime = time => ({
  type: SET_TIME,
  payload: time,
});
