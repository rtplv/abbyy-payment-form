export const getMonthsDifferenceBetweenDates = (d1, d2) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth() + 1;
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};
export const getWeeksDifferenceBetweenDates = (d1, d2) =>
  Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));

export const getDaysDifferenceBetweenDates = (d1, d2) =>{
  const timeDiff = Math.abs(d1.getTime() - d2.getTime());
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

/**
 * Return locale string with check current year condition
 * @param date
 * @returns {string}
 */
export const getDateLocaleStringByDate = date => {
  const localeMonths = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
  const currentYear = new Date().getFullYear();

  const day = date.getDate();
  const monthIdx = date.getMonth();
  const year = date.getFullYear();

  let dateString = `${day} ${localeMonths[monthIdx]}`;

  if (currentYear !== date.getFullYear()) {
    dateString = dateString + ` ${year}`;
  }

  return dateString;
};

/**
 * Set day of next week
 * @param date
 * @param dayOfWeek
 * @return Date
 */
export const setDayOfNextWeek = (date, dayOfWeek) => {
  const distance = (dayOfWeek + 7 - date.getDay()) % 7;

  date.setDate(date.getDate() + distance + 1);

  return date;
};

export const increaseDateByMonth = (date, monthQty) => {
  date.setMonth(date.getMonth() + monthQty);

  return date;
};

