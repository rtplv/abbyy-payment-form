import { createSelector } from 'reselect';
import {
    getMonthsDifferenceBetweenDates,
    getWeeksDifferenceBetweenDates,
    getDaysDifferenceBetweenDates,
    increaseDateByMonth,
    setDayOfNextWeek,
    getDateLocaleStringByDate,
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
    let dates = [];
    let quantity = 0;

    // get quantity by selected qtyType
    switch(qtyType) {
        case 'unlimited':
            quantity = 7;
            break;
        case 'byQty':
            quantity = qtyValue;
            break;
        case 'byDate':
            const currentDate = new Date();
            const targetDate = new Date(qtyByDateValue);

            quantity = freqType === 'monthly' ?
              Math.floor(getDaysDifferenceBetweenDates(currentDate, targetDate) / 31) :
              getWeeksDifferenceBetweenDates(currentDate, targetDate);
            break;
    }

    let currentDate = new Date();

    for(let i = 0; i < quantity; i++) {
        let dateStr = '';

        switch (freqType) {
            case 'weekly':
                currentDate = setDayOfNextWeek(currentDate, freqWeekValue);
                dateStr += getDateLocaleStringByDate(currentDate);
                break;
            case 'monthly':
                currentDate = increaseDateByMonth(currentDate, freqMonthValue);
                dateStr += getDateLocaleStringByDate(currentDate);
                break;
        }

        if (i === 0) dateStr += ` ${timeValue}`;

        dates.push(dateStr);
    }

    return dates;
  },
);
