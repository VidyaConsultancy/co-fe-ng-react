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
let str: string;
const num: number = 10;
const bool: boolean = true;
const fruits: string[] = ["apple", "banana", "mango"];
const integers: Array<number> = [1, 2, 3, 4, 5];
const person: {
  name: string;
  age: number;
  department: string;
} = { name: "John Morris", age: 30, department: "Marketing" };
str = "Hello world";
enum PromiseStatus {
  PENDING = 'Pending',
  FULLFILLED = 'Fullfilled',
  REJECTED = 'Rejected'
}

enum nums {
  'Pending',
  'Fullfilled',
  'Rejected'
}

PromiseStatus.FULLFILLED // using an enum

let alphaNum: string | number | boolean | null; // union type
alphaNum = 10;
alphaNum = 'hello';

const add = (a: number, b?: number): number => {
  if(typeof b !== 'undefined') 
    return a * b;
  return a;
}

const sum1: number = add(10, 20);
const sum2: number = add(10);
let b;
