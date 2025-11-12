// Loops can excute a block of code a number of time;

//Print "Hello World!" 10 Times;

for (let i = 0; i < 10; i++) {
  console.log(`${i + 1}: Hello World!`);
}

// for(exp1, exp2, exp3){
// This is code
// }

//Exp1 is excuted (one time) before the execution of the code block.
// exp2 is define the conditions for executing the code block
// exp3 is executed (every time) after the code block has been executed.

// Print 1 to 10 number

for (let i = 1; i <= 10; i++) {
  console.log(`for Loop : ${i}`);
}

let i = 1;
while (i <= 10) {
  console.log(`while loop : ${i}`);
  i++;
}
let j = 1;
do {
  console.log(`do while loop : ${j}`);
  j++;
} while (j <= 10);

const user = {
  firstname: "Shubham",
  lastname: "Tiwari",
  profession: ["Youtuber", "Programmer"],
};

for (const element in user) {
  console.log(`element ${element}`);
}

const arr = ["12", "shubham", "tiwari"];

for (let count in arr) {
  // console.log(`${arr}`)
  console.log(`${arr[count]}`);
}
