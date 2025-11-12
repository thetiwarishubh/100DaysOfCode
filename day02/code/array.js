//  An array is an object type designed for storing data collections.
/* Key characteristics of javascript arrays are:- 
Element :- An Array is a list of values, known as elements.
Ordered :- Array elements are ordered based on their index.
Zero indexed :- The first is at index 0, the second at index 1, and so on,
Dynamic size :- Array can grow or shrink as elements are added ir removed.
Heterogeneous :- Arrays can store elements of differnt data types(numbers, string, null, undefined, boolean, bigInt, symbol, object and other array.)
 */

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.push(11); //Add element at end

myArray.pop(); // Remove element from end
console.log(myArray);

let index = 5;
console.log(myArray[index]); // Output :- 6;
console.log(myArray.at(index)); // Output :- 6;

const mySecondArray = ["Shubham", "Tiwari", "Delhi", "Japan"];
console.log(myArray.concat(mySecondArray)); // Output :- [  1,       2,         3,      4,       5,         6,       7,       8,         9,      10,      'Shubham', 'Tiwari',   'Delhi', 'Japan' ]
//Add two array using concat;

console.log(Object.entries(mySecondArray)); // Use entries for get key value pair for each index;
