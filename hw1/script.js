/********************************************************************
 *
 *  Задание 1
 *
 ********************************************************************/

function loop(times = 0, callback = null) {
  if (callback !== null){
    for (let i = 0; i < times; i++) {
      callback(2, 3);
    }
  }
}
console.log('Задание 1');
loop(3, (a, b) => console.log(a + b));

/********************************************************************
 *
 *  Задание 2
 *
 ********************************************************************/

function calculateArea(figure, a = 0, b = 0, c = 0){
  let area = 0;
  let result = {};
  if (figure === 'rectangle') {
    area = a * b;
    result = {
      area: area,
      figure: 'Прямоугольник',
      input: {a: a, b: b}
    };
  }
  if (figure === 'circle') {
    area = Math.PI * (a*a);
    result = {
      area: area,
      figure: 'Круг',
      input: {a: a}
    };
  }
  if (figure === 'triangle') {
    let p = (a + b + c) / 2;
    area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    result = {
      area: area,
      figure: 'Треугольник',
      input: {a: a, b: b, c: c}
    };
  }

  return result;
}

/********************************************************************
 *
 *  Задание 3
 *
 ********************************************************************/

class Human {
  constructor(name, age, dateOfBirth){
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }

  displayInfo(){
    return this.name + ' ' + this.age + ' ' + this.dateOfBirth;
  }
}
class Employee extends Human {
  constructor( name, age, dateOfBirth, salary, department){
    super(name,  age, dateOfBirth);
    this.salary = salary;
    this.department = department;
  }

  displayInfo(){
    return super.displayInfo() + ' ' + this.salary + ' ' + this.department;
  }
}

class Developer extends Employee {
  constructor(name, age, dateOfBirth, salary, department){
    super(name,  age, dateOfBirth, salary, department);
    this.manager = null;
  }

  setManager(manager) {
    if (this.manager !== manager){
      manager.addDeveloper(this);
      this.manager = manager;
    }
  }

  removeManager() {
    this.manager.developers.splice(this.manager.developers.indexOf(this), 1);
    this.manager = null;
  }
}

class Manager extends Employee {
  constructor(name, age, dateOfBirth, salary, department){
    super(name,  age, dateOfBirth, salary, department);
    this.developers = [];
  }

  addDeveloper(developer){
    let index = this.developers.indexOf(developer);
    if (index == -1){
      this.developers.push(developer);
      developer.setManager(this);
    }
  }

  removeDeveloper(developer){
    let index = this.developers.indexOf(developer);
    if (index != -1) {
      developer.removeManager();
    }
  }
}

let dev = new Developer('developer', 12, '12.12.12', 5, 'asdasasd');
let mngr = new Manager('manager', 20, '01.01.01', 10, 'qweqweqwe');

// dev.setManager(mngr);
mngr.addDeveloper(dev);
console.log('\nЗадание 3');
console.log(dev.displayInfo());
console.log(mngr.displayInfo());
console.log(dev);
console.log(mngr);

dev.removeManager();
// mngr.removeDeveloper(dev);
console.log(dev);
console.log(mngr);



/********************************************************************
 *
 *  Задание 4
 *
 ********************************************************************/


function* generator() {
  let abc = {};
  abc.a = yield 'a';
  abc.b = yield 'b';
  abc.c = yield 'c';
  return abc;
}

let gen = generator();

console.log('\nЗадание 4');

console.log(gen.next(prompt(gen.next(prompt(gen.next(prompt(gen.next().value, 'a')).value, 'b')).value, 'c')).value);



/********************************************************************
 *
 *  Задание 5
 *
 ********************************************************************/

let indx = 1;
let arrPromise = [];
for (let i = 0; i < 10; i++){
  arrPromise.push(new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/'+indx);
    xhr.onload = function() {
      if (xhr.status == 200) {
        resolve(xhr.responseText);
      }
      else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = function() {
      reject("Network Error");
    };
    xhr.send();
  }));
  indx++;
}

console.log('\nЗадание 5');

for (let i = 0; i < 10; i++){
  arrPromise[i].then(
    result => console.log(JSON.parse(result)),
    error => console.log(error)
  );
}