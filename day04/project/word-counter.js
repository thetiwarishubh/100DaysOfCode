const wordCounter = function (count) {
  if (!count) return `Please Enter a word!`;
  let counter = 0;
  let counters = count.split(" ");
  for (let i = 0; i < counters.length; i++) {
    if(counters[i] === ""){

    } else {
        counter++
    }
  }
  console.log(counters);
  return counter;
};

console.log(wordCounter("Shubham my name is"));
