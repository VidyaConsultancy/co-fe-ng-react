/**
 * data types 
 * primitive string number boolean null undefined NaN
 * collective array object set map weakmap 
 * boolean true false
 */
var str;
var num = 1.2;
var arr = [1, true, 'sa', [], {}, 1, 1, 1];
var arr1 = new Array()
arr[0] // bracket notation with array index
// object literal
var obj = {
  key1: 'value',
  "key2-hyphen": 'value',
  key3: 'value',
  key4: 'value',
}
var k = 'key1';
var key1value = obj.key1; // dot notation where key1 is a key from obj object
var key1val = obj[k]; // bracket notation where key1 is a key from obj object
var set = new Set()

/**
 * Keywords
 * var let const function class switch if else try catch finally break continue case default
 */

/**
 * identifier
 * - it should not be a keyword
 * - it could start with char or _ or $
 * - it could not start with number or any other special char
 * - A-Za-z0-9_$
 * - case sensitive
 */
var $va3v = 'hello'
var foo;
var Foo;
var FOO;

/**
 * camelCasing
 * PascalCasing
 * snake_casing
 */
var isActive;
var shouldProcessUserData;
class User { }
class EmployeeDetail { }
class PaymentMethod { }

/**
 * truthy true 'afad' 13 [] {}
 * falsy null undefined 0 '' false
 * Control statement
 */
if ('string') { }
if (true) { } else { }
if (true) { }
else if (true) { }
else { }
switch (str) {
  case 1:
    console.log('1')
    break;
  case 2:
    console.log('2')
    break;
  case 3:
    console.log('3')
    break;
  default:
    break;
}
// while(condition) {}
// do {} while(condition)
// for(init;condi;inc/dec) {}
// for(var key of iterator) {}
// for(var key in object) {object[key]}
if("10" == str) {
  console.log("10 = '10'");
}

if(num) {
  var a = num;
} else {
  var a = 10;
}

var a = num ? num : 10;
var b = num??10;
var kk = obj?.key1;

// hoisting
greet();
var sum = 0 + a;
// funFun();
// function declaration
function greet() {
  uemail = 'john.morris@mailinator.com';
  console.log('Hello world');
}
console.log(greet())
// function expression
var funFun = function () {
  var demoFun = 'Hola';
  console.log('Javascript is an awesome language');
}
// console.log(demoFun);
funFun();
var a = 10;
console.log(uname);
var uname = 'Arpit Jain';

// IIFE Immediately Invoked Function Expression
(function () {
  var uemail = 'john.morris@gmail.com'
  return uemail;
})()
// console.log(hey)
// var => function scoped
// let const => block scoped {}
const person = {name: 'John Morris', dept: 'Marketing'};
person.name = 'John Doe';
person.age = 24;
delete person.dept;
let personName = person.name;
personName = 'Jane Doe';
console.log(person, personName);

function Employee() {
  this.name = 'John Morris';
  this.department = 'Marketing';
  this.joinedDate = new Date();
  this.hobbies = ['Reading', 'Writing', 'Coding', 'Travelling'];
  console.log(this);
}

Employee.prototype.greet = function () {
  return `Hey, this is ${this.name}. I work in ${this.department}.
In my spare time I like doing ${this.hobbies.join(', ')}`
}

Employee.prototype.manipulateHobbies = function () {
  this.hobbies.forEach((hobby) => {
    console.log(`hi ${this.name} likes ${hobby}`);
  })
}

const Book = function() {
  console.log(this)
}
const e1 = new Employee();
const e2 = new Employee();
console.log(e1, e2);
Book();

const arrow1 = (a) => {return a};
const arrow2 = a => {return a};
const arrow3 = a => a;

const apple = `I can use a 'single' quote, "double" quote
and create a multi-line string easily.

Hi, this is ${uname} ${10 + 20} ${e1.joinedDate}`;
console.log(apple)

class PersonClass {
  constructor() {
    this.personName = 'Jane Doe';
    this.age = 30;
  }

  greet() { }

  introduce() { }
}

class EmployeeClass extends PersonClass {
  constructor() {
    super();
    this.name = 'John Morris';
    this.department = 'Marketing';
    this.joinedDate = new Date();
    this.hobbies = ['Reading', 'Writing', 'Coding', 'Travelling'];
  }

  greet() {}

  printHobbies() {}
}

console.log(typeof EmployeeClass, typeof Employee)

const ec1 = new EmployeeClass();
const ec2 = new EmployeeClass();
console.log(ec1, ec2);
