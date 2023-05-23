// Write a JavaScript program to display the current day and time in the following format. 
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const dayjs = require("dayjs");

function CurrentDayAndTime(){
  const day = dayjs().format('dddd');
  const time = dayjs().format('hh:mm:ss');

  return `The current day is: ${day} and the current time is: ${time} `
  
}

console.log(CurrentDayAndTime());