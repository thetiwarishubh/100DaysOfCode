const palindromeCheck = function(str){
    if(!str) return `Please Enter a String`;
    const newStr = str.split('').reverse().join('');
    if(newStr === str){
        return `This is Palindrome`
    } else {
        return `This is Not-Palindrome`
    }
}
console.log(palindromeCheck("racecar"))

