// Object - An object is a variable that can hold many variables.
// Objects are collections of key-value pairs, where each key (known as property names) has a value.

const car = {
    brand : "Toyota",
    model : "Corolla",
    year : 2022,
    color : "red",
    isStarted : false,
    fuel: 50, //litres
    speed : 0, //km/h

    start : function(){
        if(!this.isStarted){
            this.isStarted = true;
            console.log(`${this.brand} has started. Ready to go!`)
        } else {
            console.log(`${this.brand} has already started!`)
        }
    },

    accelerate(amount){
        if(this.isStarted && this.fuel > 0){
            this.speed += amount;
            this.fuel -= amount * 0.1;
            console.log(`Speed ${this.speed} km/h | ${this.fuel.toFixed(1)}L`)
        }
    },

    break(){
        if(this.speed > 0){
            this.speed -= 10;
            console.log(`Braking... Speed now: ${this.speed} km/h`)
        } else {
            console.log(`Car has already stopped!`)
        }
    },

    refuel(amount){
        this.fuel += amount;
        console.log(`Refueled ${amount} L. Total fuel: ${this.fuel}L`)
    }, 

    stop : function(){
        this.speed = 0;
        this.isStarted = false;
        console.log(`${this.brand} stopped completely.`)
    },
};

car.start()
car.accelerate(20)
car.accelerate(40);
car.break()
car.refuel(20);
car.stop;


//Constructor function 

function CarDetails(brand, model, year, color){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.start = function(){
        console.log(`${this.brand} ${this.model} has started!`)
    }
}

// const car1 = new CarDetails("BMW","M5",2022, "Red")
// car1.start();

