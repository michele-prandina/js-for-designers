/*

  Object Oriented javascript

*/
console.log('');
console.log('');
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('-----------   Object Oriented JS   ---------');

/*

CLASSICAL VS PROTOTYPAL INHERITANCE

INHERITANCE
One object get access to the properties and methods
of another object.

CLASSICAL INHERITANCE is a classical way of
sharing methods and properties.
- it's verbose.
- have a lot of keywords (friend, private, protected , etc..)

PROTOTYPAL INHERITANCE is a way of sharing methods
and properties via
- Simpler
- Flexible
- Extensible
- Easy to understand

-----

UNDERSTANDING THE PROTOTYPE
The prototype
Let's say we have an OBJ sitting in memory.
This OBJ has properties, which we can access through
the dot notation.

if we call obj.prop1 the interpreter goes to see on the
address reference of that property, what value sit there.

JS interpreter add hidden property that we don't see.

ALL OBJECTS have an hidden property called PROTO. AND IS ANOTHER OBJECT.

the object proto is prototype. It has properties and methods.

Let's say proto has a property 'prop2'

If we call obj.prop2, that property will not be find, because
there is no such property inside the obj Object. So, next will go
to the proto object and it sees it's there.

proto can have another proto obj.

Obj
  prop1
  proto
    prop2
    proto
      prop3
      proto
        prop4

This ladder is called "Prototype Chain". Automatically, if we call
one of the props, the interpreter will look up to the prototype chain
till it find the property..

*/

var person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}

var john = {
  firstName: 'John',
  lastName: 'Doe',
}

/*

REFLECTION AND EXTEND


REFLECTION
An object can look at itself, listing and changing
its properties and methods.


*/


/*

FUNCTION CONSTRUCTOR and NEW KEYWORD
var something = new Foo();

With the new operator (left to right), this happen:
1- an empty Object is created.
2- the constructor function Foo is called with specified arguments (if provided)
  and 'this' is bounded to the new created object.
3- The object returned by the constructor become the result of the whole new
  expression.

Using the keyword NEW, changes the position of which 'this' Keyword points:
'this' will point to the new empty object just created.

Everything I added with the dot.something = 'value' inside my construcotr, will
point to the new Object.

*/

// Defining a function constructor
function Person(firstName, lastName) {
  this.firstName = firstName || 'John';
  this.lastName = lastName || 'Doe';

  // Donn't return anything, so the JS engine can
  // return the object!
}

// How to add a method to the prototype chain of the object
Person.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
}

// We use new to create a new Object from Person.
// The function isn't just created with invoking,
// but prepending the new keywork
var mike = new Person('Mike', 'Prands'); // The function is invoked and return the object.
console.log(mike);

/*

Putting the new keyword in front of a function,
make the 'this' keyword point to the new object that is created.

And if you don't return anything from that function,
will return that empty object with all the properties and methods defined.

--------------------

FUNCTION CONSTRUCTOR
A normal function that is used to construct (create) Objects.
The 'this' variable points a new empty object, and that object is returned from
the function automaticall and the fn finishes execution.

---------------------

.PROTOTYPE
How do we set a prototype?

When we use a function constructor, it already set it up the prototype for us.

Every function, which is an object, has a property "prototype". It's used and accessible ONLY
by the 'new' operator.

The prototype property of the function IS NOT the prototype of the function.

It's the prototype OF ANY OBJECT created if you are using the function as a function
constructor.

Person.prototype

when we call the 'new' keyword
var mike = new Person('Mike', 'Prands');
It creates a new empty object and it sets the prototype of that object
to the prototype property you just called.

So, not only this new mike object has all the properties attached to the constructor
but also all the methods defined with

Person.prototype.method = foo();

this .prototype property of all function is where the prototype chain
points for any objects created using that function as a constructor.


-------------------

In a good looking JS code, you set the properties in the constructor,
the methods in the prototype chain.

Aside: you can even set the methods inside the constructor, BUT what can happen?
Each method, that is an object (and objects take uo memory space), are created
brand new for each instance created with the 'new' operator.

Imagine having the constructor setting up 2000 instance of the methods... Ugly
performances.

INSTEAD, once set up whit prototype once, there it sit, only 1 time, not more space created
for each instance.


-------------------

- CONCEPTUAL ASIDE
BUILT IN FUNCTION CONSTRUCTOR
when we use something like:

let a = new Number(6);
let a = new Array();
let a = new Object();
let a = new String('hola);

we are just using the constructor functions for creating what?

AN OBJECT!

let a = new Number(6); // Object {[[primitiveValue]]: 6 }

which inside have the primitiveValue set to what we set inside parenthesys.

we can even access to his prototypes!

Number.prototype.[toFixed,toPrecision, etc...]

a.toFixed() // is a method attached to the prototype chain of the Number constructor

Using the new operator so, doesn't create primitives. It just creates objects who
contains a key primitiveValue which contains the value.



------------ PROTOTYPAL INHERITANCE --------------

BEST IS NEVER USE built in function constructor.
Because they return Objects, there will be problems whith coercion.


------------ OBJECT CREATE AND PURE PROTOTYPAL INHERITANCE --------------

There is a different way to use prototypal inheritance, different than mimic
another constructor definition of other program languages.

It's called pure prototypal inheritance, and it's done in this way:

*/

// First we define our object with the proprs and methods.
let people = {
  firstName: 'Default',
  lastName: 'Default',

  // Yes I can use a method directly here.
  greet: function() {
    return 'Hi ' + this.firstName + ' ' + this.lastName;
  }
}

console.log(people);

// Second, we use the Object.create() to initialize an empty object
let mySelf = Object.create(people);

// We can construct our props passing them directly with .dot notation,
// in this case we are overwriting it.
// The 'this' object will now point to the mySelf object.
mySelf.firstName = 'Lorenzo';
mySelf.lastName = 'Zen';
console.log(mySelf);
console.log(mySelf.greet());

/*

ES6 and CLASSES
Has a new concept to create constructor functions and objects and set prototypes.

A class define what an object is, what's his method and properties will be.

A Javascript class is built like so:

*/

// class + className
class Human {
  // The constructor with parameters
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Here goes the methods.
  greet() {
    // Return of the method.
    return 'Hello ' + this.firstName + ' ' + this.lastName;
  }
}
console.log(Human);

let humanoid = new Human('Mike', 'Zen');
console.log(humanoid.greet());
console.log(humanoid);


// How do you set prototype then, using this class keyword?
// using extend!
class AnotherHuman extends Human { // extends set the Prototype __proto__ to any of my objects created with this class
  constructor(firstName, lastName) {
    // super will call the constructor of the object that is my prototype
    super(firstName, lastName);
  }

  // I can override my greet function with this new one.
  greet() {
    return 'Yo ' + this.firstName + ' ' + this.lastName;
  }
}

var otherHuman = new AnotherHuman('Jane', 'Doe');
console.log(otherHuman);
console.log(otherHuman.greet());

