//  **************Task 1*************** //

// 1 is the more nearest solution but still has some errors
// 2 is wrong
// 3 wrong syntaxt and logic error
//4 wrong syntax error and logic error
// factory function with Prototypal Inheritance
let Person = function (firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
};

// error was here, initialization was missing
let person = new Person("john", "doe", "34");
console.log(person);
// we have new object with {firstname="john", lastname="doe", age="34"}
// we are creating an function via __proto__ chain.
Person.prototype.sayHello = function () {
  // = is the syntaxt error we need to use + for concatenation
  alert("hello " + this.firstname + " " + this.lastname);
};

// person object has now this function in prototype chain
person.sayHello();
