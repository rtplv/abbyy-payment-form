import { createSelector } from 'reselect';

const getQtyByDateValue = state => state.paymentRepeatForm.qtyByDateValue;

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
