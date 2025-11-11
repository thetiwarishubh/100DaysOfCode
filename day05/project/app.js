const empName = document.getElementById('empName');
const editButton = document.querySelector('h1');

editButton.addEventListener("click", ()=> {
    const nameText = empName.innerText;
    const textArea = document.createElement('input');
    textArea.classList.add('textArea')
    textArea.value = nameText;

    empName.parentNode.replaceChild(textArea, empName);
    textArea.focus()

    textArea.addEventListener("blur", ()=>{
        empName.innerText = textArea.value;
        textArea.parentNode.replaceChild(empName, textArea)
    });
})