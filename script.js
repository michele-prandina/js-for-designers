/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('Great to see you! Let\'s start to dive in. Go check out script.js');

// Global execution context
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('--------------------------------------------');

/*
  When the code is executed, globally, two things are created:
  1- a Global Object
  2- this
*/
console.log('I\'m going to start displaying the value of "this".');
console.log('this is', this);
console.log('You can see that it is the same Object accessibile via Window');
console.log('Window Object:', window);
console.log('You can see that the global object is window, created during the global execution context.');


/*

  THE EXECUTION CONTEXT: CREATION AND HOISTING

*/

// What do you expect to see when this context is called:
var a = 'Hello world A!';
function b() {
  console.log('Caled fn B!');
}

b();
console.log(a);
// Exactly what we espected. First the fn b will console log and after that occour console log a

// what if we switch the consolling?
d(); // it's ok to call it up here
console.log(c); // Not correct to call it right here,
                // because the variable is savet but not initialized.
                // there will be an automatic assignment of "Undefined"

var c = 'Hello world C!';
function d() {
  console.log('Caled fn D!');
}

// If we didn't declare the variable, we had get an error:
console.log(e); // e is not assigned, will get Uncaught ReferenceError, not defined
// Uncomment the line below to see what I mean
//var e = 'Hello world E!';

// Why is this happening?
// Javascript use the Hoisting, or "moving to the top" functions and variables.
// It setup memory space for variables and functions.
// Before your code begins to be executed line by line, JS engine set aside space for variables and fn
// So those fn and vars exist in memory when the code start to be executed line by line.

// Instead fns, setting up the space for vars is a little bit different:
// because the engine doesn't know what will be the value of that vars, it setup a placeholder,
// called 'undefined'.

// So, don't get cought up in the trap of hoisintg, declare var first, then access to them later.

// undefined is a special value, setup from javascript.
