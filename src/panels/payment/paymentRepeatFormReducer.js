import {
  SET_FREQ_TYPE,
  SET_FREQ_VALUE,

  SET_QTY_TYPE,
  SET_QTY_VALUE,

  SET_TIME
} from './paymentRepeatFormActionTypes';

const initialState = {
  freqType: 'weekly',
  freqValue: 1,

  qtyType: 'unlimited',
  qtyValue: 0,

  time: '00:00',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FREQ_TYPE:
      return {
        ...state,
        freqType: payload,
        freqValue: 1,
      };
    case SET_FREQ_VALUE:
      return {
        ...state,
        freqValue: payload
      };
    case SET_QTY_TYPE:
      return {
        ...state,
        qtyType: payload,
        qtyValue: 0,
      };
    case SET_QTY_VALUE:
      return {
        ...state,
        qtyValue: payload
      };
    case SET_TIME:
      return {
        ...state,
        time: payload,
      };
    default:
      return state;
  }
};
