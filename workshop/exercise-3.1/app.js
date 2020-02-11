//for loop that creates 20 buttons
const body = document.querySelector('body');
let newButton;

function createButton () {
    document.removeEventListener('click', createButton);
    for(let i=1; i<=20; i++){
        const buttonName = 'button-'+ i;
        newButton = document.createElement('button');
        newButton.innerText= buttonName;
        newButton.id=buttonName;
        newButton.style.backgroundColor='red';
        newButton.style.margin='5px';
        newButton.style.display='inline-block';
        body.appendChild(newButton);
        newButton.addEventListener('click', colorChange);
}
}
// create function to change color
function colorChange(event){
    const btnId= document.getElementById(`${event.target.id}`);
    btnId.style.backgroundColor='green';
}

// create 'click' event to trigger for loop

document.addEventListener('click', createButton);