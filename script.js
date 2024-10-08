// ARRAY METHODS ==>

console.log('JS Array Methods');

const fruit = [
    'Banana', 'Apple', 'Orange', 'Cherry', 'Strawberry', 'Almonds'
]

// LENGTH ==>

const length = fruit.length;
console.log(length);

// TOSTRING ==> converts array to string

const string = fruit.toString();
console.log(string);

// Another way to do it

console.log(fruit.toString());

// REPLACE ==>

const replaceEl = (fruit[2] = 'Pineapple');
console.log(replaceEl);
console.log(fruit);

// POP ==> Remove the last element from an array (at the end)

const pop = fruit.pop();
console.log(fruit);

// PUSH ==> Adds a new element to an array (at the end)

const push = fruit.push('Mango');
console.log(fruit);

// SHIFT ==> removes the first array element and 'shifts' all other elements to a lower index

const shift = fruit.shift();
console.log(fruit);

// UNSHIFT ==> Adds a new element to an array (at the beginning), and 'unshift' older elements.

const unshift = fruit.unshift('Lemon');
console.log(fruit);

// SPLICE ==>   

const splice = fruit.splice(3, 2, 'Banana');
console.log(fruit);

// SLICE ==> 

const slice = fruit.slice(1);
console.log(fruit);
console.log(slice);

// INCLUDES ==>

const include = fruit.includes('Banana');
console.log(include);

let myNumbers = [
    1, 1, 4, 6, 2, 3, 2, 4, 9, 5, 7, 4, 2, 7, 4, 8
]

// INDEXOF ==>

let among2 = myNumbers.indexOf(2);
console.log(among2);

// LASTINDEXOF ==>

let among3 = myNumbers.lastIndexOf(4);
console.log(among3);

// SORT ==>

console.log(myNumbers.sort());
console.log(myNumbers.length);

let colours = [
    'white', 'black', 'blue', 'green', 'brown', 'pink', 'Yellow', 'Orange'
]

let length2 = colours.length;
console.log(length2);

let string2 = colours.toString();
console.log(string2);

let replace2 = (colours[4] = 'Purple')
console.log(colours);

let pop2 = colours.pop();
console.log(colours);

let push2 = colours.push('Lemon');
console.log(colours);

let shift2 = colours.shift();
console.log(colours);

let unshift2 = colours.unshift('Violet');
console.log(colours);

// CONCAT ==> Creates a new array by merging (concatenating) existing arrays

const myBoys = ['Linus', 'Mubarak', 'Emmanuel'];
const myGirls = ['Cecelia', 'Shade'];
const myPets = ['Cat', 'Dog'];
// console.log(myBoys.concat(myPets, myGirls));
const concat = myBoys.concat(myGirls);
console.log(concat.concat(myPets));

let a = 10;
let b = ++a;
console.log(b);
// console.log(a);


// PRIMITIVE AND REFERENCE (NON PRIMITIVE) DATA TYPES OR VALUES

// Primitive value type stores the actual value in a variable

//  EXAMPLE1 ==>

let x = 'hi';
let y = 2;
let z = 5;

console.log(x);
console.log(y);
console.log(z);

// Reference types stores the reference address of the actual object in the variable

let m = [1, 2, 3];   // Storage address : 0x01
let n = [5, 4, 6];   // Storage address : 0x02
let k = m;
k.push(4);
m.push(5);

// m = 0x01 = [1, 2, 3]
// k = m

console.log(`m = ${m}`);
console.log(`k = ${k}`);


// EXAMPLE2 ==>

let p = [1, 2];
let q = [1, 2];

// Non Primitive is stored in the storage address then the storage address is later stored in the variable

console.log(`p === q ${p === q}`);

console.log(`p = ${p}`);
add(p, 3)
console.log(`p = ${p}`);

function add(array, element) {
    array.push(element)
}

const names = ['Shola', 'Bola', 'Tola'];

// ES(5) FOR LOOP METHOD ==>

for(let i = 0; i < names.length; i++){
    console.log(i, names[i]);
}

for(const name of names) {
    console.log(name);
}

// forEach() method

names.forEach(function() {});

names.forEach(() => {} );

names.forEach((i, value, arr) => {
    console.log(i);
})

let totalValue = 0;
const trans = [42, 45, 26, 4, 13, 16];
trans.forEach((trns) => {
    console.log((totalValue += trns),totalValue, trns);
} )
console.log(totalValue);

const colors = ['red', 'blue', 'pink', 'green']
colors.forEach((color) => {
    console.log(color);
})

const numbers = [10, 20, 30]
let sum = 0;
numbers.forEach((value) => {
    sum += value
})
console.log(sum);

// Filter method

const arrayNumbers = [-20, -40, 43, 30, -1, 23, 34, 4, -50, 44, -75];

// To print negative nubers

const negative = arrayNumbers.filter((number) => number < 0 );
console.log(negative);

// To print positive numbers

const positiveNumbers = arrayNumbers.filter((myNum) => myNum > 0)
console.log(positiveNumbers);
// For loop method

let negNums = []
for(let i = 0; i < arrayNumbers.length ; i++) {
    if(arrayNumbers[i] < 0 ) {
        negNums.push(arrayNumbers[i])
    }
}
console.log(negNums);
// console.log(arrayNumbers);


let posNums = [];
for (let i = 0; i < arrayNumbers.length; i++) { // Fixed condition
    if (arrayNumbers[i] > 0) {
        posNums.push(arrayNumbers[i]);
    }
}
console.log(posNums); // Outputs positive numbers

// console.log(arrayNumbers);

// forEach() method

let negNums1 = [];
arrayNumbers.forEach((arrayNumbers) => {
    if (arrayNumbers < 0) {
        negNums1.push(arrayNumbers)
    }
})
console.log(negNums1);

let negNums2 = [];
arrayNumbers.forEach((arrayNumbers) => {
    if (arrayNumbers > 0) {
        negNums2.push(arrayNumbers)
    }
})
console.log(negNums2);

const nums = [1, 2, 3, 4]

const number3 = nums.filter((num) => num < 3 )
console.log(number3);

// Using forEach to print numbers less than 3

nums.forEach(num => {
    if (num < 3) {
        console.log(num);
    }
});

// (cohort) ==> it is representing individual element in an array

// Map() method cfeates a new array to execute its operations

const numbas = [1, 2, 3, 4, 5, 6];
const multiplied = numbas.map(num => num * 2);
console.log(multiplied);
console.log(numbas);

const words = ['Hello', 'World', 'Really']

const upperCaseWords = words.map(word => word.toUpperCase());
console.log(upperCaseWords);

const users = [
    {name: 'Opera', age: 67},
    {name: 'Muby', age: 100},
    {name: 'Rodiyat', age: 30},
    {name: 'OG', age: 25}
]

const userNames = users.map(user => user.name);
console.log(userNames);

const oldUsers = users.map(user => ({
    ...user,                                   //Spread Operator : To spread elements in sn object
    isOld: user.age >= 67
}))
console.log(oldUsers);

// Class Work

const people = [
    { name: 'Rodiyat', age: 36 },
    { name: 'Opera', age: 17 },
    { name: 'Muby', age: 86 },
    { name: 'Teddy', age: 16 },
    { name: 'Chapo', age: 40 },
    { name: 'OG', age: 62 },
];

const peopleAgeVerification = people.map(person => {
    let ageGroup;

    if (person.age < 18) {
        ageGroup = 'Child';
    } else if (person.age < 50) {
        ageGroup = 'Adult';
    } else {
        ageGroup = 'Old';
    }

    return {
        ...person,
        isSenior: person.age >= 65,
        ageGroup: ageGroup
    };
});

console.log(peopleAgeVerification);




