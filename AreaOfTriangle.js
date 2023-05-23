// write a JS program to get the area of a triangle given three sides
// The area of a triangle when given three sides is equal to 
//  the square root of s(s-a)(s-b)(s-c), where s is the semi perimater of a triangle, calculated by
//  (a+b+c)/2

function AreaOfTriangle(a,b,c){
  const semiPerimater = (a+b+c)/2;
  return Math.sqrt((semiPerimater-a)*(semiPerimater-b)*(semiPerimater-c));
}

console.log(AreaOfTriangle(4,3,6));