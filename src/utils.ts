export const getDateAsString = (date: string | Date): string => {
  if (typeof date !== 'string') {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
  }

  return date;
};

export const getDateAsObject = (date: string | Date): Date => {
  return typeof date === 'string' ? new Date(date) : date;
};
