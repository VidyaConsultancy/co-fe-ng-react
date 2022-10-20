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
const num: number = 10;
const bool: boolean = true;
const fruits: string[] = ["apple", "banana", "mango"];
const integers: Array<number> = [1, 2, 3, 4, 5];
const person: {
  name: string;
  age: number;
  department: string;
} = { name: "John Morris", age: 30, department: "Marketing" };
enum PromiseStatus {
  PENDING = "Pending",
  FULLFILLED = "Fullfilled",
  REJECTED = "Rejected",
}

enum nums {
  "Pending",
  "Fullfilled",
  "Rejected",
}

PromiseStatus.FULLFILLED; // using an enum

let alphaNum: string | number | boolean | null; // union type
alphaNum = 10;
alphaNum = "hello";

const add = (a: number, b?: number): number => {
  if (typeof b !== "undefined") return a * b;
  return a;
};

// const strConcat = (a, b) => {
//   return a + b;
// }

const sum1: number = add(10, 20);
const sum2: number = add(10);
let b;

class Person {
  public name: string;
  public age: number = 30;
  protected hobbies: string[];
  private salary: number;

  constructor(name: string, age: number, hobbies: string[], salary: number) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.salary = salary;
  }

  public introduce(): string {
    return `Hi, this is ${this.name}`;
  }

  protected greet(): string {
    return `Hi, this is ${this.name}`;
  }

  private updateSalary(salary: number): void {
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
  department: string;

  constructor(
    name: string,
    age: number,
    hobbies: string[],
    salary: number,
    department: string
  ) {
    super(name, age, hobbies, salary);
    this.department = department;
  }
}

const p1 = new Person(
  "John Morris",
  30,
  ["reading", "writing", "painting"],
  1200
);
const e2 = new Employee(
  "John Morris",
  30,
  ["reading", "writing", "painting"],
  1200,
  "Marketing"
);
p1.personSalary = 1000; // setter
const p1Salary = p1.personSalary; // getter

type TCar = {
  brake: number;
  steering: number;
  wheels: number;
  fuel: number;
  drive: () => void;
};

type TataCar = TCar & ICar & { brand: "Tata" };

interface ICar {
  brake: number;
  steering: number;
  wheels: number;
  fuel: number;
  drive: () => void;
}

class CCar implements ICar {
  constructor(
    public brake: number,
    public steering: number,
    public wheels: number,
    public fuel: number
  ) {}

  drive(): void {}
}

const harrier = new CCar(1, 1, 4, 200);
harrier.brake;

const nano: TataCar = {
  brake: 1,
  steering: 1,
  wheels: 4,
  fuel: 100,
  brand: "Tata",
  drive: function () {
    this.fuel -= 10;
  },
};

const nexon: TCar = {
  brake: 1,
  steering: 1,
  wheels: 4,
  fuel: 100,
  drive: function () {
    this.fuel -= 10;
  },
};
