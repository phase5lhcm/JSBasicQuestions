// Write a JavaScript program to calculate the days left before Christmas.

// since there is no count for one day using the Date object, we must calculate the amount of time in one day
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const today = new Date();
const christmas = new Date('December 25, 2023');
const diffDays = Math.round(Math.abs((today - christmas) / oneDay));

console.log(`There are ${diffDays} before Christmas`);