/* 
        I Promise a result
    * "Producing code" is code that can take some time.
    * "Consuming code" is code that must wait for the result.
    A Promise is an Object that links Producing code and Consuming code.
 */

// Promise syntex 
let myPromise = new Promise((resolve, reject) => {
    // "producing code" (may take some time);
    resolve() // When resolve
    reject() // when reject
})

// "Consuming code" (Must wait for a fulfilled Promise)
myPromise.then(function(value){
    // code if successfull
})
.catch(function(value){
    // code if some error
})

const task = new Promise((res, rej) => {
    setTimeout(() => {
        let isTaskCompleted = false
        if(isTaskCompleted){
            rej(`Fail`)
        } else {
            res(`Success`)
        }
    }, 1000);
})

task.then(value => console.log(`Successfully : ${value}`))
.catch(err => console.log(`error : ${err}`))
.finally(()=>console.log(`Already`));


// ✅ LEVEL 1: BASIC PROMISE QUESTIONS (1–10)

// 1. 