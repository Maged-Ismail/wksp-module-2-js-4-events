const body= document.querySelector('body');

function createButton(){
    document.removeEventListener('click', createButton);
    for (let i=1; i<=20; i++){
        let newButton = document.createElement('button');
        let buttonId = 'Button-'+i;
        newButton.innerText= buttonId;
        newButton.id = buttonId;
        newButton.style.margin='5px';
        body.appendChild(newButton);
        newButton.addEventListener('click', colorGreen);
    }
}

function colorGreen(){
    let name = document.getElementById(`${event.target.id}`);
    name.removeEventListener('click', colorGreen);
    name.style.backgroundColor='green';
    name.addEventListener('click', colorRed);
}

function colorRed(){
    let name = document.getElementById(`${event.target.id}`);
    name.style.backgroundColor='red';
    name.addEventListener('click', colorGreen);

}

document.addEventListener('click', createButton);