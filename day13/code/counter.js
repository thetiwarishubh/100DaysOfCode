export const counter = function(){
    let count = 0;
    return function(){
        count++
        return count;
    }
}