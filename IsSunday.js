//  Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

const isDayASunday = () =>{
  const yearBeginning = 2014;
  const yearEnding = 2050;
  for(let i = yearBeginning; i < yearEnding; i++){
    const dateToCheck = new Date(i, 0, 1);
    if(dateToCheck.getDay() === 0){
      console.log(`Sunday, January first between 2014 and 2050 falls occurs in ${i}}`)
    }
  }
}

console.log(isDayASunday());
 

