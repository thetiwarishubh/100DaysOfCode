const display = document.querySelector('.display');
const button = document.querySelector('.generate-btn');

const randomJokes = async function () {
    try {
        const response = await fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random");
        if(!response.ok){
            throw new Error(`HTTP Error : ${response.status}`);
        }
        const jokes = await response.json();
        display.textContent = jokes.data.content
        console.log(jokes.data.content) 
    } catch (error) {
        console.log(`Error : ${error}`)
    }
}

button.addEventListener("click", ()=> {
    randomJokes()
})