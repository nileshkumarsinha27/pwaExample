import moment from 'moment';

const isDataExists = (arr, num = 0) => arr && arr.length > num;
const checkEmptyString = (str) => str === '';
const convertNum = (any) => Number(any);
const getDateInFormat = (date, formatSent = 'DD/MM/YYYY') =>
  moment(date).format(formatSent);

export { isDataExists, checkEmptyString, convertNum, getDateInFormat };
