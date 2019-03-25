/*

  Invocations

*/
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('-------------  INVOCATIONS  ----------------');
// Literally mean, invoke something. In JS you invoke functions using ()

// let's declare a fn:
function b() {
}
function a() {
  b();
}
a();

// What happens during the execution?
/*

1- Global execution context (created and code i executed)
2- the window object is created
3- the b and a fn will be added on the window obj
4- the interpter will go line by line executing the code

... what happen when it get to:
a() ???

A new execution context is created.

This new execution context is placed on the "execution stack", one on top of another.
*/

/*

So, when the interpreter start to read this

function b() {
}
function a() {
  b();
}
a();

this happens:

1- Global execution context is created and executed
2- at line 15 another execution context is created and executed
3- Executing the context of a(), that is a fn, the interpreter see that at line 13 another function is evoked.
4- Another execution context is created and executed for b()

EVERY FUNCTION, IN JS creates and executes a NEW EXECUTION CONTEXT

The stak is formed like so:

1- b() execution context
2- a() execution context
3- Global Execution Context

and the interpreter will run them in order: 1, 2 and 3


*/

// If we have something like this:
function c() {
  d();
  var e = 'I am e inside c()';
  console.log('c() => e:',e);
}

function d() {
  var f = 'I am f inside d()';
  console.log('d() => f:',f);
}

c();
var f = 'I am f on the global ex context';
console.log('Global ex context f:', f);

// The execution stack will look like this:
/*

line 74, c() is invoked.
we have:
1- c() execution context
2- Global Execution context

line 66, inside the fn c() we will find d(), as the first line of the function.
so, the stak will change like that:
1- d() execution context
2- c() execution context
3- Global Execution Context

And that's it.

Because there are not fn anymore, the engine can execute line by line and resolve every EC.

Line 71, var f will be added to the space and initialized as undefined
[resolved] 1- d() execution context
2- c() execution context
3- Global Execution Context

Line 67, var e will be initialized as undefined.
[resolved] 1- d() execution context
[resolved] 2- c() execution context
3- Global Execution Context

Line 75.
[resolved] 1- d() execution context
[resolved] 2- c() execution context
[resolved] 3- Global Execution Context

EVEN IF the variable f is declared 2 times, you need to consider where the variables is declared.

FUNCTIONS LIVES WHERE ARE DECLARED.

*/

function g() {
  console.log(myVar);
}

function h() {
  var myVar = 2;
  g();
}

var myVar = 1;
h();