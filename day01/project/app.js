const display = document.querySelector('.input-box');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener("click", (e)=> {
        console.log(e.target.innerText)
    })
})