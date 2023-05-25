// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar

/**
 * Leap years are divisible by 4 except for
 *   years are years that are divisible by 100 and not divisible by 400
 */

function isLeapYear(year){
   // years divisible by 400 ARE leap years
   const isDivisibleByFourHundred = year % 400 === 0;

  // years divisible by 100 ARE leap years 
  const isDivisibleByOneHundred =   year % 100 === 0;

  // years divisible by four are leap years
  const isDivisibleByFour = year % 4 === 0;

  
  return isDivisibleByOneHundred ? isDivisibleByFourHundred : isDivisibleByFour;

}

console.log(isLeapYear(100));
