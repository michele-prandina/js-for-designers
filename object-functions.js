/*

  Objects and Functions
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

*/
console.log('');
console.log('');
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('-----------  Objects and Functions ---------');

/*

In JS objects and functions are related.

-----

OBJECTS and DOT notation
We already said that objects are collection of key and values, which values
can be other collections of other key and value.

Like other primitives, an Object can have:
1- a Primitive "Property"
2- Object Property
3- Function "Method" (called method if inside an object)

this is set in memory, and the object will have a space in PC memory,
and it will have a reference to methods and properties, as addresses.

*/

// let's use the new object syntax using the primitive Object
let person = new Object();
// accessing the properties and methods of the Object
// via Computed Member Access OPERATOR.
person['firstName'] = 'Mike'; // We set the property 'firstName' a value of 'Mike'
person['lastName'] = 'Prand'; // We set the property 'lastName' a value of 'Prand'

console.log(person); // console log the object
console.log(person['firstName']); // consolelog the object using the member access Operator []

// Instead of using the [] operator, the clearest and better way to accessing
// an object is via the dot notation, "."
console.log(person.lastName); // consolelog the object using the Member Access Operator .

// We can create an Object inside a value of an existing object:
person.address = new Object();
// Then add properties
person.address.street = 'Via Luini 7 Como';
person.address.city = 'Como';
person.address.state = 'ITA';
// let's see how the object is
console.log(person); // {firstName: "Mike", lastName: "Prand", address: {…}}
console.log(person.address); // {street: "Via Luini 7 Como", city: "Como", state: "ITA"}


/*

Objects and Objects literals
Because we have different way to do something, we can declare an object, a shorthand, called
object literal, to create an object

*/

let animal = {} // same as let dog = new Object();
console.log('Obj animal is:', animal); // log empty object

/*

Creating an object literal, I can easly insert properties and methods,
separating each pair with a comma

*/

// Let's add two properties
let dog = {
  breed: 'Bernese Mountain Dog',
  name: 'Giotto',
  ownerAddress: {
    city: 'Milano',
    street: 'Via Marcona Milano',
    state: 'ITA',
    ownerName: 'Fabi'
  }
};
console.log('Obj dog is equal to:', dog); // display object
// I can access the properties like before
console.log(dog.breed); // display breed
console.log(dog.name); // display name


/*

We just saw how it is a lot faster to declare a Literal Object
and adding all the property directly on the statement, instead using the new Object() method.

it's like creating an object on the fly

*/

// Create a function that let dog bark
function bark(doggo) {
  console.log(doggo.name + ' is barking: "BARK! BARK! BARK!"');
}
bark(dog); // Invoke function and passing the dog Object
bark({
  name: 'giottoCiotto',
  breed: 'labrador',
}); // You can even pass a new object created in the fn invocation


/*

We just saw how it is a lot faster to declare a Literal Object
and adding all the property directly on the statement, instead using the new Object() method.

it's like creating an object on the fly


------

FUNCTIONS ARE OBJECT
in javascript, functions ARE object.

We have the FIRST CLASS FUNCTIONS concept, which means that everything you
can do with other types you can do with functions. (Assign them to variables,
pass them around, create them on the fly etc).

Like an object, the function have (like a special object):
- Primitives
- Objects
- Other Function

A function have 2 properties:
- Name, the name of the function || Anonymous in case you don't set a name
- Code, is where the code is set.

The special thing about the code property is that it is invocable(). The code can be run,
and the execution context can be done, etc.

*/

//let's declare a function
function dogBark(){
  console.log('Bark!');
}
// like an object I can create a property of that function with dot notation
dogBark.breed = 'Corgy'; // I just had a property to a Function...
console.log(dogBark); // funny thing is that I only get the text of the function.
// different is when I try to log directly the property
console.log(dogBark.breed); // Corgy

/*

Let's split the function wrote just now. We can represent it like this

special_Object {
  name: 'dogBark',
  code: 'console.log('Bark!');'
}

if I call dogBreed(), then the invocable() code is run, and start to add
to the stack of context

*/

/*

EXPRESSIONs = RESOLVE IN A VALUE
STATEMENT = When code is executed, doesn't execute anything.

-----------

FUNCTIONs inside variables...

we can declare functions inside variables. how come?
variables, apart for primitives value, only address to a specific part in
memory of something.

In our case, if we set up a

let myAnonymousBark = function() {
  console.log('Bark!');
}

myAnonymousBark only refers to a specific address where the
function is saved.

so, each time we invoke myAnonymousBark(), the anonymous fn (that is a special object) is
invoked.

So, we point to the fn object and invokes the code property of it.

FUNCTION EXPRESSIONS ARE NOT HOISTED!


------------

FIRST CLASS FUNCTIONS
Remember, fn are objs... We can even pass fn as parameters:

doSomething(function(){
  console.log('hello');
}); // fn expressions

It's passed like an object.

How can I invoke the function passed as a parameter? Simple,
inside the doSomething will look like this:

function doSomething(myFn){
  myFn(): // Trough invocation!
}

---------------------

// By Value vs By Reference

Primitive Value
a var has an address where that value sit. Is allocated in memory.

if I say
var a = 1; // the a variable will reference the primitive number in memory
// and it will look something like 0x001 (the address in memory of the '1'value)

if I say
var b = a; // b will copy the primitive value and will have a different address
// like 0x002 (instead of 0x001)

They will sit to two different locations in memory, filled with
the same value.

this is called BY VALUE

-----------------------

If I have an Object,
when I set a variable equal to an object, it will use an address
with the memory spot where the obj sit.

es
var a = {} // it sits on 0x001 address

if I say
var b = a; // It will have the SAME address of a!
// in this case 0x001

Each variables will share the exactly same memory address,
referencing the same object!

this is called BY REFERENCE

----------------------

EXAMPLES:

*/

// By Value (primitives)
let alfa = 3;
let beta;

beta = alfa; // beta && alfa will be 3.
// When the = operator sees that alfa and beta are primitives,
// will create a new spot in memory for beta and it will copy the value
// 3

// After that if I change alfa, beta will be alwys 3.
alfa =2;

console.log(alfa); // log 2
console.log(beta); // log 3

// By Reference (All objects, including functions)
let gamma = {
  greeting: 'Hi'
};
let delta = gamma; // the = operator see that they will reference the same spot
// in memory/..

gamma.greeting = 'Hello'; // it mutates

console.log(gamma); // {greeting:'Hello'}
console.log(delta); // {greeting:'Hello'}
// gamma and delta are pointing to the same address in memory

// It can mutate even if passed as a parameter!
function changeGreeting(obj){
  obj.greeting = 'Hey!';
}

changeGreeting(delta);

console.log(gamma); // {greeting:'Hey'}
console.log(delta); // {greeting:'Hey'}


/*


-------------------------------------------------------


OBJECTS, FUNCTIONS, AND 'this'

When the code of a function is invoked,
1- a NEW EXECUTION CONTEXT is created. (vars environment, outer environment, etc...)
2- it gives us 'this' variable. THIS time will point to something else, depending on HOW
the function is called.

It's depend on where the fn is and how is called.

Let's see some scenarios:

*/

console.log('Obj this key created by the execution context;', this); // immediatly available on the global ex context

function logThisFn() {
  console.log('Function logThis: ', this); // this point to the same memory spot of the global ex context

  // I can create a variable attached to the global object
  this.myNewVariable = 'Hello';
}

let logThisVar = function() {
  console.log('Var Fn logThisVar: ', this); // this point to the same memory spot of the global ex context
}

logThisFn(); // this = window global object
// Every variables I attach to the this keyword that is a reference of the global object
// can be called without the . expression.
console.log('Log variable attached to this in Fn logThisFn():', myNewVariable); // Hello
logThisVar(); // this = window global object

// Ok, what about an OBJECT method?

let objThis = {
  name: 'The objThis object',
  log: function() {
    // To bypass the problem we saw at line 354, we can reference the obj this!
    // so 'self' will point to the same memory spot address as 'this'
    // and the function will access it like an outer environment
    let self = this;
    // We can change this with self everywhere inside the method, even inside
    // functions in my method

    self.name = 'Updated objThis object!';
    console.log('I was called inside method log, of objThis:', self);

    // One scenario that many feels like a bad bug:
    // If I reference a new fn inside this method:
    let setName = function(newName) {
      self.name = newName; // this points to the global object!!!
      // What can we do in this kind of scenario?
    };
    setName('Updated again! The objThis.')
    console.log('Log after setting newName from fn inside method:', self);
    // Nothing happened. Same this of before.
    // If you look to the global object, name is a variable!
    // It was refering to the global object!
  },
}

objThis.log(); // this is poting to: {name: "The objThis object", log: ƒ}

/*

When we use this inside a method attached to an Object,
this keyword point to the object itself




------------------------------------------------

ARGUMENTS:
the parameters you pass to a function.
Javascript gives you a keywork of the same name which contains them all.

so, during the execution context of the function, this specil key is created.


*/

function parametersBark(dogName, dogBreed, ...other) {
  console.log('parametersBark is barking:', arguments);
};

parametersBark('Chiwi', 'Chiwawa', 'hello', 'my dog is beautiful');


/*

IMMEDIATELY INVOKED FUNCTION EXPRESSION
(IIFE)S
Are functions that we can immediatly invoke.

// function statement
function fooStatement() {
  // do something
};
fooStatement();

// function expression
let fooExpression = function() {
  // do something
}; // using a fn on the fly, literally
fooExpression();

Because our fn have a code property, we can invoke on the fly!


*/
// using function statement
function fooStatement(bar) {
  // do something
  console.log('fooStatement log:', 'hello ' + bar);
};
fooStatement('Mike');

// using function expression
let fooExpression = function(bar) {
  // do something
  console.log('fooExpression log:', 'hello ' + bar);
};
fooExpression('Mike');

// using Immediately Invoked Function
let fooIife = function(bar) {
  return 'fooIife log: hello ' + bar;
}('Mike');
console.log(fooIife);

/*

Alone IIFEs and why to use them
IN js expressions are executed when the syntax parser get to the line

we can write something like:


3; // valid

"Hello'; // valid

function(){} // NOT valid. it's expecting a nem for that function

{ ... } // valid too

etc..

(); // Valid:

(3+4) // valid.. inside parentesis you only put expressions!

If we wrap our anonimous function inside (), we can trick the syntax parser
understanding to have
function(){}
like an expression sentence

*/

// Wrapping the expression inside my parenhtesys I can let the function sits there
// without doing nothing
let iifeeName = 'Mike';

(function(name){
  console.log('hello' + name);
}(iifeeName)); // if I invoke the expression, I can run it on the fly