export const getDateAsString = (date: string | Date): string => {
  if (typeof date !== 'string') {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
  }

  return date;
};

export const getDateAsObject = (date: string | Date): Date => {
  if (typeof date === 'string') {
    const [year, month, day] = date.split(/\D/);
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  return date;
};
