/*
map() - Transform each element, return new array,

Syntex - 
const newArray = arr.map((currentValue, index, array)=> {
    return transformedValue
    });

    * Return a new array of same length;
    * Does not mutate original array (unless callback mutates items).
    * Common use : transform values of pick fields from objects.
    * Example ⬇️
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNumbers = numbers.map(num => num * 2)
console.log(doubledNumbers); //Output :- [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

//Example array of objects;

const users = [
    {id : 1, username : "Shubham"},
    {id : 2, username : "Tiwari"},
    {id : 3, username : "Turbo"},
    {id : 4, username : "Shubh"}
];

const getName = users.map(user => user.username);
console.log(getName) // Output :- [ 'Shubham', 'Tiwari', 'Turbo', 'Shubh' ]

/*
filter() - keep elements that satisfy condition.
Syntex - const filtered = arr.filter((currentValue, index, array) => {
    Return true to keep, false to drop
    });
    * Returns a new array (length <= original).
    * Does not change original array.
*/

//Example :- 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = nums.filter((num) => num % 2 === 0);
console.log(even) // Output :- [ 2, 4, 6, 8, 10 ];

// Example - filter objects 
const students = [
    {name : "Shubham", marks : 70},
    {name : "Tiwari", marks : 95},
    {name : "Shubh", marks : 90},
    {name : "Turbo", marks : 85},
];

const pass = students.filter((user) => user.marks >= 75);
console.log(pass) /*  Output :- 
[ { name: 'Tiwari', marks: 95 },
  { name: 'Shubh', marks: 90 },
  { name: 'Turbo', marks: 85 }
]
*/

/*
reduce() - reduce array to signle value (very powerful)
syntex - 
const result = arr.reduce((accumulator, currentValue, index, array) => {
  // update and return new accumulator
}, initialValue);
 
    * initialValue - is recommended if omitted, first element becomes accumulator and iteration starts from index 1.
    * Can return numbers, objects, arrays, strings - anything.
    * Common patterns ---
    * Sum, Product
    * Build objects/map (groupBy, count)
    * Flatten arrays
    * Compose transformations (functional style) 
 */

// Example :- 
// 1.SUM
const number = [1, 2, 3, 4, 5, 6];
const sum = number.reduce((acc, cur) => acc + cur, 0);
console.log(sum)

// 2. Count frequency / groupBy
const colors = ["red", "blue", "red", "green", "blue"];
const freq = colors.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;

}, {});
console.log(freq)

// 3. Array of objects - total marks
const schoolStudents = [
    {name : "Shubham", marks : 84},
    {name : "Shubh", marks : 80},
    {name : "Turbo", marks : 70},
    {name : "Thakur", marks : 90},
    {name : "Tiwari", marks : 85}
];
 const studentsMarks = schoolStudents.reduce((acc, cur) => acc + cur.marks, 0
 );
 console.log(studentsMarks) // Output :- 409;


// 4. Transform to map by id 
const studentsName = schoolStudents.reduce((acc, cur) => {
    acc[cur.name] = cur.marks;
    return acc;
}, {});
console.log(studentsName);


