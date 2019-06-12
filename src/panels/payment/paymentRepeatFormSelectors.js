import { createSelector } from 'reselect';
import {
    getDatesDifferenceByMonth,
    increaseDateByMonth,
} from 'helpers/date';

const getFreqType = state => state.paymentRepeatForm.freqType;
const getFreqMonthValue = state => state.paymentRepeatForm.freqMonthValue;
const getFreqWeekValue = state => state.paymentRepeatForm.freqWeekValue;

const getQtyType = state => state.paymentRepeatForm.qtyType;
const getQtyValue = state => state.paymentRepeatForm.qtyValue;
const getQtyByDateValue = state => state.paymentRepeatForm.qtyByDateValue;

const getTimeValue = state => state.paymentRepeatForm.timeValue;

// Covert timestamp to compatible input date value
export const getFormattedDateValue = createSelector(
  getQtyByDateValue,
  timestamp => {
    const date = new Date(timestamp);

    const day = date.getDate();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  },
);

// Return range formatted dates
export const getDateIntervalRange = createSelector(
    getFreqType,
    getFreqMonthValue,
    getFreqWeekValue,
    getQtyType,
    getQtyValue,
    getQtyByDateValue,
    getTimeValue,
  (freqType, freqMonthValue, freqWeekValue, qtyType, qtyValue, qtyByDateValue, timeValue) => {
    const frequency = freqType === 'weekly' ? freqWeekValue : freqMonthValue;
    let dates = [];
    let quantity = 0;

    // get quantity by selected qtyType
    switch(qtyType) {
        case 'unlimited':
            quantity = 6;
            break;
        case 'byQty':
            quantity = qtyValue;
            break;
        case 'byDate':
            quantity = getDatesDifferenceByMonth(new Date(), new Date(qtyByDateValue));
            break;
    }

    console.log(quantity);
    console.log(quantity * frequency);


    return dates;
  },
);
