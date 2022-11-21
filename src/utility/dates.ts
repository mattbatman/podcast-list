const monthNameMap: {
  [key: string]: string;
} = {
  '1': 'January',
  '2': 'February',
  '3': 'March',
  '4': 'April',
  '5': 'May',
  '6': 'June',
  '7': 'July',
  '8': 'August',
  '9': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
};

/*
 * formatDate takes a string expected to be in the form month/day/year and
 * returns a string in the format Month Day, Year.
 * */
function formatDate(sheetDate: string) {
  const [month, day, year] = sheetDate.split('/');
  const monthName = monthNameMap[month];

  return `${monthName} ${day}, ${year}`;
}

export { formatDate };
