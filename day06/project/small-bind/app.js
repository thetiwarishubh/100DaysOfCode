const input = document.getElementById("inputText");
const display = document.querySelector('#displayShow');


input.addEventListener("input", (e)=> {
    if(e.target.value === ""){
        display.textContent = `Hello Mr.`;
    } else {
        display.textContent = `Hello ${e.target.value}`;
    }
});