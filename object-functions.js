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