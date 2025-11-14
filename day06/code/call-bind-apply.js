// With the call() method, you can write a method that can be used on different objects.


function Setusername(username){
    this.username = username
};

function CreateUser(username, email, password){
    Setusername.call(this, username)
    this.email = email
    this.password = password
}

const userOne = new CreateUser("Shubham", "Shubham@google.com", "Shubham@123");
console.log(userOne)

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);

person.fullName.call(person2);

const personOne = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = personOne.fullName.bind(member);
console.log(fullName())

const person3 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person4 = {
  firstName:"John",
  lastName: "Doe"
}

person4.fullName.apply(person3, ["Oslo", "Norway"]);