export const getDateAsString = (date: string | Date): string => {
  return typeof date === 'string' ? date : date.toISOString().split('T')[0];
};

export const getDateAsObject = (date: string | Date): Date => {
  return typeof date === 'string' ? new Date(date) : date;
};
