const arrayAnalyzer = function(arr){
   if(!arr) return `Please Enter a Array!`;
   let min = Math.min(...arr) 
   let max = Math.max(...arr) 
   let total = arr.reduce((a, b)=>a+b, 0);
   let count = arr.length;
   let average = total/count;
   console.log(`Min : ${min}, Max : ${max}, Total : ${total}, Count : ${count}, Average : ${average}`)
}
console.log(arrayAnalyzer([1, 2, 3, 4, 5]))