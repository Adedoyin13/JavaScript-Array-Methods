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


