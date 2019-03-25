/*

  Operators
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

*/
console.log('');
console.log('');
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('-------------   OPERATORS   ----------------');

// Generally, an operators take 2 parameters and return one.
let a = 3 + 4;
console.log('let a = 3 + 4; ', a);

/*

In javascript, there is no need to use a custom function to set an operator,
the js engine when it reads the '+' will set up a fn taking the 3 and 4 as parameters

the code wrote above let a = 3 + 4; is interpreted as:

function +(a,b) {
  return // add a,b
}

and used like:

let a = +(3,4);

the ability to not use a function to use operators it's called INFIX notation

*/

/*

PRECEDENCE
operator precedence, wich operator is calledd first if there is more than one in one line

HIGHER precedence wins



ASSOCIATIVITY
Which operator and in which order is called when fn have the same precedence.
Right to left or left to right?

*/

let b = 3 + 4 * 5; // The order is the same we studied in school. * has precedence.
console.log('let b = 3 + 4 * 5; ', b); // 23
console.log('');


// ASSOCIATIVITY
// What if we do something like this
let c = 2, d = 3, e = 4;
console.log('let c = 2, d = 3, e = 4;')

// because the = operator has an associativity right-to-left,
// then cascading the vars will start setting the value
// from e, then d and finally c.
c = d = e;
console.log('c = d = e;')

console.log('c: ', c); // 4
console.log('d: ', d); // 4
console.log('e: ', e); // 4