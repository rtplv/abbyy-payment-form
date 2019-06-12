import {
  SET_FREQ_TYPE,
  SET_FREQ_VALUE,

  SET_QTY_TYPE,
  SET_QTY_VALUE,

  SET_TIME
} from './paymentRepeatFormActionTypes';


export const handleSetFreqType = freqType => ({
  type: SET_FREQ_TYPE,
  payload: freqType,
});
export const handleSetFreqValue = freqValue => ({
  type: SET_FREQ_VALUE,
  payload: freqValue,
});

export const handleSetQtyType = qtyType => ({
  type: SET_QTY_TYPE,
  payload: qtyType,
});
export const handleSetQtyValue = qtyValue => ({
  type: SET_QTY_VALUE,
  payload: qtyValue,
});

export const handleSetTime = time => ({
  type: SET_TIME,
  payload: time,
});
