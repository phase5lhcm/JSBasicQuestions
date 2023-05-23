// write a JS program to get the current date
const dayjs = require('dayjs');

function GetCurrentDate(){
  const day = dayjs().get('day');
  const month = dayjs().get('month');
  const year = dayjs().get('year');

  return `${day}/${month}/${year}`;
}

console.log(GetCurrentDate());