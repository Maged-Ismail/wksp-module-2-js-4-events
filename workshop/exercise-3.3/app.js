
const body = document.querySelector('body');

function createBtn(){
    document.removeEventListener('click', createBtn);
    for (let i=1; i<=20; i++){
        let newBtn = document.createElement('button');
        let btnId = 'B-'+i;
        newBtn.innerText =btnId;
        newBtn.id = btnId;
        body.appendChild(newBtn);
        newBtn.style.position= 'absolute';
        newBtn.style.top=`${Math.random()*1000}px`;
        newBtn.style.left=`${Math.random()*1000}px`;
        newBtn.style.right=`${Math.random()*1000}px`;
        newBtn.addEventListener('click', colorGrn);
    }

} 

function colorGrn(){
    let name = document. getElementById(`${event.target.id}`);
    name.removeEventListener('click', colorGrn);
    name.style.backgroundColor='green';
    name.addEventListener('click', colorRed);
}

function colorRed(){
    let name = document. getElementById(`${event.target.id}`);
    name.removeEventListener('click', colorRed);
    name.style.backgroundColor='red';
    name.addEventListener('click', colorGrn);
}

document.addEventListener('click', createBtn);