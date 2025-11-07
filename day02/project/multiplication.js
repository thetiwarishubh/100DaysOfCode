// Multiplication Table
const multiplication = function(num){
    if(!num || typeof num !== 'number') console.log(`Please Enter a number`);
    for(let i = 1; i <=10; i++){
        console.log(`${num} * ${i} = ${num * i}`)
    }
}
multiplication(4);

//Even Filter;

const checkEvenFilter = function(arr){
    if(!arr) return `Please Enter a Array!`
    let evenFilter = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenFilter.push(arr[i])
        }
    }
    return console.log(evenFilter)
}
console.log(checkEvenFilter([2, 3, 4,5 ,6]))
