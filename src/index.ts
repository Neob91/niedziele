import { commerceSundays } from './const';
import { getDateAsString, getDateAsObject } from './utils';

export const isCommerceAllowed = (date: string | Date): boolean => {
  if (!isDateSunday(date)) {
    throw new Error('date is not a Sunday');
  }

  return commerceSundays.indexOf(getDateAsString(date)) !== -1;
};

export const getNextSunday = (date: string | Date): string => {
  const dateObj = getDateAsObject(date);
  const newDateObj = new Date(dateObj.getTime());

  newDateObj.setDate(dateObj.getDate() + 7 - dateObj.getDay());
  return getDateAsString(newDateObj);
};

export const isDateSunday = (date: string | Date): boolean => {
  const dateObj = getDateAsObject(date);
  return dateObj.getDay() === 0;
};
