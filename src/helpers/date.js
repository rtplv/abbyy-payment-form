export const getDatesDifferenceByMonth = (d1, d2) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth() + 1;
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

export const increaseDateByWeek = (date, weekQty) => {
  return date.setMonth
};

export const increaseDateByMonth = (date, monthQty) => {
  return date.setMonth(date.getMonth() + monthQty);
};
