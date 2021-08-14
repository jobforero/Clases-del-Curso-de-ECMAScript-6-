function newFunction(name, age, country){
    var name = age ││ 'oscar';
    var age = age ││ 32;
    var country = country ││ 'MX';
    console.log(name, age , country)
}

//  es6
function newFunction2(name = 'Oscar', age = 32, country= "MX"){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo','23','CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

/// LET y CONST, Multilínea, Spread Operator y Desestructuracion

let lorem = "Practicando programación ECMASScript 6+  \n"
   + "Otra frase epica que necesitamos"

// es6
   let lorem2 = `otra frade epica que nesitamos
   ahora es otra frase epica
   `;
   
console.log(lorem)
console.log(lorem2)


let person = {
    'name': 'oscar',
    'age' : 32,
    'country' : 'MX'
}

console.log(person.name, person.age);

// es6
let { name, age} = person;
console.log(name, age);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

var hola = 'hola';
console.log(hola)

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);
//console.log(globalLet);

const a = 'b';

let name = 'Oscar';
let age = 32;

//es5
obj = {name: name, age: age};
//es6
obj2 = { name, age};
console.log(obj2);

const name = [
    {name: 'Oscar', age: 32},
    {name: 'Yesica', age:27}
]

let listOfNames = names.map(function (item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, ege, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
         if(true){
             resolve('Hey')
         } else {
             reject('Ups!!');
         }
    });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('Hola'))
  .catch(error => console.log(error));


  //
  class calculator {
      constructor() {
          this.valueA = 0;
          this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
  }

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from './module';

hello();

function * helloWorld() {
    if (true) {
        yeild 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

