"use strict";
/**
 * string
 * number
 * boolean
 * null
 * undefined
 * array<type>
 * object{}
 * any
 * void
 * Never
 * Unknown
 */
let str;
const num = 10;
const bool = true;
const fruits = ["apple", "banana", "mango"];
const integers = [1, 2, 3, 4, 5];
const person = { name: "John Morris", age: 30, department: "Marketing" };
var PromiseStatus;
(function (PromiseStatus) {
    PromiseStatus["PENDING"] = "Pending";
    PromiseStatus["FULLFILLED"] = "Fullfilled";
    PromiseStatus["REJECTED"] = "Rejected";
})(PromiseStatus || (PromiseStatus = {}));
var nums;
(function (nums) {
    nums[nums["Pending"] = 0] = "Pending";
    nums[nums["Fullfilled"] = 1] = "Fullfilled";
    nums[nums["Rejected"] = 2] = "Rejected";
})(nums || (nums = {}));
PromiseStatus.FULLFILLED; // using an enum
let alphaNum; // union type
alphaNum = 10;
alphaNum = "hello";
const add = (a, b) => {
    if (typeof b !== "undefined")
        return a * b;
    return a;
};
const strConcat = (a, b) => {
    return a + b;
};
const sum1 = add(10, 20);
const sum2 = add(10);
let b;
class Person {
    constructor(name, age, hobbies, salary) {
        this.age = 30;
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.salary = salary;
    }
    introduce() {
        return `Hi, this is ${this.name}`;
    }
    greet() {
        return `Hi, this is ${this.name}`;
    }
    updateSalary(salary) {
        this.salary = salary;
    }
    get personSalary() {
        return this.salary;
    }
    set personSalary(salary) {
        this.salary = salary;
    }
}
class Employee extends Person {
    constructor(name, age, hobbies, salary, department) {
        super(name, age, hobbies, salary);
        this.department = department;
    }
}
const p1 = new Person('John Morris', 30, ['reading', 'writing', 'painting'], 1200);
const e2 = new Employee("John Morris", 30, ["reading", "writing", "painting"], 1200, 'Marketing');
p1.personSalary = 1000; // setter
const p1Salary = p1.personSalary; // getter
