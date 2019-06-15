import {
  SET_FREQ_TYPE,
  SET_FREQ_MONTH_VALUE,
  SET_FREQ_WEEK_VALUE,

  SET_QTY_TYPE,
  SET_QTY_VALUE,
  SET_QTY_BY_DATE_VALUE,

  SET_TIME
} from './paymentRepeatFormActionTypes';

const initialState = {
  freqType: 'weekly',
  freqMonthValue: 1,
  freqWeekValue: 0,

  qtyType: 'unlimited',
  qtyValue: 1,
  qtyByDateValue: Date.now(),

  timeValue: '00:00',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FREQ_TYPE:
      return {
        ...state,
        freqType: payload,
      };
    case SET_FREQ_MONTH_VALUE:
      return {
        ...state,
        freqMonthValue: payload
      };
    case SET_FREQ_WEEK_VALUE:
      return {
        ...state,
        freqWeekValue: payload
      };
    case SET_QTY_TYPE:
      return {
        ...state,
        qtyType: payload,
      };
    case SET_QTY_VALUE:
      return {
        ...state,
        qtyValue: payload
      };
    case SET_QTY_BY_DATE_VALUE:
      return {
        ...state,
        qtyByDateValue: payload
      };
    case SET_TIME:
      return {
        ...state,
        timeValue: payload,
      };
    default:
      return state;
  }
};
