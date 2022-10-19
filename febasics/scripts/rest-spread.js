const apple = 'Apple';
const fruits = [apple, 'Mango', 'Banana', 'Grapes', 'Orange', 'Blueberry'];
// Array Destructing es6
const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];
const [f1, , f3, ...restOfFruits] = fruits;
console.log(f1, f3, restOfFruits)

const gearBox = 1;
const car = {
  brake: 1,
  handBrake: 1,
  steering: 1,
  accelerator: 1,
  gearBox,
  gears: 5,
  fuel: 100,
  drive: () => this.fuel -= 2,
}
// Object destructuring es8
const cb = car.brake;
const ca = car.accelerator;
const { accelerator: caa, brake: cbb, fuel: cff } = car;
const { accelerator, brake, fuel, ...restOfProp } = car;
console.log(caa, cbb, cff);
console.log(accelerator, brake, fuel, restOfProp);

// Rest and Spread Operators ES6 for arrays and in ES8 for objects
// ...
// const copyOfFruits = [].concat(fruits, 'Strawberry');
const copyOfFruits = [...fruits, 'Strawberry'];
copyOfFruits[4] = 'Apricot';
console.log(copyOfFruits, fruits);

// const copyOfCar = Object.assign({}, car);
const copyOfCar = { ...car };
copyOfCar.fuel = 200;
console.log(copyOfCar, car);

const sum = (...numbers) => {
  console.log(numbers);
}
sum(...fruits)

const greetCar = ({ fuel: fuel, brake: brake, ...rest }) => {
  console.log(fuel, brake, rest)
}

greetCar(car);
greetCar({ fuel: 100, brake: 1 })
