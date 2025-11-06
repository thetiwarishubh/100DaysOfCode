// Sometimes we need to perform different actions based on different conditions.

//Ternary Operators

let age = 21;
let canDrink = age >= 18 ? "Yes, you can drink." : "No, no yet.";
console.log(canDrink);

let day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log(`It's a weekday`);
    break;
  case "Saturday":
  case "Sunday":
    console.log(`It's the weekend`);
  default:
    console.log(`Invalid day`);
}


let user = {
    username : "Shubham",
    premium : false
}

user.premium && console.log(`Welcome back, ${user.username}`)


let userDetails = null
console.log(userDetails?.profile?.email ?? `Invalid Email address`)