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

// REPLACE ==>

const replaceEl = (fruit[2] = 'Pineapple');
console.log(replaceEl);
console.log(fruit);

// POP ==> Adds a new element to an array (at the end)

const pop = fruit.pop();
console.log(fruit);

// PUSH ==> Remove the last item from an array

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


